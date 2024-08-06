import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="h-[90%] w-1/6 flex-col justify-between bg-pirmary/20  fixed p-10">
      <nav>
        <ul className="flex flex-col">
          <li className="flex text-stone-50 py-2 px-4 mb-4 rounded-xl transition ease-in-out delay-50 cursor-poiner  hover:bg-customGray  focus:bg-customGray    ">
            <img
              className="w-7 pr-2"
              src="https://img.icons8.com/?size=100&id=86527&format=png&color=ffffff"
              alt="home"
            />
            <Link to="/"> home</Link>
          </li>
          <li className="flex text-stone-50 py-2 px-4 mb-4 rounded-xl transition ease-in-out delay-50 cursor-poiner  hover:bg-customGray  focus:bg-customGray   ">
            {" "}
            <img
              className="w-7 pr-2"
              src="https://img.icons8.com/?size=100&id=EHtxO8ZmA602&format=png&color=ffffff"
              alt="song"
            />
            <Link to="trending">songs</Link>
          </li>
          <li className="flex text-stone-50 py-2 px-4 mb-4 rounded-xl transition ease-in-out delay-50 cursor-poiner  hover:bg-customGray focus:bg-customGray   ">
            <img
              className="w-7 pr-2"
              src="https://img.icons8.com/?size=100&id=91450&format=png&color=ffffff"
              alt="artists"
            />
            <Link to="artists">artists</Link>
          </li>
          <li className="flex text-stone-50 py-2 px-4 mb-4 rounded-xl transition ease-in-out delay-50 cursor-poiner  hover:bg-customGray focus:bg-customGray   ">
            <img
              className="w-7 pr-2"
              src="https://img.icons8.com/?size=100&id=0is6nw0hGPP7&format=png&color=ffffff"
              alt="albums"
            />
            <Link to="albums">albums</Link>
          </li>
          <li className="flex text-stone-50 py-2 px-4 mb-4 rounded-xl transition ease-in-out delay-50 cursor-poiner   hover:bg-customGray focus:bg-customGray   ">
            <img
              className="w-7 pr-2"
              src="https://img.icons8.com/?size=100&id=87745&format=png&color=ffffff"
              alt="podcast"
            />
            <Link to="podcast">podcast</Link>
          </li>
        </ul>
      </nav>
      <div className=" h-px w-25 bg-slate-50 opacity-20"></div>
      <div>
        <p className="flex  text-stone-50 pt-5">
          <img
            className="w-7 pr-2"
            src="https://img.icons8.com/?size=100&id=o4FFwi_zJzar&format=png&color=ffffff"
            alt=" your colection"
          />
          your colection{" "}
        </p>
      </div>
    </div>
  );
};

export default SideBar;
