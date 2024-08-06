import Playersecond from "../AudioPlayer/Playersecond";

const Player = () => {
  return (
    <div className="h-[10%] w-full bg-[#574b51] mt-96 fixed bottom-0 flex justify-between items-center text-white px-4 border border-solid border-border rounded-full">
      <div className="flex flex-col items-center gap-1">
        <Playersecond />
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img
          className="w-4 cursor-pointer"
          src="https://img.icons8.com/?size=100&id=112684&format=png&color=ffffff"
          alt="Volume Down"
        />
        <img
          className="w-4 cursor-pointer"
          src="https://img.icons8.com/?size=100&id=88005&format=png&color=ffffff"
          alt="Mute"
        />
        <img
          className="w-4 cursor-pointer"
          src="https://img.icons8.com/?size=100&id=78E9lAhHVZcI&format=png&color=ffffff"
          alt="Volume Up"
        />
        <img
          className="w-4 cursor-pointer"
          src="https://img.icons8.com/?size=100&id=seouOckDzjrw&format=png&color=ffffff"
          alt="Shuffle"
        />
        <img
          className="w-4 cursor-pointer"
          src="https://img.icons8.com/?size=100&id=22778&format=png&color=ffffff"
          alt="Repeat"
        />
        <div className="w-20 bg-slate-50 h-1 rounded cursor-pointer"></div>
        <img
          className="w-4 cursor-pointer"
          src="https://img.icons8.com/?size=100&id=ldJGucgnLy3I&format=png&color=ffffff"
          alt="Equalizer"
        />
      </div>
    </div>
  );
};

export default Player;
