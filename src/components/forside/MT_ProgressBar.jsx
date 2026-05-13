// komponent til MusicTrack
"use client";

export default function ProgressBar({
  currentTime,
  duration,
  onChange,
  TimeInMinAndSec,
}) {
  return (
    <div className="flex items-center gap-4">
      <input
        type="range"
        min="0"
        max={duration || 0}
        value={currentTime}
        onChange={onChange}
        className="w-64 md:w-100 lg:w-200 accent-[oklch(65.35%_0.2419_9.27)] cursor-pointer"
      />
    </div>
  );
}
