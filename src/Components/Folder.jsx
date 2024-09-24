const Folder = () => {
  return (
    <div className="w-[20%] min-h-[100vh] bg-[#1C1C1C] px-4 py-6">
      {/* <input
        type="text"
        placeholder="Search..."
        className="border-2 border-gray-300 rounded-lg bg-transparent px-4 py-2 w-full outline-none"
      /> */}
      <h1 className="text-lg font-semibold">Personal</h1>
      <div className="flex flex-col gap-2">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="mt-2 p-3 cursor-pointer bg-[#FFFFFF08] hover:bg-[#FFFFFF1A]"
          >
            <p className="font-semibold">Folder {item} heading</p>
            <p className="text-sm">{new Date().toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Folder;
