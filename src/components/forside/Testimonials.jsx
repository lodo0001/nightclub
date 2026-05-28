"use client";

import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { GrFacebookOption } from "react-icons/gr";
import { GrSnapchat } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";

const Testimonials = ({ testimonials }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const [selected, setSelected] = useState(0);
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelected(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    onSelect();
  }, [emblaApi]);

  if (!testimonials) return <p>Loading...</p>;

  const soMeLinks = {
    snapchat: "https://snapchat.com",
  };

  return (
    <div className="relative overflow-hidden py-16">
      <img
        src="/assets/bg/footerbg.webp"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="relative z-10 flex flex-col items-center justify-center -mt-12">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonials) => (
              <div
                key={testimonials.id}
                className="min-w-full flex justify-center p-6 min-h-87.5"
              >
                <div className="w-full max-w-3xl p-6 text-center">
                  <img
                    src={testimonials.asset.url}
                    alt={testimonials.asset.alt}
                    className="object-cover mx-auto mb-4"
                  />
                  <h2 className="font-extrabold uppercase text-2xl mb-3">
                    {testimonials.name}
                  </h2>
                  <p>{testimonials.content}</p>

                  <div className="flex gap-5 justify-center mt-5">
                    <a href={testimonials.facebook}>
                      <div className="group h-8 w-8 border  flex items-center justify-center cursor-pointer transition hover:border-[oklch(65.35%_0.2419_9.27)]">
                        <GrFacebookOption
                          size={23}
                          className="text-white transition group-hover:text-[oklch(65.35%_0.2419_9.27)]"
                        />
                      </div>
                    </a>

                    <a href={testimonials.twitter}>
                      <div className="group h-8 w-8 border flex items-center justify-center cursor-pointer transition hover:border-[oklch(65.35%_0.2419_9.27)]">
                        <FaTwitter
                          size={18}
                          className="text-white transition group-hover:text-[oklch(65.35%_0.2419_9.27)]"
                        />
                      </div>
                    </a>

                    <a href={soMeLinks.snapchat}>
                      <div className="group h-8 w-8 border  flex items-center justify-center cursor-pointer transition hover:border-[oklch(65.35%_0.2419_9.27)]">
                        <GrSnapchat
                          size={18}
                          className="text-white transition group-hover:text-[oklch(65.35%_0.2419_9.27)]"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 ">
          {testimonials.map((_, slideNumber) => (
            <button
              key={slideNumber}
              onClick={() => emblaApi?.scrollTo(slideNumber)}
              className={`w-4 h-4 transition-all duration-300 cursor-pointer ${
                slideNumber === selected
                  ? "bg-[oklch(65.35%_0.2419_9.27)] scale-125"
                  : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
