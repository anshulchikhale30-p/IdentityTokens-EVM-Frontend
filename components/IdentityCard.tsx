import Link from "next/link";
import { Identity } from "@/lib/store";

export default function IdentityCard({
  identity,
}: {
  identity: Identity;
}) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">Identity #{identity.id}</h3>
      <p>{identity.name || "Anonymous"}</p>
      <Link
        className="text-blue-600 underline"
        href={`/identity/${identity.id}`}
      >
        View Profile
      </Link>
    </div>
  );
}
