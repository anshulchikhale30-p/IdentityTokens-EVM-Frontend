"use client";

import { useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { parseAbi } from "viem";

/**
 * Minimal ABI for MiniDIT mint function
 */
const MINI_DIT_ABI = parseAbi([
  "function mintIdentity(string name, string github, string linkedin, string ageGroup)"
]);

//  Replace with deployed contract address later
const MINI_DIT_CONTRACT_ADDRESS =
  "0x0000000000000000000000000000000000000000";

export default function MintIdentity() {
  const { address, isConnected } = useAccount();
  const { writeContractAsync, isPending } = useWriteContract();

  const [name, setName] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [ageGroup, setAgeGroup] = useState("18+");
  const [txHash, setTxHash] = useState<string | null>(null);

  async function handleMint() {
    if (!isConnected) {
      alert("Connect wallet first");
      return;
    }

    try {
      const hash = await writeContractAsync({
        address: MINI_DIT_CONTRACT_ADDRESS,
        abi: MINI_DIT_ABI,
        functionName: "mintIdentity",
        args: [name, github, linkedin, ageGroup],
      });

      setTxHash(hash);
    } catch (err) {
      console.error("Mint failed:", err);
    }
  }

  return (
    <div style={{ border: "1px solid #333", padding: "16px", borderRadius: "8px" }}>
      <h2>Mint Identity</h2>

      {!isConnected && <p>🔌 Connect your wallet to mint an identity.</p>}

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="GitHub URL"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
      />

      <input
        placeholder="LinkedIn URL"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
      />

      <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
        <option value="18+">18+</option>
        <option value="21+">21+</option>
        <option value="25+">25+</option>
      </select>

      <button onClick={handleMint} disabled={isPending}>
        {isPending ? "Minting..." : "Mint Identity"}
      </button>

      {txHash && (
        <p>
           Transaction sent:
          <br />
          <code>{txHash}</code>
        </p>
      )}
    </div>
  );
}
