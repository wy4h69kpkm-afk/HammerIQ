import { DashboardCard } from "./DashboardCard";

/**
 * Top Opportunities Card Component
 * Displays the most promising auction opportunities
 * TODO: Connect to live opportunity data source
 */
export function TopOpportunities() {
  // TODO: Replace with live data from API
  const opportunities = [
    {
      id: 1,
      title: "Vintage Art Collection",
      estimate: "$5,200 - $8,500",
      confidence: "92%",
      status: "High Value",
    },
    {
      id: 2,
      title: "Rare Antique Furniture",
      estimate: "$2,100 - $4,300",
      confidence: "87%",
      status: "Good Value",
    },
    {
      id: 3,
      title: "Classic Timepieces",
      estimate: "$8,900 - $12,500",
      confidence: "95%",
      status: "Excellent",
    },
  ];

  return (
    <DashboardCard title="Top Opportunities" icon="⭐">
      <div className="space-y-3">
        {opportunities.map((opp) => (
          <div
            key={opp.id}
            className="p-3 bg-graphite-700/50 rounded-lg hover:bg-graphite-700 transition-colors cursor-pointer border border-graphite-600"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-graphite-50 flex-1">{opp.title}</h4>
              <span className="text-xs font-semibold text-accent-primary bg-graphite-800 px-2 py-1 rounded">
                {opp.confidence}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm text-graphite-300">
              <span>{opp.estimate}</span>
              <span className="text-accent-success">{opp.status}</span>
            </div>
          </div>
        ))}
      </div>
      {/* TODO: Add "View All" button linking to opportunities page */}
    </DashboardCard>
  );
}
