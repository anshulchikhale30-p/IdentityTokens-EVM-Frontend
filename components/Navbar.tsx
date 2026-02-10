import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/create">Create Identity</Link>
      <Link href="/endorse">Endorse</Link>
    </nav>
  );
}
