import { useState, useMemo } from "react";
import type { AuctionLot } from "../../types/auction";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { ArrowUpDown } from "lucide-react";

interface AuctionTableProps {
  lots: AuctionLot[];
}

type SortColumn =
  | "dealScore"
  | "manufacturer"
  | "model"
  | "currentBid"
  | "estimatedMarketValue"
  | "expectedProfit"
  | "confidence"
  | "auctionEnd";

type SortDirection = "asc" | "desc";

/**
 * Auction Lots Table Component
 * Displays auction lots in a sortable, interactive table with color-coded scores
 */
export function AuctionTable({ lots }: AuctionTableProps) {
  const [sortColumn, setSortColumn] = useState<SortColumn>("dealScore");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [selectedLotId, setSelectedLotId] = useState<string | null>(null);

  /**
   * Get badge variant based on deal score
   */
  const getScoreVariant = (
    score: number
  ): "success" | "default" | "warning" | "secondary" => {
    if (score >= 95) return "success";
    if (score >= 80) return "default";
    if (score >= 65) return "warning";
    return "secondary";
  };

  /**
   * Format time remaining as human-readable string
   */
  const formatTimeRemaining = (endDate: Date): string => {
    const now = new Date();
    const diff = endDate.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (hours === 0) return `${minutes}m`;
    if (minutes === 0) return `${hours}h`;
    return `${hours}h ${minutes}m`;
  };

  /**
   * Sort lots based on current sort column and direction
   */
  const sortedLots = useMemo(() => {
    const sorted = [...lots].sort((a, b) => {
      let aVal: number | string | Date = a[sortColumn];
      let bVal: number | string | Date = b[sortColumn];

      if (sortColumn === "auctionEnd") {
        aVal = (aVal as Date).getTime();
        bVal = (bVal as Date).getTime();
      } else if (typeof aVal === "string") {
        aVal = aVal.toLowerCase();
        bVal = (bVal as string).toLowerCase();
      }

      if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [lots, sortColumn, sortDirection]);

  /**
   * Handle column header click to sort
   */
  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("desc");
    }
  };

  /**
   * Render a sortable header cell
   */
  const SortHeader = ({
    column,
    label,
  }: {
    column: SortColumn;
    label: string;
  }) => (
    <TableHead
      className="cursor-pointer hover:bg-graphite-700 transition-colors"
      onClick={() => handleSort(column)}
    >
      <div className="flex items-center gap-2">
        <span>{label}</span>
        {sortColumn === column && (
          <ArrowUpDown className="h-4 w-4 text-accent-primary" />
        )}
      </div>
    </TableHead>
  );

  return (
    <Card className="border-graphite-700">
      {/* Table container with horizontal scroll on mobile */}
      <div className="overflow-x-auto">
        <Table>
          {/* Table header */}
          <TableHeader>
            <TableRow className="hover:bg-graphite-800">
              <SortHeader column="dealScore" label="Score" />
              <SortHeader column="manufacturer" label="Manufacturer" />
              <SortHeader column="model" label="Model" />
              <SortHeader column="currentBid" label="Current Bid" />
              <SortHeader column="estimatedMarketValue" label="Market Value" />
              <SortHeader column="expectedProfit" label="Expected Profit" />
              <SortHeader column="confidence" label="Confidence" />
              <SortHeader column="auctionEnd" label="Time Remaining" />
            </TableRow>
          </TableHeader>

          {/* Table body */}
          <TableBody>
            {sortedLots.map((lot) => (
              <TableRow
                key={lot.id}
                onClick={() =>
                  setSelectedLotId(selectedLotId === lot.id ? null : lot.id)
                }
                className={`cursor-pointer ${
                  selectedLotId === lot.id
                    ? "bg-graphite-700 border-l-4 border-accent-primary"
                    : ""
                }`}
                data-state={selectedLotId === lot.id ? "selected" : undefined}
              >
                {/* Score */}
                <TableCell className="font-bold">
                  <Badge variant={getScoreVariant(lot.dealScore)}>
                    {lot.dealScore}/100
                  </Badge>
                </TableCell>

                {/* Manufacturer */}
                <TableCell className="font-medium">{lot.manufacturer}</TableCell>

                {/* Model */}
                <TableCell>{lot.model}</TableCell>

                {/* Current Bid */}
                <TableCell className="font-mono">
                  ${lot.currentBid.toLocaleString()}
                </TableCell>

                {/* Market Value */}
                <TableCell className="font-mono">
                  ${lot.estimatedMarketValue.toLocaleString()}
                </TableCell>

                {/* Expected Profit */}
                <TableCell className="font-mono">
                  <span className="text-accent-success font-medium">
                    ${lot.expectedProfit.toLocaleString()}
                  </span>
                </TableCell>

                {/* Confidence */}
                <TableCell>
                  <Badge variant="outline">{lot.confidence}%</Badge>
                </TableCell>

                {/* Time Remaining */}
                <TableCell className="text-xs font-medium text-accent-secondary">
                  {formatTimeRemaining(lot.auctionEnd)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Empty state */}
      {sortedLots.length === 0 && (
        <div className="px-6 py-12 text-center text-graphite-400">
          <p>No auction lots available</p>
        </div>
      )}

      {/* Table footer with count */}
      <div className="px-6 py-3 bg-graphite-900 border-t border-graphite-700 text-xs text-graphite-400">
        <span className="font-medium">
          Showing {sortedLots.length} lot{sortedLots.length !== 1 ? "s" : ""}
        </span>
        <span className="ml-4">
          {selectedLotId ? `1 selected` : "Click a row to select"}
        </span>
      </div>
    </Card>
  );
}
