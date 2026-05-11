// komponent til MusicTrack
"use client";

export default function VolumeControl({ icon, value, onChange }) {
  return (
    <div className="flex items-center gap-3">
      {icon}

      <input
        type="range"
        min="0"
        max="1"
        step="0.10"
        value={value}
        onChange={onChange}
        className="accent-[oklch(65.35%_0.2419_9.27)]"
      />
    </div>
  );
}
