const Heaedr = () => {
  return (
    <div className="className= flex justify-between text-center content-center">
      <div className=" w-1/3 ml-60 ">
        <p className="-ml-20 text-text p-10">new playlist for you</p>
      </div>
      <div className=" relative w-1/3  pt-8">
        <img
          className="w-5 absolute top-11 ml-4"
          src="https://img.icons8.com/?size=100&id=132&format=png&color=ffffff"
          alt="search"
        />
        <input
          className="w-full py-2 text-white bg-pirmary rounded-2xl border border-solid border-border outline-none placeholder:text-white placeholder: pl-11"
          type="text "
          placeholder="Search by title,artist, or album..."
        />
      </div>
      <div className="w1/3 p-5 pt-7">
        <img
          className="rounded-full w-14"
          src="https://i.pinimg.com/736x/7f/a6/11/7fa61107558dd0e58de01790bdd145f6.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Heaedr;
