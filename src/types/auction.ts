/**
 * Auction Types
 * Production-grade TypeScript type definitions for auction lots and related data
 */

/**
 * Supported auction house platforms
 */
export type AuctionHouse =
  | "Montrose"
  | "Rock Island"
  | "Poulin"
  | "GunBroker"
  | "Other";

/**
 * Firearm categories for classification and filtering
 */
export type FirearmCategory =
  | "Shotgun"
  | "Rifle"
  | "Handgun"
  | "Military"
  | "Antique"
  | "Black Powder"
  | "Accessory";

/**
 * Core auction lot interface
 * Represents a single item up for auction with full metadata and analytics
 */
export interface AuctionLot {
  /** Unique identifier for the auction lot */
  id: string;

  /** The auction house platform where the lot is being sold */
  auctionHouse: AuctionHouse;

  /** Lot number assigned by the auction house */
  lotNumber: string;

  /** Manufacturer or brand name */
  manufacturer: string;

  /** Model designation or specific model name */
  model: string;

  /** Caliber or gauge specification */
  caliber: string;

  /** Classification category of the firearm */
  category: FirearmCategory;

  /** Physical condition assessment (e.g., "Excellent", "Good", "Fair", "Poor") */
  condition: string;

  /** Current highest bid amount in USD */
  currentBid: number;

  /** Buyer's premium percentage or amount in USD */
  buyersPremium: number;

  /** Estimated current market value in USD */
  estimatedMarketValue: number;

  /** Expected profit margin if purchased at current bid (USD) */
  expectedProfit: number;

  /** Deal quality score (0-100) based on profit potential and market conditions */
  dealScore: number;

  /** Confidence level in price assessment (0-100) based on comparable sales data */
  confidence: number;

  /** Auction end date and time */
  auctionEnd: Date;

  /** URL to the primary lot image */
  imageUrl: string;

  /** Direct URL to the auction lot listing */
  auctionUrl: string;

  /** Whether the user is actively watching this lot */
  isWatching: boolean;

  /** Optional user notes about the lot */
  notes?: string;
}
