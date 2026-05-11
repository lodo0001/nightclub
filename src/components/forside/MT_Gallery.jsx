// komponent til MusicTrack
"use client";

export default function TrackGallery({ tracks, currentIndex, onSelect }) {
  return (
    <div className="flex gap-6 mt-10">
      {tracks.map((track, index) => (
        <div
          key={track.id}
          onClick={() => onSelect(index)}
          className={`cursor-pointer ${
            index === currentIndex ? "opacity-100" : "opacity-50"
          }`}
        >
          <img src={track.image} className="w-25 h-25" />
          <p>{track.title}</p>
        </div>
      ))}
    </div>
  );
}
