// Demo page mapping protocol actions to minimal UI

"use client";

import { useState } from "react";
import MintIdentity from "../components/MintIdentity";
import EndorseIdentity from "../components/EndorseIdentity";
import IdentityCard from "../components/IdentityCard";

/**
 * Mini DIT Playground Page
 * Intentionally minimal UI for experimenting with identity + endorsements
 */
export default function MiniDIT() {
  const [viewTokenId, setViewTokenId] = useState<number | null>(null);

  return (
    <main style={{ padding: "24px", maxWidth: "720px", margin: "0 auto" }}>
      <h1>Mini DIT Prototype</h1>

      <p>
        Experimental frontend for exploring Decentralized Identity Tokens (DIT).
        This UI does not make trust decisions — it only surfaces on-chain data.
      </p>

      <hr />

      {/* Mint Section */}
      <section>
        <h2>Mint Identity</h2>
        <MintIdentity />
      </section>

      <hr />

      {/* Endorse Section */}
      <section>
        <h2>Endorse Identity</h2>
        <EndorseIdentity />
      </section>

      <hr />

      {/* View Identity Section */}
      <section>
        <h2>View Identity</h2>

        <input
          type="number"
          placeholder="Enter Token ID"
          onChange={(e) => setViewTokenId(Number(e.target.value))}
          style={{ padding: "6px", marginRight: "8px" }}
        />

        {viewTokenId !== null && viewTokenId >= 0 && (
          <IdentityCard tokenId={viewTokenId} />
        )}
      </section>
    </main>
  );
}
