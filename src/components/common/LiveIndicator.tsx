/**
 * Live Indicator Component
 * Shows real-time status indicator with pulsing animation
 */
export function LiveIndicator() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="w-3 h-3 bg-accent-primary rounded-full animate-pulse"></div>
        <div className="absolute inset-0 w-3 h-3 bg-accent-primary rounded-full animate-ping opacity-75"></div>
      </div>
      <span className="text-sm font-semibold text-accent-primary">LIVE</span>
    </div>
  );
}
