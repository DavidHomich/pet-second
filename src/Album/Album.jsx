import { useParams } from "react-router-dom";
import data from "../data/dataAlbums";

const Album = () => {
  const { id } = useParams();
  const project = data.find((item) => item.id === id);

  if (!project) {
    return <div className="pl-72 text-2xl text-white">Album not found</div>;
  }

  return (
    <div className="pl-[460px] relative">
      <h1 className="text-2xl text-white">{project.name}</h1>
      <img
        className="w-[630px] h-[610px]"
        src={project.photo}
        alt={project.name}
      />

      <div className="absolute -mt-[50px] pl-4">
        <p className="text-xl text-customGray">{project.time}</p>
      </div>
    </div>
  );
};

export default Album;
