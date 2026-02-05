// ============================================================================
// Global Configuration - Centralized business information
// ============================================================================
// This file contains all contact details, addresses, and business information
// used across the entire website. Update here to reflect changes everywhere.
//
// USAGE:
// import { businessInfo } from './config';
// 
// ACCESS EXAMPLES:
// - businessInfo.name
// - businessInfo.email
// - businessInfo.tempe.phoneDisplay
// - businessInfo.glendale.address
// ============================================================================

export const businessInfo = {
  name: "Cell99",
  
  // Email contact
  email: "cell99org@gmail.com",
  emailHref: "mailto:cell99org@gmail.com",
  
  // Primary location (Tempe)
  tempe: {
    address: "1700 E Elliot Rd STE 4, Tempe, AZ 85284",
    phoneDisplay: "+1 (917)-385-5374",
    phoneHref: "tel:+19173855374",
    city: "Tempe, AZ",
    mapLink: "https://www.google.com/maps?q=1700+E+Elliot+Rd+STE+4+Tempe+AZ+85284"
  },
  
  // Secondary location (Glendale) - used in legal documents
  glendale: {
    address: "5270 N 59th Ave #10, Glendale, AZ 85301, United States",
    phoneDisplay: "+1 (602) 796-4944",
    phoneHref: "tel:+16027964944",
    city: "Glendale, AZ",
    mapLink: "https://www.google.com/maps?q=5270+N+59th+Ave+10+Glendale+AZ+85301"
  },
  
  // Business hours - Update individual days as needed
  hours: {
    monday: "10:00 AM - 8:00 PM",
    tuesday: "10:00 AM - 8:00 PM",
    wednesday: "10:00 AM - 8:00 PM",
    thursday: "10:00 AM - 8:00 PM",
    friday: "10:00 AM - 8:00 PM",
    saturday: "10:00 AM - 8:00 PM",
    sunday: "11:00 AM - 6:00 PM"
  },
  
  // Legal
  effectiveDate: "November 1, 2024",
  copyrightYear: "2025"
};
