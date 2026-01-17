import { useState, useRef } from "react";
import styles from "./MusicPlayer.module.scss";
import Link from "next/link";

type PlayerProps = {
  audioSrc: string;
  songTitle: string;
  audioLink: string;
};

const MusicPlayer: React.FC<PlayerProps> = ({ audioSrc, songTitle, audioLink }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.miniplayer} onClick={togglePlayPause}>
      <span
        className={styles.playPauseIcon}
        style={isPlaying ? { filter: "" } : { filter: "saturate(0)", transition: "0" }}
      >
        {isPlaying ? "⏸" : "𝆕"}
      </span>
      <div className={styles.songInfo}>
        {isPlaying ? "Play: " : "Playing: "}
        <Link href={audioLink} target="_blank">{` ${songTitle}`}</Link>
      </div>
      <audio ref={audioRef} src={audioSrc} autoPlay loop />
  </div>
  );
};

export default MusicPlayer;
