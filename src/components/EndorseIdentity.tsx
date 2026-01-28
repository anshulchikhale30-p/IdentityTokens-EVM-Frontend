"use client";

import { useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { parseAbi } from "viem";

/**
 * Minimal ABI for endorsement functions
 */
const MINI_DIT_ABI = parseAbi([
  "function endorse(uint256 fromTokenId, uint256 toTokenId)",
  "function revokeEndorsement(uint256 fromTokenId, uint256 toTokenId)",
]);

//  Replace after deployment
const MINI_DIT_CONTRACT_ADDRESS =
  "0x0000000000000000000000000000000000000000";

export default function EndorseIdentity() {
  const { isConnected } = useAccount();
  const { writeContractAsync, isPending } = useWriteContract();

  const [fromTokenId, setFromTokenId] = useState("");
  const [toTokenId, setToTokenId] = useState("");
  const [txHash, setTxHash] = useState<string | null>(null);
  const [mode, setMode] = useState<"endorse" | "revoke">("endorse");

  async function handleSubmit() {
    if (!isConnected) {
      alert("Connect wallet first");
      return;
    }

    try {
      const hash = await writeContractAsync({
        address: MINI_DIT_CONTRACT_ADDRESS,
        abi: MINI_DIT_ABI,
        functionName:
          mode === "endorse" ? "endorse" : "revokeEndorsement",
        args: [BigInt(fromTokenId), BigInt(toTokenId)],
      });

      setTxHash(hash);
    } catch (err) {
      console.error("Transaction failed:", err);
    }
  }

  return (
    <div style={{ border: "1px solid #333", padding: "16px", borderRadius: "8px" }}>
      <h2>{mode === "endorse" ? "Endorse Identity" : "Revoke Endorsement"}</h2>

      {!isConnected && <p> Connect your wallet to continue.</p>}

      <input
        type="number"
        placeholder="Your Token ID"
        value={fromTokenId}
        onChange={(e) => setFromTokenId(e.target.value)}
      />

      <input
        type="number"
        placeholder="Target Token ID"
        value={toTokenId}
        onChange={(e) => setToTokenId(e.target.value)}
      />

      <div style={{ marginTop: "8px" }}>
        <button onClick={() => setMode("endorse")}>Endorse</button>
        <button onClick={() => setMode("revoke")}>Revoke</button>
      </div>

      <button
        style={{ marginTop: "12px" }}
        onClick={handleSubmit}
        disabled={isPending}
      >
        {isPending
          ? "Submitting..."
          : mode === "endorse"
          ? "Submit Endorsement"
          : "Revoke Endorsement"}
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
