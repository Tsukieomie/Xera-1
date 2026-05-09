interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Tracecraft mark — concentric arcs (research lens) intersected by an angled
 * line (investigation thread). Geometric, monochrome, scales 16-200px.
 */
export function Logo({ size = 28, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Tracecraft"
      className={className}
      data-testid="logo-tracecraft"
    >
      <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="14" cy="14" r="1.4" fill="currentColor" />
      {/* thread crossing the lens — one warm amber stroke */}
      <line
        x1="4"
        y1="28"
        x2="28"
        y2="4"
        stroke="hsl(var(--primary))"
        strokeWidth="1.8"
        strokeLinecap="square"
      />
      {/* tick marks on thread */}
      <circle cx="9" cy="23" r="1.1" fill="hsl(var(--primary))" />
      <circle cx="23" cy="9" r="1.1" fill="hsl(var(--primary))" />
    </svg>
  );
}
