import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#222]">
      <div className="max-w-[48rem] mx-auto flex justify-between items-center py-4">
        <Link href="/">
          <Image src="/ak.svg" alt="logo" width={32} height={32} />
        </Link>
        <Link href="/add-topic" className="bg-cyan-500 px-2 py-1 text-sm">
          Add Topic
        </Link>
      </div>
    </nav>
  );
}
