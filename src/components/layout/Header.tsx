import { Logo } from "../common/Logo";
import { LiveIndicator } from "../common/LiveIndicator";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

interface HeaderProps {
  onToggleSidebar: () => void;
}

/**
 * Header Component
 * Top navigation bar with logo, title, and live status
 */
export function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="bg-graphite-800 border-b border-graphite-700 sticky top-0 z-30 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Left side - Menu toggle and logo */}
        <div className="flex items-center gap-4">
          <Button
            onClick={onToggleSidebar}
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Logo />
        </div>

        {/* Right side - Live status and actions */}
        <div className="flex items-center gap-6">
          <LiveIndicator />
          
          {/* User menu placeholder */}
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full"
            aria-label="User menu"
          >
            <span className="text-sm font-semibold">U</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
