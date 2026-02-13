"use client";

import WalletConnect from "app/components/WalletConnect";
import CreateIdentity from "app/components/CreateIdentity";
import EndorseIdentity from "app/components/EndorseIdentity";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-emerald-900 to-black px-6 py-10">
      
      {/* Heading */}
      <div className="text-center text-white">
        <h1 className="text-5xl font-extrabold">
          Web3 Identity Network
        </h1>
        <p className="mt-3 text-white/80">
          Create and endorse decentralized identities on the blockchain
        </p>
      </div>

      {/* Components */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        <WalletConnect account={""} setAccount={function (account: string): void {
          throw new Error("Function not implemented.");
        } } />
        <CreateIdentity />
        <EndorseIdentity account={""} />
      </div>

    </main>
  );
}
