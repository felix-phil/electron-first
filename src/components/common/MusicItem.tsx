import { FC } from "react";
import { TrackType } from "../data/tracks";

const MusicItem: FC<{
  track: TrackType;
  isPlaying: boolean;
  onClick: () => void;
}> = ({ track, isPlaying, onClick }) => {
  return (
    <div className="flex bg-white/10 flex-row w-full group items-center hover:bg-white/20 px-5 py-2">
      <h2 className="text-white font-bold text-2xl italic">
        #{track["@attr"].rank}
      </h2>
      <div className="h-[40px] w-[40px] ml-5">
        <img
          className="object-cover w-full h-full"
          src={track.image[0]["#text"]}
        />
      </div>
      <div className="ml-5 flex flex-col text-white gap-y-1">
        <h3 className="font-semibold text-lg">{track.name}</h3>
        <p className="text-sm font-light">{track.artist.name}</p>
      </div>

      <button
        onClick={onClick}
        className="rounded-full flex justify-center items-center bg-white ml-auto mr-5 px-1 py-1"
      >
        <img
          className="h-[40px] w-[40px]"
          src={isPlaying ? "/pause.png" : "play.png" }
        />
      </button>
    </div>
  );
};

export default MusicItem;
