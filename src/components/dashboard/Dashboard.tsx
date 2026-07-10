import { TopOpportunities } from "./TopOpportunities";
import { LiveAuctionFeed } from "./LiveAuctionFeed";
import { Watchlist } from "./Watchlist";
import { AuctionsEndingSoon } from "./AuctionsEndingSoon";

/**
 * Dashboard Page Component
 * Main dashboard view with all key auction intelligence cards
 */
export function Dashboard() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Dashboard header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-graphite-50 mb-2">
          Auction Dashboard
        </h1>
        <p className="text-graphite-400">
          Real-time insights into active auctions and opportunities
        </p>
      </div>

      {/* Dashboard grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-max">
        {/* Top left - Top Opportunities (spans 1 col, 2 rows) */}
        <div className="lg:row-span-2">
          <TopOpportunities />
        </div>

        {/* Top right - Live Auction Feed (spans 1 col, 2 rows) */}
        <div className="lg:row-span-2">
          <LiveAuctionFeed />
        </div>

        {/* Bottom left - Watchlist (spans 1 col) */}
        <div className="lg:col-span-1">
          <Watchlist />
        </div>

        {/* Bottom right - Auctions Ending Soon (spans 1 col) */}
        <div className="lg:col-span-1">
          <AuctionsEndingSoon />
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-8 p-4 bg-graphite-800 rounded-lg border border-graphite-700 text-center text-graphite-400 text-sm">
        {/* TODO: Add last updated timestamp and connection status */}
        Last updated: Just now • Connection: Active
      </div>
    </div>
  );
}
