"use client";

import { useReadContract } from "wagmi";
import { parseAbi } from "viem";

type Props = {
  tokenId: number;
};

/**
 * Minimal ABI for reading identity metadata
 */
const MINI_DIT_ABI = parseAbi([
  "function identities(uint256) view returns (string name, string github, string linkedin, string ageGroup, bool compromised)",
]);

//  Replace after deployment
const MINI_DIT_CONTRACT_ADDRESS =
  "0x0000000000000000000000000000000000000000";

export default function IdentityCard({ tokenId }: Props) {
  const { data, isLoading, error } = useReadContract({
    address: MINI_DIT_CONTRACT_ADDRESS,
    abi: MINI_DIT_ABI,
    functionName: "identities",
    args: [BigInt(tokenId)],
  });

  if (isLoading) return <p>Loading identity...</p>;
  if (error || !data) return <p> Identity not found</p>;

  const [name, github, linkedin, ageGroup, compromised] = data;

  return (
    <div
      style={{
        border: compromised ? "2px solid red" : "1px solid #333",
        padding: "16px",
        borderRadius: "8px",
        marginTop: "12px",
      }}
    >
      <h3>
        Identity Token #{tokenId}{" "}
        {compromised && <span style={{ color: "red" }}> Compromised</span>}
      </h3>

      <p>
        <strong>Name:</strong> {name || "—"}
      </p>

      <p>
        <strong>Age Group:</strong> {ageGroup || "—"}
      </p>

      {github && (
        <p>
          <strong>GitHub:</strong>{" "}
          <a href={github} target="_blank" rel="noopener noreferrer">
            {github}
          </a>
        </p>
      )}

      {linkedin && (
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            {linkedin}
          </a>
        </p>
      )}

      {!github && !linkedin && <p>No linked profiles</p>}
    </div>
  );
}
