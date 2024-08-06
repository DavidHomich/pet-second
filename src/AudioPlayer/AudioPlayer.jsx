import React, { useRef } from "react";
import { songsdata } from "./audios";
import "./Player.css";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsSkipEndCircleFill,
  BsFillSkipEndCircleFill,
} from "react-icons/bs";

const AudioPlayer = ({
  audioElem,
  isplaying,
  setisplaying,
  currentSong,
  setCurrentSong,
  songs,
}) => {
  const clickRef = useRef();

  const PlayPause = () => {
    setisplaying(!isplaying);
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  const skipBack = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    audioElem.current.currentTime = 0;
  };

  const skiptoNext = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);

    if (index == songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElem.current.currentTime = 0;
  };

  const foundArtist = songsdata.find((d) => d.artist === currentSong.artist);
  const src = foundArtist ? foundArtist.photo : "gayflag";

  return (
    <div className=" flex gap-[290px]">
      <div className="hidden lg:flex items-center gap-36">
        <img className="w-20 p-1 ml-10" src={src} alt="" />
        <div>
          <p className="w-32">{currentSong.title}</p>
          <p className="w-32">{currentSong.artist}</p>
        </div>
      </div>

      <div className="player_container">
        <div className="title">
          <p>{currentSong.title}</p>
        </div>
        <div className="navigation">
          <div
            className="navigation_wrapper"
            onClick={checkWidth}
            ref={clickRef}
          >
            <div
              className="seek_bar"
              style={{ width: `${currentSong.progress + "%"}` }}
            ></div>
          </div>
        </div>
        <div className="controls">
          <BsFillSkipStartCircleFill
            className="btn_action"
            onClick={skipBack}
          />
          {isplaying ? (
            <BsFillPauseCircleFill
              className="btn_action pp"
              onClick={PlayPause}
            />
          ) : (
            <BsFillPlayCircleFill
              className="btn_action pp"
              onClick={PlayPause}
            />
          )}
          <BsFillSkipEndCircleFill
            className="btn_action"
            onClick={skiptoNext}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
