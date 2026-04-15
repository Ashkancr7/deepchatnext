import React from "react";

export default function BotIcon({ width = 256, height = 256, className = "", style = {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={width}
      height={height}
      className={className}
      style={style}
      role="img"
      aria-label="DeepChat friendly robot logo"
    >
      <defs>
        <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4a90e2" />
          <stop offset="100%" stopColor="#0a5fb2" />
        </linearGradient>
        <linearGradient id="bodyGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#eaeaea" />
        </linearGradient>
      </defs>
      <circle cx="128" cy="128" r="128" fill="url(#blueGradient)" />
      <g stroke="#3a4a58" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="128" y1="35" x2="128" y2="55" />
        <circle cx="128" cy="30" r="10" fill="url(#blueGradient)" />
        <circle cx="128" cy="90" r="55" fill="url(#bodyGradient)" />
        <rect x="85" y="65" width="86" height="50" rx="25" fill="#0d1a26" stroke="none" />
        <circle cx="110" cy="90" r="9" fill="#4a90e2" />
        <circle cx="146" cy="90" r="9" fill="#4a90e2" />
        <path d="M110 100 Q128 115 146 100" stroke="#fff" strokeWidth="4" fill="none" />
        <ellipse cx="128" cy="170" rx="45" ry="35" fill="url(#bodyGradient)" />
        <rect x="105" y="160" width="46" height="20" rx="10" fill="url(#blueGradient)" stroke="none" />
        <path d="M112 170 Q118 165, 124 170 Q130 175, 136 170 Q142 165, 148 170" stroke="#fff" strokeWidth="2" fill="none" opacity="0.8" />
        <rect x="70" y="140" width="20" height="50" rx="10" fill="url(#bodyGradient)" />
        <rect x="166" y="140" width="20" height="50" rx="10" fill="url(#bodyGradient)" />
        <circle cx="80" cy="195" r="12" fill="url(#bodyGradient)" />
        <path d="M186 135 Q200 120, 210 135 Q220 150, 210 165 Q200 180, 186 165 Z" fill="url(#bodyGradient)" />
      </g>
    </svg>
  );
}