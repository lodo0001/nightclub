"use client";

import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AiOutlinePlaySquare } from "react-icons/ai";

const LatestVideo = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="grid justify-center m-15 ">
      <div className="grid justify-items-center m-10">
        <h1 className="font-extrabold text-2xl">LATEST VIDEO</h1>
        <div className="h-[2px] mt-2 w-24 md:w-40 lg:w-64 bg-gradient-to-r from-transparent via-[oklch(65.35%_0.2419_9.27)] to-transparent" />
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="min-w-full flex justify-center">
            <video controls width="1000">
              <source
                src="/assets/media/video-dj-crowd-2.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="min-w-full flex justify-center">
            <video controls width="1000">
              <source
                src="/assets/media/video-dj-crowd1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-4 justify-center">
        <button onClick={scrollPrev} className="rotate-180">
          <AiOutlinePlaySquare
            size={35}
            className="hover:text-[oklch(65.35%_0.2419_9.27)]"
          />
        </button>
        <button onClick={scrollNext} className="">
          <AiOutlinePlaySquare
            size={35}
            className="hover:text-[oklch(65.35%_0.2419_9.27)]"
          />
        </button>
      </div>
    </div>
  );
};

export default LatestVideo;
