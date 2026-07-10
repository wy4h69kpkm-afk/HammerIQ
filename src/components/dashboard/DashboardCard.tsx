interface DashboardCardProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Dashboard Card Component
 * Reusable card container for dashboard sections
 */
export function DashboardCard({
  title,
  icon,
  children,
  className = "",
}: DashboardCardProps) {
  return (
    <div
      className={`bg-graphite-800 rounded-lg border border-graphite-700 hover:border-graphite-600 transition-colors h-full flex flex-col ${className}`}
    >
      {/* Card header */}
      <div className="px-6 py-4 border-b border-graphite-700 flex items-center gap-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <h3 className="text-lg font-semibold text-graphite-50">{title}</h3>
      </div>

      {/* Card content */}
      <div className="flex-1 p-6 overflow-auto">{children}</div>
    </div>
  );
}
