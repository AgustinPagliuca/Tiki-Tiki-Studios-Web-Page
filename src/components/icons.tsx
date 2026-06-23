import type { SVGProps } from "react";

// Íconos inline (sin dependencias externas). Heredan color (currentColor)
// y tamaño (1em) del contexto salvo que se pasen props.
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": true,
} as const;

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M4 4l16 16M20 4L4 20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DiscordIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M8 7.5a13 13 0 018 0M7 17a13 13 0 0010 0M6 8c-1 3-1 6 0 9 1.3.9 2.7 1.4 4 1.5M18 8c1 3 1 6 0 9-1.3.9-2.7 1.4-4 1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="13" r="1.1" fill="currentColor" />
      <circle cx="14.5" cy="13" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M5 4h9a3 3 0 013 3v13a2.5 2.5 0 00-2.5-2.5H5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M5 4v13.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 8h5M9 11h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function MapIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M9 4L3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 4v14M15 6v14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function BrushIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M14 4l6 6-7 7M4 20c0-3 1.5-5 4-5s3 2 3 3.5S13 22 10 22c-2 0-3-1-3-2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SwordIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M14.5 3.5L20 3v.5l-.5 5.5-9 9M21 14l-3 3M6.5 12.5L3 9V6l3 3M4 20l3-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 3.5l-8 8 6 6 8-8M4.5 16.5l3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M7 17L17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GamepadIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M7 8h10a4 4 0 014 4l-1 5a2.5 2.5 0 01-4.3 1.2L14 16h-4l-1.7 2.2A2.5 2.5 0 014 17l-1-5a4 4 0 014-4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M8 11v3M6.5 12.5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="15.5" cy="12" r="1" fill="currentColor" />
      <circle cx="17" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}
