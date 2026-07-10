import { DashboardCard } from "./DashboardCard";

/**
 * Watchlist Component
 * User's tracked auctions and saved items
 * TODO: Connect to user watchlist data store
 */
export function Watchlist() {
  // TODO: Replace with personalized watchlist from database
  const watchlistItems = [
    {
      id: 1,
      title: "Patek Philippe Nautilus",
      status: "Upcoming",
      startTime: "Tomorrow 10:00 AM",
      estimatedValue: "$45,000",
    },
    {
      id: 2,
      title: "First Edition Hemingway",
      status: "Active",
      startTime: "In progress",
      estimatedValue: "$8,500",
    },
    {
      id: 3,
      title: "Monet Water Lilies Print",
      status: "Upcoming",
      startTime: "2 days",
      estimatedValue: "$12,000",
    },
    {
      id: 4,
      title: "Cartier Diamond Bracelet",
      status: "Ended",
      startTime: "Completed",
      estimatedValue: "$25,600",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-accent-success bg-accent-success/10";
      case "Upcoming":
        return "text-accent-warning bg-accent-warning/10";
      case "Ended":
        return "text-graphite-400 bg-graphite-700";
      default:
        return "text-graphite-300 bg-graphite-700";
    }
  };

  return (
    <DashboardCard title="My Watchlist" icon="❤️">
      <div className="space-y-3">
        {watchlistItems.map((item) => (
          <div
            key={item.id}
            className="p-3 bg-graphite-700/50 rounded-lg hover:bg-graphite-700 transition-colors cursor-pointer border border-graphite-600"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-graphite-50 flex-1">{item.title}</h4>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded ${getStatusColor(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>
            <div className="text-xs text-graphite-400 space-y-1">
              <p>{item.startTime}</p>
              <p className="text-accent-primary font-medium">
                Est. {item.estimatedValue}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* TODO: Add "Add to Watchlist" and manage buttons */}
    </DashboardCard>
  );
}
