// komponent til MusicTrack
"use client";

export default function ProgressBar({
  currentTime,
  duration,
  onChange,
  formatTime,
}) {
  return (
    <div className="flex items-center gap-4">
      <span>{formatTime(currentTime)}</span>

      <input
        type="range"
        min="0"
        max={duration || 0}
        value={currentTime}
        onChange={onChange}
        className="w-64 accent-[oklch(65.35%_0.2419_9.27)]"
      />

      <span>{formatTime(duration)}</span>
    </div>
  );
}
