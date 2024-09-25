import EmptyPic from "../assets/EmptyPic.png";
const Home = () => {
  return (
    <div className="h-fit sticky top-6 p-6">
      <div className="flex flex-col justify-center items-center min-h-[80vh] text-center">
        <img src={EmptyPic} alt="" />
        <h1 className="text-[28px] font-[600]">Select a note to view</h1>
        <p className="w-2/3">
          Choose a note from the list on the left to view its contents, or
          create a new note to add to your collection.
        </p>
      </div>
    </div>
  );
};

export default Home;
