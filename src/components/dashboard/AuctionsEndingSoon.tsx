import { DashboardCard } from "./DashboardCard";

/**
 * Auctions Ending Soon Component
 * Time-sensitive auctions requiring immediate attention
 * TODO: Connect to auction ending alerts system
 */
export function AuctionsEndingSoon() {
  // TODO: Replace with real-time data filtered by ending time
  const endingSoon = [
    {
      id: 1,
      title: "Rolex Submariner - Vintage",
      currentBid: "$6,800",
      endsIn: "8 minutes",
      urgency: "critical",
      bids: 12,
    },
    {
      id: 2,
      title: "Signed Baseball Card",
      currentBid: "$3,400",
      endsIn: "23 minutes",
      urgency: "high",
      bids: 7,
    },
    {
      id: 3,
      title: "Art Deco Lamp",
      currentBid: "$1,200",
      endsIn: "45 minutes",
      urgency: "medium",
      bids: 4,
    },
    {
      id: 4,
      title: "Persian Rug - 9x12",
      currentBid: "$4,500",
      endsIn: "1 hour 15 minutes",
      urgency: "medium",
      bids: 9,
    },
  ];

  const getUrgencyColors = (urgency: string) => {
    switch (urgency) {
      case "critical":
        return "bg-accent-danger/10 border-accent-danger/30 text-accent-danger";
      case "high":
        return "bg-accent-warning/10 border-accent-warning/30 text-accent-warning";
      case "medium":
        return "bg-accent-primary/10 border-accent-primary/30 text-accent-primary";
      default:
        return "bg-graphite-700/50 border-graphite-600 text-graphite-300";
    }
  };

  return (
    <DashboardCard title="Auctions Ending Soon" icon="⏰">
      <div className="space-y-3">
        {endingSoon.map((auction) => (
          <div
            key={auction.id}
            className={`p-3 rounded-lg transition-colors cursor-pointer border ${getUrgencyColors(
              auction.urgency
            )}`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h4 className="font-medium flex items-center gap-2">
                  {auction.title}
                  {auction.urgency === "critical" && (
                    <span className="animate-pulse text-lg">🔴</span>
                  )}
                </h4>
              </div>
              <span className="text-xs font-bold whitespace-nowrap ml-2">
                {auction.endsIn}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div>
                <span className="font-semibold">{auction.currentBid}</span>
                <span className="text-xs ml-2 opacity-75">({auction.bids} bids)</span>
              </div>
              <button className="text-xs px-2 py-1 bg-white/10 hover:bg-white/20 rounded transition-colors">
                Bid Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* TODO: Add bid history and notification settings */}
    </DashboardCard>
  );
}
