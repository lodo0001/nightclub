"use client";

export default function TrackGallery({ tracks, currentIndex, onSelect }) {
  return (
    <>
      {/* MOBILE */}
      <div className="flex flex-col items-center mt-10 lg:hidden">
        <div className="cursor-pointer">
          <img
            src={tracks[currentIndex].image}
            alt={tracks[currentIndex].title}
            className="w-full max-w-87.5"
          />

          <p className="text-center font-bold mt-4">
            {tracks[currentIndex].title}
          </p>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex gap-6 mt-10">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            onClick={() => onSelect(index)}
            className={`cursor-pointer transition ${
              index === currentIndex ? "opacity-100 scale-105" : "opacity-50"
            }`}
          >
            {/* IMAGE*/}
            <div className="relative group">
              <img
                src={track.image}
                alt={track.title}
                className="w-32 h-32 object-cover"
              />

              {/* Når man hover over en sang i sange gallery */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pink-corners"></div>
            </div>

            <p className="text-center mt-2">{track.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
