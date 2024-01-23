import Link from "next/link";
import DeleteButton from "./DeleteButton";

export default function Topics() {
  return (
    <div className="bg-[#222] my-4 p-4">
      <div className="flex items-center justify-between">
        <h2>topic title</h2>
        <div className="flex gap-2 shrink-0">
          <DeleteButton />
          <Link
            href="/edit-topic/id"
            className="bg-sky-600 px-2 py-1 text-sm inline-block"
          >
            Edit
          </Link>
        </div>
      </div>
      <p>topic desciption</p>
    </div>
  );
}
