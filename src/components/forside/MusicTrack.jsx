// AI har hjulpet os med Night Club Track sektionen

"use client";

import { useEffect, useRef, useState } from "react";
import tracks from "@/musicData/tracks";
import PlayerControls from "@/components/forside/MT_PlayerControls";
import ProgressBar from "@/components/forside/MT_ProgressBar";
import VolumeControl from "@/components/forside/MT_VolumeControl";
import TrackGallery from "@/components/forside/MT_Gallery";

import { AiOutlinePlaySquare } from "react-icons/ai";
import {
  BsFillVolumeUpFill,
  BsFillVolumeMuteFill,
  BsFillVolumeDownFill,
} from "react-icons/bs";

const MusicTrack = () => {
  const audioRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTrack = tracks[currentIndex];

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [volume, setVolume] = useState(1);

  const pauseOrPlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;

      return newIndex >= tracks.length ? 0 : newIndex;
    });
  };

  const prevTrack = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;

      return newIndex < 0 ? tracks.length - 1 : newIndex;
    });
  };

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.load();

    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentIndex]);

  const MusicPlayingTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const DOMLoadedMusic = () => {
    setDuration(audioRef.current.duration);
  };

  const TimeInMinAndSec = (time) => {
    if (!time) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const VolumeControlChange = (e) => {
    const value = Number(e.target.value);

    setVolume(value);

    audioRef.current.volume = value;
  };

  const getVolumeIcon = () => {
    if (volume === 0) {
      return <BsFillVolumeMuteFill size={30} className="text-white" />;
    }

    if (volume <= 0.5) {
      return <BsFillVolumeDownFill size={30} className="text-white" />;
    }

    return <BsFillVolumeUpFill size={30} className="text-white" />;
  };

  return (
    <div className="grid justify-center m-15 ">
      <div className="grid justify-items-center m-1">
        <h1 className="font-extrabold text-md md:text-xl lg:text-2xl 2xl:text-3xl whitespace-nowrap">
          NIGHT CLUB TRACK
        </h1>
        <div className="h-0.5 mt-2 w-24 md:w-40 lg:w-64 bg-linear-to-r from-transparent via-[oklch(65.35%_0.2419_9.27)] to-transparent" />
      </div>

      <div className="flex flex-col lg:flex-row  gap-10 mt-10">
        <img
          src={currentTrack.image}
          alt={currentTrack.title}
          className="hidden lg:block"
        />

        <div className="flex flex-col gap-6">
          <h2 className="text-xl text-center lg:text-left font-bold">
            {currentTrack.title}
          </h2>

          <ProgressBar
            currentTime={currentTime}
            duration={duration}
            onChange={(e) => {
              const newTime = Number(e.target.value);
              audioRef.current.currentTime = newTime;
              setCurrentTime(newTime);
            }}
            TimeInMinAndSec={TimeInMinAndSec}
          />

          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-10 object-cover ">
            <div className="flex gap-2 text-sm">
              <span>{TimeInMinAndSec(currentTime)}</span>
              <span>/</span>
              <span>{TimeInMinAndSec(duration)}</span>
            </div>

            <PlayerControls
              isPlaying={isPlaying}
              onPlayPause={pauseOrPlay}
              onNext={nextTrack}
              onPrev={prevTrack}
            />

            <VolumeControl
              icon={getVolumeIcon()}
              value={volume}
              onChange={VolumeControlChange}
            />
          </div>
        </div>
      </div>

      <TrackGallery
        tracks={tracks}
        currentIndex={currentIndex}
        onSelect={setCurrentIndex}
      />

      <div className="flex justify-center gap-3 mt-8 lg:hidden">
        <AiOutlinePlaySquare
          onClick={prevTrack}
          size={35}
          className=" rotate-180"
        />

        <AiOutlinePlaySquare onClick={nextTrack} size={35} />
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={MusicPlayingTime}
        onLoadedMetadata={DOMLoadedMusic}
      >
        <source src={currentTrack.audio} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default MusicTrack;
