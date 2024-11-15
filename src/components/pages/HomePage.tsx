import { useRef, useState } from "react";
import MusicItem from "../common/MusicItem";
import tracks from "../data/tracks";

const HomePage = () => {
  const [playingIndex, setPlayingIndex] = useState<number>();
  const audioRef = useRef(new Audio());
  const sampleAudioUrl =
    "https://res.cloudinary.com/devphil/video/upload/v1731176161/samples/audio/tasp3zjqgrexiqdci0iy.mp3";
  const formatedTracks = tracks.map((track) => ({
    ...track,
    streamUrl: sampleAudioUrl,
  }));
  const handlePlay = (
    index: number,
    track: (typeof formatedTracks)[number]
  ) => {
    if (playingIndex === index) {
      audioRef.current.pause();
      setPlayingIndex(undefined);
    } else {
      audioRef.current.src = track.streamUrl;
      audioRef.current.play();
      audioRef.current.volume = 1;
      setPlayingIndex(index);
    }
  };
  return (
    <div className="bg-black flex-1 w-screen h-screen">
      <h1>Welcome to the Music App</h1>
      <div className="flex flex-col bg-black gap-y-5 h-full overflow-scroll">
        {formatedTracks.map((track, i) => (
          <MusicItem
            onClick={() => handlePlay(i, track)}
            key={track.name}
            track={track}
            isPlaying={i === playingIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
