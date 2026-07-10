/**
 * Logo Component
 * Displays the HammerIQ branding
 */
export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center">
        <span className="text-graphite-900 font-bold text-lg">🔨</span>
      </div>
      <span className="font-bold text-xl text-graphite-50">HammerIQ</span>
    </div>
  );
}
