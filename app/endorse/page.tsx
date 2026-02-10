"use client";

import { endorse } from "@/lib/store";

export default function EndorsePage() {
  function handleSubmit(e: any) {
    e.preventDefault();
    endorse(
      Number(e.target.from.value),
      Number(e.target.to.value)
    );
    alert("Identity endorsed successfully");
  }

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Endorse Identity</h2>

      <form onSubmit={handleSubmit} className="grid gap-3">
        <input name="from" placeholder="Your Identity Token ID" />
        <input name="to" placeholder="Identity Token ID to Endorse" />

        <button className="bg-black text-white p-2 rounded">
          Endorse
        </button>
      </form>
    </>
  );
}
