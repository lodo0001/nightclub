"use client";

import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { MdClose } from "react-icons/md";
import useEmblaCarousel from "embla-carousel-react";
import { AiOutlinePlaySquare } from "react-icons/ai";

const Gallery = ({ gallery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      startIndex: selectedImg,
    },
    []
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const openModal = (index) => {
    setSelectedImg(index);
    setIsOpen(true);
  };

  return (
    <div className="grid mb-20 mt-8">
      <div className="grid justify-items-center m-10">
        <h1 className="font-extrabold text-md md:text-1xl lg:text-2xl">
          NIGHT CLUB GALLERY
        </h1>
        <div className="h-[2px] mt-2 w-24 md:w-40 lg:w-64 bg-gradient-to-r from-transparent via-[oklch(65.35%_0.2419_9.27)] to-transparent" />
      </div>

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px]">
          {gallery.slice(0, 7).map((img, index) => {
            const layouts = [
              "col-span-3",
              "col-span-3",
              "col-span-4",
              "col-span-2",
              "col-span-4",
              "col-span-4",
              "col-span-4",
            ];

            return (
              <motion.div
                key={img.id}
                className={`group relative overflow-hidden h-[300px] md:h-auto ${layouts[index]}`}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <div
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <Image
                    src={img.asset.url}
                    alt={img.asset.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/60 z-20 pointer-events-none transition pink-corners" />
              </motion.div>
            );
          })}
        </div>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/70 z-50" />

          <Dialog.Content className="fixed left-1/2 top-1/2 w-[85vw] max-w-[700px] -translate-x-1/2 -translate-y-1/2 bg-black p-6 z-50 rounded-lg text-white md:block overflow-visible">
            <button
              onClick={scrollPrev}
              className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 rotate-180 transition transform hover:scale-110 z-50"
            >
              <AiOutlinePlaySquare
                size={45}
                className="text-white hover:text-[oklch(65.35%_0.2419_9.27)] cursor-pointer"
              />
            </button>

            <button
              onClick={scrollNext}
              className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 transition transform hover:scale-110 z-50"
            >
              <AiOutlinePlaySquare
                size={45}
                className="text-white hover:text-[oklch(65.35%_0.2419_9.27)] cursor-pointer"
              />
            </button>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {gallery.slice(0, 7).map((img) => (
                  <div
                    key={img.id}
                    className="flex-[0_0_100%] min-w-0 relative flex flex-col items-center"
                  >
                    <div className="relative w-full h-[350px] md:h-[450px]">
                      <Image
                        src={img.asset.url}
                        alt={img.asset.alt}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="m-4">
                      <Dialog.Title className="text-2xl font-bold mb-2">
                        NIGHT CLUB PARTY
                      </Dialog.Title>
                      <Dialog.Description className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </Dialog.Description>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Luk-knap */}
            <Dialog.Close asChild>
              <button className="absolute right-4 top-4  hover:text-[oklch(65.35%_0.2419_9.27)] transition z-50 cursor-pointer">
                <MdClose size={30} />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default Gallery;
