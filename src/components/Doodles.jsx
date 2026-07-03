export function DoodleBlob({ color, className }) {
  return (
    <svg viewBox="0 0 200 200" className={`doodle-blob ${className || ''}`} aria-hidden="true">
      <path
        fill={color}
        d="M47.7,-58.5C60.7,-49.4,69.6,-33.6,72.6,-16.7C75.6,0.2,72.7,18.2,63.8,32.8C54.9,47.4,40,58.6,23.1,64.8C6.2,71,-12.7,72.2,-29.4,66.3C-46.1,60.4,-60.6,47.4,-68.1,31.2C-75.6,15,-76.1,-4.4,-70,-21.3C-63.9,-38.2,-51.2,-52.6,-36.2,-61.3C-21.2,-70,-10.6,-73,3.9,-78.1C18.4,-83.2,34.7,-67.6,47.7,-58.5Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function DoodleRing({ color, className }) {
  return (
    <svg viewBox="0 0 100 100" className={`doodle-ring ${className || ''}`} aria-hidden="true">
      <circle cx="50" cy="50" r="36" fill="none" stroke={color} strokeWidth="2.5" strokeDasharray="4 6" />
    </svg>
  );
}

export function DoodleSquiggle({ color, className }) {
  return (
    <svg viewBox="0 0 120 24" className={`doodle-squiggle ${className || ''}`} aria-hidden="true">
      <path d="M2 12 Q 17 2, 32 12 T 62 12 T 92 12 T 118 12" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleSpark({ color, className }) {
  return (
    <svg viewBox="0 0 40 40" className={`doodle-spark ${className || ''}`} aria-hidden="true">
      <path d="M20 3 L23 17 L37 20 L23 23 L20 37 L17 23 L3 20 L17 17 Z" fill={color} />
    </svg>
  );
}