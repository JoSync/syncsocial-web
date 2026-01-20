
// Bijvoorbeeld in components/Logo.tsx
export default function Logo({ className = "w-12 h-12" }) {
  return (
    <svg 
      viewBox="0 0 128 128" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#FF00E4" }} />
          <stop offset="100%" style={{ stopColor: "#8B5CF6" }} />
        </linearGradient>
      </defs>
      <path 
        d="M95,35 C95,15 65,15 65,35 C65,55 95,73 95,93 C95,113 65,113 65,93 M35,93 C35,113 65,113 65,93 C65,73 35,55 35,35 C35,15 65,15 65,35"
        stroke="url(#logo-gradient)"
        strokeWidth="18"
        strokeLinecap="round"
      />
    </svg>
  );
}
