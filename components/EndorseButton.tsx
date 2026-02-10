"use client";

import { endorse } from "@/lib/store";

type EndorseButtonProps = {
  fromId: number;
  toId: number;
};

export default function EndorseButton({
  fromId,
  toId,
}: EndorseButtonProps) {
  function handleEndorse() {
    if (fromId === toId) {
      alert("You cannot endorse your own identity");
      return;
    }

    endorse(fromId, toId);
    alert(`Identity #${fromId} endorsed Identity #${toId}`);
  }

  return (
    <button
      onClick={handleEndorse}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Endorse
    </button>
  );
}
