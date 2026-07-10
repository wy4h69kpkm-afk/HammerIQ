import { useEffect, useState } from "react";
import { getMockAuctionLots } from "../../services/mockAuctionService";
import type { AuctionLot } from "../../types/auction";
import { AuctionTable } from "./AuctionTable";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { BarChart3, TrendingUp, Target, Heart } from "lucide-react";

/**
 * Dashboard Page Component
 * Main dashboard view displaying auction lots in an interactive sortable table
 */
export function Dashboard() {
  const [lots, setLots] = useState<AuctionLot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Load mock auction data on component mount
   */
  useEffect(() => {
    const loadAuctionData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getMockAuctionLots();
        setLots(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load auction data"
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadAuctionData();
  }, []);

  const avgScore = Math.round(
    lots.reduce((sum, lot) => sum + lot.dealScore, 0) / lots.length || 0
  );
  const totalProfit = lots.reduce((sum, lot) => sum + lot.expectedProfit, 0);
  const watchingCount = lots.filter((l) => l.isWatching).length;

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-graphite-50">
          Auction Lots
        </h1>
        <p className="text-graphite-400">
          Real-time firearm auction intelligence with deal scoring and profit analysis
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Lots Card */}
        <Card className="border-graphite-700">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-graphite-300">
                Total Lots
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-accent-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-graphite-50">{lots.length}</div>
            <p className="text-xs text-graphite-400 mt-1">
              {lots.length > 0 ? "Active auctions" : "No data"}
            </p>
          </CardContent>
        </Card>

        {/* Average Score Card */}
        <Card className="border-graphite-700">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-graphite-300">
                Avg Score
              </CardTitle>
              <Target className="h-4 w-4 text-accent-warning" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-graphite-50">{avgScore}</div>
            <p className="text-xs text-graphite-400 mt-1">
              {avgScore >= 80
                ? "Excellent deals"
                : avgScore >= 65
                  ? "Good deals"
                  : "Review carefully"}
            </p>
          </CardContent>
        </Card>

        {/* Total Profit Card */}
        <Card className="border-graphite-700">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-graphite-300">
                Total Profit
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-accent-success" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent-success">
              ${totalProfit.toLocaleString()}
            </div>
            <p className="text-xs text-graphite-400 mt-1">
              Potential upside
            </p>
          </CardContent>
        </Card>

        {/* Watching Card */}
        <Card className="border-graphite-700">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-graphite-300">
                Watching
              </CardTitle>
              <Heart className="h-4 w-4 text-accent-secondary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-graphite-50">
              {watchingCount}
            </div>
            <p className="text-xs text-graphite-400 mt-1">
              Tracked items
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main table section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-graphite-50">All Lots</h2>
          <p className="text-sm text-graphite-400">
            Sort by score, manufacturer, or any column to find opportunities
          </p>
        </div>

        {isLoading ? (
          <Card className="border-graphite-700">
            <CardContent className="flex items-center justify-center p-12">
              <div className="text-center">
                <div className="inline-block w-8 h-8 border-4 border-graphite-700 border-t-accent-primary rounded-full animate-spin mb-4"></div>
                <p className="text-graphite-400">Loading auction data...</p>
              </div>
            </CardContent>
          </Card>
        ) : error ? (
          <Card className="border-accent-danger/30 bg-accent-danger/5">
            <CardContent className="p-6 text-center">
              <p className="text-accent-danger font-medium">Error loading data</p>
              <p className="text-graphite-400 text-sm mt-2">{error}</p>
            </CardContent>
          </Card>
        ) : (
          <AuctionTable lots={lots} />
        )}
      </div>

      {/* Footer info */}
      <Card className="border-graphite-700 bg-graphite-800/50">
        <CardContent className="p-4 text-center text-sm text-graphite-400">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span>Using mock data for development</span>
            <Separator className="inline-block h-4 w-px" orientation="vertical" />
            <div className="flex gap-2">
              <Badge variant="success" className="text-xs">95+</Badge>
              <Badge variant="default" className="text-xs">80-94</Badge>
              <Badge variant="warning" className="text-xs">65-79</Badge>
              <Badge variant="secondary" className="text-xs">&lt;65</Badge>
            </div>
          </div>
          <p className="text-xs text-graphite-500 mt-3">
            {/* TODO: Add real-time data updates and WebSocket connection */}
            Ready for live data integration
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
