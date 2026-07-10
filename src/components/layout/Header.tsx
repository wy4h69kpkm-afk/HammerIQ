import { Logo } from "../common/Logo";
import { LiveIndicator } from "../common/LiveIndicator";

interface HeaderProps {
  onToggleSidebar: () => void;
}

/**
 * Header Component
 * Top navigation bar with logo, title, and live status
 */
export function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="bg-graphite-800 border-b border-graphite-700 sticky top-0 z-30">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Left side - Menu toggle and logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 hover:bg-graphite-700 rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg
              className="w-6 h-6 text-graphite-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Logo />
        </div>

        {/* Right side - Live status and actions */}
        <div className="flex items-center gap-6">
          <LiveIndicator />
          
          {/* Placeholder for future user menu */}
          <div className="w-10 h-10 bg-graphite-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-graphite-600 transition-colors">
            <span className="text-sm font-semibold text-graphite-50">U</span>
          </div>
        </div>
      </div>
    </header>
  );
}
