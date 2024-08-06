import dataTrends from "../data/dataTrends";
const Trending = () => {
  return (
    <>
      <h2 className=" text-2xl text-white pl-72 p-10">Trending</h2>
      <div className="flex flex-wrap gap-32 pl-72">
        {dataTrends.map((t) => (
          <div className="relative h-72 w-72 outline-none " key={t.id}>
            <img
              className="w-72 h-72 rounded-xl cursor-pointer  "
              src={t.photo}
              alt="img song"
            />
            <div
              className=" absolute w-72 h-20 top-52 rounded-xl bg-inherit"
              style={{ backdropFilter: "blur(10px)" }}
            ></div>
            <div className="-mt-20 absolute pr-2 pl-1">
              <p className="text-white">{t.name}</p>
              <div className="flex w-64 justify-between gap-6">
                <div className="flex text-xs">
                  <p className="text-white">{t.author}</p>
                </div>
                <div className="">
                  <p className="text-white">{t.time}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trending;
