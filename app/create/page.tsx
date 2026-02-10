"use client";

import { createIdentity } from "@/lib/store";
import { useRouter } from "next/navigation";

export default function CreateIdentityPage() {
  const router = useRouter();

  function handleSubmit(e: any) {
    e.preventDefault();
    const form = e.target;

    const id = createIdentity({
      name: form.name.value,
      nationality: form.nationality.value,
      residence: form.residence.value,
      ageGroup: form.ageGroup.value,
      twitter: form.twitter.value,
      linkedin: form.linkedin.value,
      github: form.github.value,
    });

    router.push(`/identity/${id}`);
  }

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Create Identity Token</h2>

      <form onSubmit={handleSubmit} className="grid gap-3">
        <input name="name" placeholder="Name (optional)" />
        <input name="nationality" placeholder="Nationality" />
        <input name="residence" placeholder="Residence" />
        <input name="ageGroup" placeholder="Age Group" />
        <input name="twitter" placeholder="Twitter" />
        <input name="linkedin" placeholder="LinkedIn" />
        <input name="github" placeholder="GitHub" />

        <button className="bg-black text-white p-2 rounded">
          Create Identity
        </button>
      </form>
    </>
  );
}
