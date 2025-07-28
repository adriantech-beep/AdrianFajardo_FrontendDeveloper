const HeroWave = () => (
  <svg
    viewBox="0 0 1440 320"
    className="absolute bottom-0 left-0 w-full h-64 z-0"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="50%" stopColor="#4f46e5" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>

    <path
      fill="none"
      stroke="url(#gradient)"
      strokeWidth="3"
      d="M0,160 C360,260 1080,60 1440,160"
    >
      <animate
        attributeName="d"
        dur="8s"
        repeatCount="indefinite"
        values="
        M0,160 C360,260 1080,60 1440,160;
        M0,180 C360,230 1080,80 1440,180;
        M0,160 C360,260 1080,60 1440,160
        "
      />
    </path>
  </svg>
);

export default HeroWave;
