import React from "react";
import dataTrends from "../data/dataTrends";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
  };

  return (
    <div className="pl-72">
      <div className="flex justify-between">
        <h2 className="text-2xl text-white">Trending songs this week</h2>
        <Link to="/trending">
          <p className="text-text p-4">see all</p>
        </Link>
      </div>
      <Slider {...settings}>
        {dataTrends.map((t) => (
          <div className="relative h-72 w-72 outline-none" key={t.id}>
            <img
              className="w-72 h-72 rounded-xl cursor-pointer"
              src={t.photo}
              alt="img song"
            />
            <div
              className="absolute w-72 h-20 top-52 rounded-xl bg-inherit"
              style={{ backdropFilter: "blur(10px)" }}
            ></div>
            <div className="-mt-20 absolute pr-2 pl-1">
              <p className="text-white">{t.name}</p>
              <div className="flex w-64 justify-between gap-6">
                <div className="flex text-xs">
                  <p className="text-white">{t.author}</p>
                </div>
                <div>
                  <p className="text-white">{t.time}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingSlider;
