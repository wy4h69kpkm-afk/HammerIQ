import { DashboardCard } from "./DashboardCard";

/**
 * Live Auction Feed Component
 * Real-time stream of active auction activity
 * TODO: Connect to live auction websocket/API
 */
export function LiveAuctionFeed() {
  // TODO: Replace with live data stream from server
  const liveAuctions = [
    {
      id: 1,
      title: "Oil Painting - Landscape",
      currentBid: "$3,200",
      bidder: "Bidder #2847",
      timeLeft: "4m 23s",
      activity: "3 bids",
    },
    {
      id: 2,
      title: "Diamond Ring - 2.5 Carat",
      currentBid: "$8,950",
      bidder: "Bidder #5621",
      timeLeft: "12m 15s",
      activity: "8 bids",
    },
    {
      id: 3,
      title: "Vintage Rolex Watch",
      currentBid: "$5,150",
      bidder: "Bidder #1024",
      timeLeft: "2m 8s",
      activity: "15 bids",
    },
    {
      id: 4,
      title: "Antique Vase - Ming Dynasty",
      currentBid: "$12,300",
      bidder: "Bidder #9342",
      timeLeft: "18m 45s",
      activity: "22 bids",
    },
  ];

  return (
    <DashboardCard title="Live Auction Feed" icon="🔴">
      <div className="space-y-2">
        {liveAuctions.map((auction) => (
          <div
            key={auction.id}
            className="p-3 bg-graphite-700/50 rounded-lg hover:bg-graphite-700 transition-colors cursor-pointer border border-graphite-600"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h4 className="font-medium text-graphite-50">{auction.title}</h4>
                <p className="text-xs text-graphite-400 mt-1">
                  {auction.bidder} • {auction.activity}
                </p>
              </div>
              <span className="text-xs font-bold text-accent-secondary">
                {auction.timeLeft}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-accent-primary">
                {auction.currentBid}
              </span>
              <div className="w-8 h-8 bg-graphite-800 rounded-full flex items-center justify-center">
                <span className="text-xs animate-pulse">📈</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* TODO: Add auto-refresh indicator and settings */}
    </DashboardCard>
  );
}
