"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const images = ["/assets/bg/header_bg_1.webp", "/assets/bg/header_bg_2.webp"];

const Hero = () => {
  const [stage, setStage] = useState("intro");
  const [bg, setBg] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setBg(images[randomIndex]);
  }, []);

  useEffect(() => {
    const introTimer = setTimeout(() => setStage("logo"), 3000);
    const contentTimer = setTimeout(() => setStage("content"), 4500);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {bg && (
        <motion.img
          src={bg}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: stage !== "intro" ? 0.65 : 0 }}
          transition={{ duration: 1 }}
        />
      )}

      {stage === "intro" && (
        <motion.div
          className="absolute inset-0 bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <img src="/assets/loader/madbars.gif" className="w-10" />
        </motion.div>
      )}

      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="relative flex flex-col items-center perspective-[1000px]">
          <motion.img
            src="/assets/icon/HeroLogo.webp"
            alt="hero logo"
            className="h-12 md:h-20 w-auto "
            initial={{ rotateX: 90, opacity: 0 }}
            animate={stage !== "intro" ? { rotateX: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              transformOrigin: "top",
              transformStyle: "preserve-3d",
            }}
          />

          {stage === "content" && (
            <motion.div
              className="absolute flex flex-col items-center mt-20"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/assets/icon/tagline.webp"
                alt="tagline"
                className="h-6 w-auto md:h-10"
              />

              <img
                src="/assets/bottom_line2.webp"
                alt="line"
                className="h-10 w-auto mt-2"
              />
              <div className="flex gap-8 mt-6">
                <Link href="/events">
                  <button className=" bg-gray-950/30 border-gray-400/50 border-2 px-3 py-2 tracking-wide cursor-pointer hover:bg-gray-950/50 transition">
                    VIEW EVENTS
                  </button>
                </Link>
                <Link href="/booking">
                  <button className=" bg-linear-to-r from-[oklch(0.62_0.23_5)] to-[oklch(0.52_0.22_330)] px-3 py-2 cursor-pointer hover:opacity-90 transition">
                    BOOK TABLE
                  </button>
                </Link>
              </div>
              <div>
                <IoIosArrowDown
                  size={40}
                  className=" mt-15 cursor-pointer hover:text-[oklch(65.35%_0.2419_9.27)] transition-colors duration-300"
                  onClick={() =>
                    window.scrollTo({
                      top: window.innerHeight,
                      behavior: "smooth",
                    })
                  }
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
