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
    { icon: "📊", label: "Dashboard", active: true },
    { icon: "🔥", label: "Hot Opportunities" },
    { icon: "📋", label: "My Watchlist" },
    { icon: "⏰", label: "Ending Soon" },
    { icon: "📈", label: "Analytics" },
    { icon: "⚙️", label: "Settings" },
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
        className={`fixed lg:relative left-0 top-16 lg:top-0 w-64 h-[calc(100vh-4rem)] lg:h-screen bg-graphite-800 border-r border-graphite-700 transform transition-transform duration-300 z-20 lg:z-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                item.active
                  ? "bg-graphite-700 text-accent-primary"
                  : "text-graphite-300 hover:bg-graphite-700 hover:text-graphite-50"
              }`}
              onClick={() => {
                if (window.innerWidth < 1024) {
                  onClose();
                }
              }}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Sidebar footer - TODO: Add account/logout options */}
        <div className="absolute bottom-4 left-4 right-4 pt-4 border-t border-graphite-700">
          <div className="flex items-center gap-3 text-sm text-graphite-400">
            <div className="w-8 h-8 bg-graphite-700 rounded-full"></div>
            <div>
              {/* TODO: Display current user info */}
              <p className="font-medium text-graphite-50">John Doe</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
