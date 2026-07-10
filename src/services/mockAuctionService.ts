/**
 * Mock Auction Service
 * Generates realistic firearm auction lot data for development and testing
 */

import type { AuctionLot } from "../types/auction";

/**
 * Generates a collection of realistic firearm auction lots
 * Returns mock data for dashboard testing and UI development
 */
export async function getMockAuctionLots(): Promise<AuctionLot[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  const auctionLots: AuctionLot[] = [
    // 1. Beretta 92FS - Rock Island
    {
      id: "lot-001",
      auctionHouse: "Rock Island",
      lotNumber: "5442",
      manufacturer: "Beretta",
      model: "92FS Inox",
      caliber: "9mm",
      category: "Handgun",
      condition: "Excellent",
      currentBid: 650,
      buyersPremium: 97.5,
      estimatedMarketValue: 750,
      expectedProfit: 85,
      dealScore: 78,
      confidence: 92,
      auctionEnd: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours
      imageUrl: "https://via.placeholder.com/300x200?text=Beretta+92FS",
      auctionUrl: "https://example.com/lot/001",
      isWatching: true,
      notes: "Minimal wear, original box and papers",
    },

    // 2. Browning BLR - Montrose
    {
      id: "lot-002",
      auctionHouse: "Montrose",
      lotNumber: "3821",
      manufacturer: "Browning",
      model: "BLR Lightweight",
      caliber: ".308 Winchester",
      category: "Rifle",
      condition: "Very Good",
      currentBid: 525,
      buyersPremium: 78.75,
      estimatedMarketValue: 650,
      expectedProfit: 105,
      dealScore: 85,
      confidence: 88,
      auctionEnd: new Date(Date.now() + 4.5 * 60 * 60 * 1000), // 4.5 hours
      imageUrl: "https://via.placeholder.com/300x200?text=Browning+BLR",
      auctionUrl: "https://example.com/lot/002",
      isWatching: false,
    },

    // 3. Perazzi MX12 - Poulin
    {
      id: "lot-003",
      auctionHouse: "Poulin",
      lotNumber: "2156",
      manufacturer: "Perazzi",
      model: "MX12 Sporting",
      caliber: "12 Gauge",
      category: "Shotgun",
      condition: "Excellent",
      currentBid: 2800,
      buyersPremium: 420,
      estimatedMarketValue: 3200,
      expectedProfit: 520,
      dealScore: 82,
      confidence: 95,
      auctionEnd: new Date(Date.now() + 6 * 60 * 60 * 1000), // 6 hours
      imageUrl: "https://via.placeholder.com/300x200?text=Perazzi+MX12",
      auctionUrl: "https://example.com/lot/003",
      isWatching: true,
      notes: "Competition-grade with hard case",
    },

    // 4. Winchester Model 70 - Rock Island
    {
      id: "lot-004",
      auctionHouse: "Rock Island",
      lotNumber: "5443",
      manufacturer: "Winchester",
      model: "Model 70 Classic",
      caliber: ".30-06 Springfield",
      category: "Rifle",
      condition: "Good",
      currentBid: 450,
      buyersPremium: 67.5,
      estimatedMarketValue: 550,
      expectedProfit: 75,
      dealScore: 72,
      confidence: 85,
      auctionEnd: new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hours
      imageUrl: "https://via.placeholder.com/300x200?text=Winchester+70",
      auctionUrl: "https://example.com/lot/004",
      isWatching: false,
    },

    // 5. Colt 1911 - GunBroker
    {
      id: "lot-005",
      auctionHouse: "GunBroker",
      lotNumber: "9876",
      manufacturer: "Colt",
      model: "M1911 Government",
      caliber: ".45 ACP",
      category: "Handgun",
      condition: "Very Good",
      currentBid: 875,
      buyersPremium: 131.25,
      estimatedMarketValue: 950,
      expectedProfit: 95,
      dealScore: 68,
      confidence: 89,
      auctionEnd: new Date(Date.now() + 5.5 * 60 * 60 * 1000), // 5.5 hours
      imageUrl: "https://via.placeholder.com/300x200?text=Colt+1911",
      auctionUrl: "https://example.com/lot/005",
      isWatching: true,
    },

    // 6. Remington 700 - Montrose
    {
      id: "lot-006",
      auctionHouse: "Montrose",
      lotNumber: "3822",
      manufacturer: "Remington",
      model: "700 SPS Tactical",
      caliber: ".223 Remington",
      category: "Rifle",
      condition: "Excellent",
      currentBid: 625,
      buyersPremium: 93.75,
      estimatedMarketValue: 750,
      expectedProfit: 125,
      dealScore: 88,
      confidence: 91,
      auctionEnd: new Date(Date.now() + 7 * 60 * 60 * 1000), // 7 hours
      imageUrl: "https://via.placeholder.com/300x200?text=Remington+700",
      auctionUrl: "https://example.com/lot/006",
      isWatching: false,
    },

    // 7. Smith & Wesson M&P9 - Rock Island
    {
      id: "lot-007",
      auctionHouse: "Rock Island",
      lotNumber: "5444",
      manufacturer: "Smith & Wesson",
      model: "M&P9 Shield",
      caliber: "9mm",
      category: "Handgun",
      condition: "Like New",
      currentBid: 425,
      buyersPremium: 63.75,
      estimatedMarketValue: 500,
      expectedProfit: 65,
      dealScore: 75,
      confidence: 94,
      auctionEnd: new Date(Date.now() + 1.5 * 60 * 60 * 1000), // 1.5 hours
      imageUrl: "https://via.placeholder.com/300x200?text=S&W+M&P9",
      auctionUrl: "https://example.com/lot/007",
      isWatching: true,
    },

    // 8. Ruger 10/22 - Poulin
    {
      id: "lot-008",
      auctionHouse: "Poulin",
      lotNumber: "2157",
      manufacturer: "Ruger",
      model: "10/22 Carbine",
      caliber: ".22 LR",
      category: "Rifle",
      condition: "Very Good",
      currentBid: 185,
      buyersPremium: 27.75,
      estimatedMarketValue: 250,
      expectedProfit: 55,
      dealScore: 81,
      confidence: 87,
      auctionEnd: new Date(Date.now() + 8 * 60 * 60 * 1000), // 8 hours
      imageUrl: "https://via.placeholder.com/300x200?text=Ruger+10/22",
      auctionUrl: "https://example.com/lot/008",
      isWatching: false,
    },

    // 9. Springfield M1A - GunBroker
    {
      id: "lot-009",
      auctionHouse: "GunBroker",
      lotNumber: "9877",
      manufacturer: "Springfield",
      model: "M1A SOCOM 16",
      caliber: ".308 Winchester",
      category: "Rifle",
      condition: "Excellent",
      currentBid: 1250,
      buyersPremium: 187.5,
      estimatedMarketValue: 1400,
      expectedProfit: 185,
      dealScore: 79,
      confidence: 93,
      auctionEnd: new Date(Date.now() + 9 * 60 * 60 * 1000), // 9 hours
      imageUrl: "https://via.placeholder.com/300x200?text=Springfield+M1A",
      auctionUrl: "https://example.com/lot/009",
      isWatching: true,
      notes: "Excellent tactical rifle for collectors",
    },

    // 10. SIG Sauer P226 - Montrose
    {
      id: "lot-010",
      auctionHouse: "Montrose",
      lotNumber: "3823",
      manufacturer: "SIG Sauer",
      model: "P226 Equinox",
      caliber: "9mm",
      category: "Handgun",
      condition: "Like New",
      currentBid: 850,
      buyersPremium: 127.5,
      estimatedMarketValue: 950,
      expectedProfit: 75,
      dealScore: 71,
      confidence: 90,
      auctionEnd: new Date(Date.now() + 10.5 * 60 * 60 * 1000), // 10.5 hours
      imageUrl: "https://via.placeholder.com/300x200?text=SIG+Sauer+P226",
      auctionUrl: "https://example.com/lot/010",
      isWatching: false,
    },

    // 11. Beretta A400 Xcel - Rock Island
    {
      id: "lot-011",
      auctionHouse: "Rock Island",
      lotNumber: "5445",
      manufacturer: "Beretta",
      model: "A400 Xcel",
      caliber: "12 Gauge",
      category: "Shotgun",
      condition: "Excellent",
      currentBid: 1450,
      buyersPremium: 217.5,
      estimatedMarketValue: 1600,
      expectedProfit: 180,
      dealScore: 80,
      confidence: 92,
      auctionEnd: new Date(Date.now() + 2.5 * 60 * 60 * 1000), // 2.5 hours
      imageUrl: "https://via.placeholder.com/300x200?text=Beretta+A400",
      auctionUrl: "https://example.com/lot/011",
      isWatching: true,
    },

    // 12. Browning X-Bolt - Poulin
    {
      id: "lot-012",
      auctionHouse: "Poulin",
      lotNumber: "2158",
      manufacturer: "Browning",
      model: "X-Bolt Medallion",
      caliber: ".270 Winchester",
      category: "Rifle",
      condition: "Very Good",
      currentBid: 685,
      buyersPremium: 102.75,
      estimatedMarketValue: 800,
      expectedProfit: 135,
      dealScore: 84,
      confidence: 89,
      auctionEnd: new Date(Date.now() + 11 * 60 * 60 * 1000), // 11 hours
      imageUrl: "https://via.placeholder.com/300x200?text=Browning+X-Bolt",
      auctionUrl: "https://example.com/lot/012",
      isWatching: false,
    },

    // 13. Perazzi SC3 - GunBroker
    {
      id: "lot-013",
      auctionHouse: "GunBroker",
      lotNumber: "9878",
      manufacturer: "Perazzi",
      model: "SC3 Standard",
      caliber: "12 Gauge",
      category: "Shotgun",
      condition: "Excellent",
      currentBid: 3200,
      buyersPremium: 480,
      estimatedMarketValue: 3600,
      expectedProfit: 600,
      dealScore: 85,
      confidence: 96,
      auctionEnd: new Date(Date.now() + 12.5 * 60 * 60 * 1000), // 12.5 hours
      imageUrl: "https://via.placeholder.com/300x200?text=Perazzi+SC3",
      auctionUrl: "https://example.com/lot/013",
      isWatching: true,
      notes: "High-end competition shotgun",
    },

    // 14. Winchester SX4 - Montrose
    {
      id: "lot-014",
      auctionHouse: "Montrose",
      lotNumber: "3824",
      manufacturer: "Winchester",
      model: "SX4 Composite",
      caliber: "12 Gauge",
      category: "Shotgun",
      condition: "Good",
      currentBid: 325,
      buyersPremium: 48.75,
      estimatedMarketValue: 425,
      expectedProfit: 65,
      dealScore: 79,
      confidence: 86,
      auctionEnd: new Date(Date.now() + 13.5 * 60 * 60 * 1000), // 13.5 hours
      imageUrl: "https://via.placeholder.com/300x200?text=Winchester+SX4",
      auctionUrl: "https://example.com/lot/014",
      isWatching: false,
    },

    // 15. Colt SAA - Rock Island
    {
      id: "lot-015",
      auctionHouse: "Rock Island",
      lotNumber: "5446",
      manufacturer: "Colt",
      model: "Single Action Army",
      caliber: ".45 Colt",
      category: "Antique",
      condition: "Very Good",
      currentBid: 1100,
      buyersPremium: 165,
      estimatedMarketValue: 1250,
      expectedProfit: 150,
      dealScore: 76,
      confidence: 91,
      auctionEnd: new Date(Date.now() + 4 * 60 * 60 * 1000), // 4 hours
      imageUrl: "https://via.placeholder.com/300x200?text=Colt+SAA",
      auctionUrl: "https://example.com/lot/015",
      isWatching: true,
      notes: "Classic collectible, late 1800s",
    },

    // 16. Remington 870 - Poulin
    {
      id: "lot-016",
      auctionHouse: "Poulin",
      lotNumber: "2159",
      manufacturer: "Remington",
      model: "870 Express",
      caliber: "12 Gauge",
      category: "Shotgun",
      condition: "Good",
      currentBid: 275,
      buyersPremium: 41.25,
      estimatedMarketValue: 375,
      expectedProfit: 60,
      dealScore: 77,
      confidence: 84,
      auctionEnd: new Date(Date.now() + 14.5 * 60 * 60 * 1000), // 14.5 hours
      imageUrl: "https://via.placeholder.com/300x200?text=Remington+870",
      auctionUrl: "https://example.com/lot/016",
      isWatching: false,
    },

    // 17. Smith & Wesson 686 - GunBroker
    {
      id: "lot-017",
      auctionHouse: "GunBroker",
      lotNumber: "9879",
      manufacturer: "Smith & Wesson",
      model: "686 Plus",
      caliber: ".357 Magnum",
      category: "Handgun",
      condition: "Excellent",
      currentBid: 625,
      buyersPremium: 93.75,
      estimatedMarketValue: 725,
      expectedProfit: 95,
      dealScore: 80,
      confidence: 88,
      auctionEnd: new Date(Date.now() + 15.5 * 60 * 60 * 1000), // 15.5 hours
      imageUrl: "https://via.placeholder.com/300x200?text=S&W+686",
      auctionUrl: "https://example.com/lot/017",
      isWatching: true,
    },

    // 18. Ruger Super Blackhawk - Montrose
    {
      id: "lot-018",
      auctionHouse: "Montrose",
      lotNumber: "3825",
      manufacturer: "Ruger",
      model: "Super Blackhawk",
      caliber: ".44 Magnum",
      category: "Handgun",
      condition: "Very Good",
      currentBid: 525,
      buyersPremium: 78.75,
      estimatedMarketValue: 625,
      expectedProfit: 75,
      dealScore: 74,
      confidence: 87,
      auctionEnd: new Date(Date.now() + 16.5 * 60 * 60 * 1000), // 16.5 hours
      imageUrl: "https://via.placeholder.com/300x200?text=Ruger+Blackhawk",
      auctionUrl: "https://example.com/lot/018",
      isWatching: false,
    },

    // 19. Springfield 1903 - Rock Island
    {
      id: "lot-019",
      auctionHouse: "Rock Island",
      lotNumber: "5447",
      manufacturer: "Springfield",
      model: "Model 1903",
      caliber: ".30-06 Springfield",
      category: "Military",
      condition: "Fair",
      currentBid: 450,
      buyersPremium: 67.5,
      estimatedMarketValue: 550,
      expectedProfit: 65,
      dealScore: 70,
      confidence: 82,
      auctionEnd: new Date(Date.now() + 17.5 * 60 * 60 * 1000), // 17.5 hours
      imageUrl: "https://via.placeholder.com/300x200?text=Springfield+1903",
      auctionUrl: "https://example.com/lot/019",
      isWatching: false,
      notes: "WWI-era military rifle",
    },

    // 20. SIG Sauer P320 - Poulin
    {
      id: "lot-020",
      auctionHouse: "Poulin",
      lotNumber: "2160",
      manufacturer: "SIG Sauer",
      model: "P320 Compact",
      caliber: "9mm",
      category: "Handgun",
      condition: "Like New",
      currentBid: 475,
      buyersPremium: 71.25,
      estimatedMarketValue: 550,
      expectedProfit: 55,
      dealScore: 72,
      confidence: 92,
      auctionEnd: new Date(Date.now() + 18.5 * 60 * 60 * 1000), // 18.5 hours
      imageUrl: "https://via.placeholder.com/300x200?text=SIG+Sauer+P320",
      auctionUrl: "https://example.com/lot/020",
      isWatching: true,
    },
  ];

  return auctionLots;
}
