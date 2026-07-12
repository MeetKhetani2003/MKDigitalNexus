export function Logo({ className = "h-9 w-9", light = false }: { className?: string; light?: boolean }) {
  const stroke = light ? "#FFFFFF" : "#0B2447";
  const accent = "#1B6FD6";
  return (
    <img
      src="/logo.png"
      alt="MK Digital Nexus logo"
      className={`${className} object-contain`}
      style={{ filter: light ? 'brightness(0) invert(1)' : 'none' }}
    />
  );
}
