import Slider from "react-slick";
import dataArtists from "./../data/dataArtists.js";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Reset.css";

const ArtistsSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 5,
  };

  return (
    <div className="pl-72">
      <div className="flex justify-between">
        <h2 className="text-2xl pb-10 text-white">Artists</h2>
        <Link to="artists">
          <p className="text-text p-4">see all</p>
        </Link>
      </div>
      <Slider {...settings}>
        {dataArtists.map((artist) => (
          <div
            className="flex flex-col justify-center text-center  border-none outline-none "
            key={artist.id}
          >
            <img
              className=" border-none outline-none w-36 h-36 rounded-full outline-offset-0"
              src={artist.photo}
              alt={`${artist.name} photo`}
            />
            <p className="text-center text-white pr-24">{artist.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ArtistsSlider;
