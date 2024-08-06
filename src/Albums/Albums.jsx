import { Link } from "react-router-dom";
import data from "../data/dataAlbums";
const Albums = () => {
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-2">
      {data.map((d) => (
        <div className="pl-72 w-[465px] h-52 " key={d.id}>
          <Link to={`/album/${d.id}`}>
            <div className="">
              <img
                className="w-44 h-44 rounded-xl cursor-pointer"
                src={d.photo}
                alt={d.name}
              />
            </div>
            <div className="flex gap-8 w-[320px] text-white">
              <p>{d.name}</p>
              <p>{d.time}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Albums;
