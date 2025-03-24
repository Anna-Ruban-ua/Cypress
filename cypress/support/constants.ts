import { endpoints } from './endpoints';

export const menuItems = [
  { menuName: "Products", itemUrl: endpoints.products, isDirectLink: false },
  { menuName: "Solutions", itemUrl: endpoints.solutions, isDirectLink: false },
  { menuName: "Pricing", itemUrl: endpoints.pricing, isDirectLink: true },
  { menuName: "Why Telnyx", itemUrl: endpoints.whyTelnyx, isDirectLink: false },
  { menuName: "Resources", itemUrl: endpoints.resources, isDirectLink: false },
  { menuName: "Developers" }
];

export const footerCompanyItems = [
  { footerName: "Our Network", itemUrl: endpoints.ourNetwork },
  { footerName: "Global coverage", itemUrl: endpoints.globalCoverage },
  { footerName: "Release Notes", itemUrl: endpoints.releaseNotes },
  { footerName: "Careers", itemUrl: endpoints.careers },
  { footerName: "Website Terms and Conditions", itemUrl: endpoints.terms },
  { footerName: "Terms and conditions of service", itemUrl: endpoints.termsService },
  { footerName: "Voice AI", itemUrl: endpoints.voiceAI }
];

export const footerLegalItems = [
  { footerName: "Data and Privacy", itemUrl: endpoints.dataPrivacy },
  { footerName: "Report Abuse", itemUrl: endpoints.reportAbuse },
  { footerName: "Privacy Policy", itemUrl: endpoints.privacyPolicy },
  { footerName: "Cookie Policy", itemUrl: endpoints.cookiePolicy },
  { footerName: "Law Enforcement", itemUrl: endpoints.lawEnforcement },
  { footerName: "Acceptable Use", itemUrl: endpoints.acceptableUse },
  { footerName: "Trust Center", itemUrl: endpoints.trustCenter }
];

export const footerCompareTelnixItems = [
  { footerName: "Telnyx vs. Twilio", itemUrl: endpoints.twilio },
  { footerName: "Telnyx vs. Bandwidth", itemUrl: endpoints.bandwidth },
  { footerName: "Telnyx vs. Kore Wireless", itemUrl: endpoints.kore },
  { footerName: "Telnyx vs. Hologram", itemUrl: endpoints.hologram },
  { footerName: "Telnyx vs. Vonage", itemUrl: endpoints.vonage },
  { footerName: "Telnyx vs. Amazon S3", itemUrl: endpoints.s3 },
  { footerName: "AI Glossary", itemUrl: endpoints.aiGlossary }
];