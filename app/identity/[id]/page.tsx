import { identities, endorsements } from "@/lib/store";

export default async function IdentityProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: rawId } = await params;
  const id = Number(rawId);
  const identity = identities.find((i) => i.id === id);

  if (!identity) return <p>Identity not found</p>;

  return (
    <>
      <h2 className="text-xl font-bold">
        Identity Token #{identity.id}
      </h2>

      <pre className="bg-white p-4 mt-3 rounded">
        {JSON.stringify(identity, null, 2)}
      </pre>

      <h3 className="mt-4 font-semibold">Endorsed By</h3>
      <ul className="list-disc ml-6">
        {endorsements[id]?.length
          ? endorsements[id].map((eid) => (
              <li key={eid}>Identity #{eid}</li>
            ))
          : "No endorsements yet"}
      </ul>
    </>
  );
}
