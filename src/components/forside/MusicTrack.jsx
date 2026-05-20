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

  // TRACK STATE
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTrack = tracks[currentIndex];

  // PLAY STATE
  const [isPlaying, setIsPlaying] = useState(false);

  // TIME STATE
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // VOLUME STATE
  const [volume, setVolume] = useState(1);

  // PLAY / PAUSE
  const pauseOrPlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  // NEXT TRACK
  const nextTrack = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;

      return newIndex >= tracks.length ? 0 : newIndex;
    });
  };

  // PREVIOUS TRACK
  const prevTrack = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;

      return newIndex < 0 ? tracks.length - 1 : newIndex;
    });
  };

  // AUTO LOAD NEW TRACK
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.load();

    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentIndex]);

  // UPDATE CURRENT TIME
  const MusicPlayingTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // GET DURATION
  const DOMLoadedMusic = () => {
    setDuration(audioRef.current.duration);
  };

  // FORMAT TIME
  const TimeInMinAndSec = (time) => {
    if (!time) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    // 10 betyder, hvis sekunder er mindre end 10, så tilføj et 0 bag på,
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // VOLUME CONTROL
  const VolumeControlChange = (e) => {
    const value = Number(e.target.value);

    setVolume(value);

    audioRef.current.volume = value;
  };

  // VOLUME ICON
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
      {/* HEADER */}
      <div className="grid justify-items-center m-1">
        <h1 className="font-extrabold text-xl md:text-1xl lg:text-2xl">
          NIGHT CLUB TRACK
        </h1>
        <div className="h-[2px] mt-2 w-24 md:w-40 lg:w-64 bg-gradient-to-r from-transparent via-[oklch(65.35%_0.2419_9.27)] to-transparent" />
      </div>

      {/* Main indhold */}
      <div className="flex flex-col lg:flex-row  gap-10 mt-10">
        {/* TRACK IMAGE */}
        <img
          src={currentTrack.image}
          alt={currentTrack.title}
          className="hidden lg:block"
        />

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">
          {/* TRACK TITLE */}
          <h2 className="text-xl text-center lg:text-left font-bold">
            {currentTrack.title}
          </h2>

          {/* PROGRESS BAR */}
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

          {/* BOTTOM ROW */}
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-10 object-cover ">
            {/* TIME */}
            <div className="flex gap-2 text-sm">
              <span>{TimeInMinAndSec(currentTime)}</span>
              <span>/</span>
              <span>{TimeInMinAndSec(duration)}</span>
            </div>

            {/* CONTROLS */}
            <PlayerControls
              isPlaying={isPlaying}
              onPlayPause={pauseOrPlay}
              onNext={nextTrack}
              onPrev={prevTrack}
            />

            {/* VOLUME */}
            <VolumeControl
              icon={getVolumeIcon()}
              value={volume}
              onChange={VolumeControlChange}
            />
          </div>
        </div>
      </div>

      {/* SANGE GALLERY */}
      <TrackGallery
        tracks={tracks}
        currentIndex={currentIndex}
        onSelect={setCurrentIndex}
      />

      {/* {knapper til mobil på gallery} */}
      <div className="flex justify-center gap-3 mt-8 lg:hidden">
        <AiOutlinePlaySquare
          onClick={prevTrack}
          size={35}
          className=" rotate-180"
        />

        <AiOutlinePlaySquare onClick={nextTrack} size={35} />
      </div>

      {/* AUDIO */}
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
