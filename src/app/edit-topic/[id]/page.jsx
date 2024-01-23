export default function EditTopic() {
  return (
    <form className="max-w-[24rem] mx-auto my-8">
      <input
        type="text"
        placeholder="Title"
        className="w-full bg-[#333] p-2 mb-4"
      />
      <input
        type="text"
        placeholder="Description"
        className="w-full bg-[#333] p-2 mb-8"
      />
      <button className="bg-sky-600 px-8 py-2 w-full text-sm">Update</button>
    </form>
  );
}
