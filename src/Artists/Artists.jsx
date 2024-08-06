import dataArtists from "./../data/dataArtists.js";
const Artists = () => {
  return (
    <div className="flex flex-wrap gap-10 pl-72">
      {dataArtists.map((artist) => (
        <div className=" " key={artist.id}>
          <img
            className=" border-none outline-none w-36 h-36 rounded-full outline-offset-0"
            src={artist.photo}
            alt={`${artist.name} photo`}
          />
          <p className="text-center text-white pt-3 ">{artist.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Artists;
