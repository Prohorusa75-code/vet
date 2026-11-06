/* Свои линейные иконки — одинаково выглядят на любом устройстве (в отличие от эмодзи). */
const PATHS: Record<string, string> = {
  stetho: "M6 3v6a4 4 0 0 0 8 0V3M10 13v2a5 5 0 0 0 10 0v-2M20 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  syringe: "m18 2 4 4M17 7l-3-3M14 4 5 13l-1 5 5-1 9-9M9 9l2 2M12 6l2 2M2 22l3-3",
  scissors: "M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.1 7.9 20 20M8.1 16.1 20 4",
  tooth: "M7 3c-2.5 0-4 2-4 4.5C3 13 5 21 7.5 21 9 21 9 16 12 16s3 5 4.5 5C19 21 21 13 21 7.5 21 5 19.5 3 17 3c-2 0-3 1-5 1S9 3 7 3Z",
  micro: "M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2ZM12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",
  house: "M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3V10.5Z",
  heart: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v4l3 2",
  split: "M12 3v18M5 7h4M5 12h4M15 7h4M15 12h4M15 17h4M5 17h4",
  pin: "M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  phone: "M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z",
};

export function Icon({ name, className = "size-7" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  );
}

export function Paw({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <ellipse cx="12" cy="15.5" rx="4.8" ry="4.2" />
      <ellipse cx="5.8" cy="10.2" rx="2.1" ry="2.6" />
      <ellipse cx="9.6" cy="6.3" rx="2.1" ry="2.6" />
      <ellipse cx="14.4" cy="6.3" rx="2.1" ry="2.6" />
      <ellipse cx="18.2" cy="10.2" rx="2.1" ry="2.6" />
    </svg>
  );
}
