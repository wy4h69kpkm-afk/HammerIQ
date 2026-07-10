import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  BarChart3,
  Flame,
  Heart,
  Clock,
  TrendingUp,
  Settings,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Sidebar Component
 * Left navigation with collapsible menu on mobile
 */
export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { icon: BarChart3, label: "Dashboard", active: true },
    { icon: Flame, label: "Hot Opportunities" },
    { icon: Heart, label: "My Watchlist" },
    { icon: Clock, label: "Ending Soon" },
    { icon: TrendingUp, label: "Analytics" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-20"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative left-0 top-16 lg:top-0 w-64 h-[calc(100vh-4rem)] lg:h-screen bg-graphite-800 border-r border-graphite-700 transform transition-transform duration-300 z-20 lg:z-0 flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Navigation items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.label}
                variant={item.active ? "default" : "ghost"}
                className={`w-full justify-start gap-3 ${
                  item.active
                    ? "bg-accent-primary text-graphite-900 hover:bg-accent-primary/90"
                    : "text-graphite-300 hover:bg-graphite-700 hover:text-graphite-50"
                }`}
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    onClose();
                  }
                }}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Button>
            );
          })}
        </nav>

        {/* Sidebar footer - User info */}
        <div className="p-4 border-t border-graphite-700">
          <Separator className="mb-4" />
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-graphite-900">JD</span>
            </div>
            <div>
              {/* TODO: Display current user info */}
              <p className="font-medium text-graphite-50 text-sm">John Doe</p>
              <p className="text-xs text-graphite-400">Premium Member</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
