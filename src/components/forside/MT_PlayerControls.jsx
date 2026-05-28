"use client";

import { FaStepBackward, FaStepForward } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdOutlinePauseCircleOutline } from "react-icons/md";

const PlayerControls = ({ isPlaying, onPlayPause, onNext, onPrev }) => {
  return (
    <div className="flex items-center gap-6 ">
      <button onClick={onPrev}>
        <FaStepBackward size={30} className="cursor-pointer" />
      </button>

      <button onClick={onPlayPause}>
        {isPlaying ? (
          <MdOutlinePauseCircleOutline size={45} className="cursor-pointer" />
        ) : (
          <IoPlayCircleOutline size={45} className="cursor-pointer" />
        )}
      </button>

      <button onClick={onNext}>
        <FaStepForward size={30} className="cursor-pointer" />
      </button>
    </div>
  );
};

export default PlayerControls;
