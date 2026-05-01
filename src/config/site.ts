// src/config/site.ts
// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE FOR EACH NEW CLIENT SITE
//  Everything else in the project auto-adapts from this config.
// ─────────────────────────────────────────────────────────────

const IG = "https://media.stokeleads.com/irongatesvcs";

export const SITE = {
  // ── Business Info ──────────────────────────────────────────
  name: "IronGate Services LLC",
  tagline: "Built on Quality. Focused on You.",
  phone: "(813) 658-8333",
  email: "hello@irongateservicesllc.com",
  /** Street + city line for footer; JSON-LD uses structured fields below */
  address: "7227 Sweet Alyssum Court, Tampa, FL",
  addressLine1: "7227 Sweet Alyssum Court",
  city: "Tampa",
  state: "FL",
  /** Optional contractor license number; leave empty to hide on hero */
  licenseNumber: "",
  /** Public logo; leave empty to show text wordmark in header/footer */
  logoUrl: "",

  // ── Branding (Primary #0F172A, Secondary #94A3B8, Tertiary #F59E0B, Neutral #1E293B) ──
  palette: {
    deep: "#020617",
    surface: "#0F172A",
    panel: "#1E293B",
    panel2: "#334155",
    border: "rgba(148, 163, 184, 0.22)",
    accent: "#F59E0B",
    accent2: "#94A3B8",
    gold: "#FBBF24",
    text: "#F8FAFC",
    muted: "rgba(148, 163, 184, 0.9)",
  },

  // ── Cloudflare R2 ──────────────────────────────────────────
  r2Folder: "irongatesvcs",

  // ── SEO ────────────────────────────────────────────────────
  seoTitle: "IronGate Services LLC | Handyman, Drone & Real Estate Support | Tampa, Brandon & Riverview",
  seoDescription:
    "Your local partner for property excellence in Tampa, Brandon, and Riverview. Handyman repairs and installs, drone inspections and photography, and real estate maintenance—in clear communication with Zachary Philemon.",
  seoKeywords:
    "handyman Tampa, TV mounting Brandon, drywall repair Riverview, pressure washing Tampa Bay, drone roof inspection Florida, real estate turnover maintenance Tampa",

  // ── Navigation ─────────────────────────────────────────────
  navLinks: [
    { label: "Services", href: "/#services" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "About", href: "/#about" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Contact", href: "/contact" },
  ],

  // ── Hero Section ───────────────────────────────────────────
  hero: {
    heading: "Handyman, Drone & Real Estate Support",
    subheading:
      "Your local partner for property excellence. Whether you need a dependable repair, aerial documentation, or investor-ready turnover work, IronGate Services LLC combines craftsmanship with modern drone technology across Tampa, Brandon, and Riverview.",
    ctaText: "Call for a Free Quote",
    image: `${IG}/drone-2.avif`,
    badges: ["Handyman & Repairs", "Drone Inspections & Media", "Real Estate Support"],
    trustItems: [
      { strong: "4.9/5 Rating", rest: "on Google & Facebook" },
      { strong: "Locally Owned", rest: "Zachary Philemon, Tampa market" },
      { strong: "Built on Quality", rest: "Long-term solutions, not quick patches" },
      { strong: "Clear Communication", rest: "Transparent quotes & updates" },
      { strong: "Mon–Sat", rest: "7:00 AM – 7:30 PM" },
    ],
  },

  hoursLine: "Mon–Sat: 7:00 AM – 7:30 PM · Sunday: Closed",

  // ── Services ───────────────────────────────────────────────
  services: [
    {
      slug: "handyman-services",
      title: "Handyman Services",
      shortDesc: "Repairs, installations, and maintenance you can count on.",
      fullDesc:
        "Professional maintenance to keep your home or rental in peak condition. From TV mounting and ceiling fans to drywall repair, windows and doors, and pressure washing—we focus on workmanship you can see and fixes that last. Florida humidity and daily wear create small problems fast; we catch them early so they do not become expensive surprises.",
      image: `${IG}/modern_bathroom_with_glass_shower_and_tools_on_the_sink_ (1).avif`,
      icon: "HM",
      highlights: [
        "TV mounting, fans, fixtures, and trim details",
        "Drywall repair and interior touch-ups",
        "Windows, doors, and pressure washing",
      ],
    },
    {
      slug: "drone-services",
      title: "Drone Services",
      shortDesc: "Aerial inspections, property shots, and progress reports.",
      fullDesc:
        "Cutting-edge aerial views for inspections and marketing. Drone passes can reveal roof and structure issues before they become leaks—especially valuable for Florida homeowners and insurance documentation. We also capture real estate photography and construction progress so you always have a clear record from above.",
      image: `${IG}/close_up_of_three_white_bathroom_light_fixtures_above_a_mirror_.avif`,
      icon: "DR",
      highlights: [
        "Roof and structure inspection flights",
        "Listing and marketing imagery",
        "Construction progress documentation",
      ],
    },
    {
      slug: "real-estate-services",
      title: "Real Estate Services",
      shortDesc: "Property maintenance, improvements, and investment support.",
      fullDesc:
        "Specialized services to protect and enhance your investment. Turnover maintenance, ROI-focused improvements, and property preservation help landlords and investors maximize returns, reduce vacancy, and keep units rent-ready without guesswork.",
      image: `${IG}/wall_mounted_light_fixture_with_textured_wall_background_ (1).avif`,
      icon: "RE",
      highlights: [
        "Turnover maintenance and make-ready work",
        "Improvements aimed at rental ROI",
        "Preservation and recurring property care",
      ],
    },
  ],

  // ── About Section ──────────────────────────────────────────
  about: {
    heading: "Local Partner. Modern Tools. Neighborly Service.",
    body:
      "IronGate Services LLC is built for homeowners who want dependable repairs and for investors who need a responsive team on the ground. We combine traditional handyman craftsmanship with drone technology so you see the full picture—then we execute with integrity and speed.",
    image: `${IG}/three_white_glass_light_fixtures_mounted_on_a_textured_wall_above_a_mirror_ (1).avif`,
    facts: [
      { label: "Owner-Operator", value: "Zachary Philemon" },
      { label: "Core Services", value: "3 Pillars" },
      { label: "Service Area", value: "Tampa Metro" },
      { label: "Sunday", value: "Closed" },
    ],
  },

  owner: {
    name: "Zachary Philemon",
    role: "Owner, IronGate Services LLC",
    /** Optional headshot URL (full URL or R2 path); omit or leave empty to hide avatar in forms */
    headshot: "",
    quote:
      "We do not just fix things—we build long-term solutions that save you money and protect your investment.",
    story:
      "Zachary Philemon leads IronGate Services LLC with a neighborly approach to the Tampa market. The focus is simple: quality work, honest scopes, and communication you can rely on—whether it is a single repair, an aerial inspection, or a full turnover for your rental portfolio.",
  },

  // ── Reviews ────────────────────────────────────────────────
  reviews: [
    {
      name: "Chris P.",
      city: "Brandon, FL",
      stars: 5,
      text: "Zach mounted two TVs and swapped out old fixtures. Clean work, on time, and he explained everything clearly.",
    },
    {
      name: "Renee L.",
      city: "Riverview, FL",
      stars: 5,
      text: "We used the drone package before listing. The photos helped the listing stand out and the roof overview gave us peace of mind.",
    },
    {
      name: "Jordan M.",
      city: "Tampa, FL",
      stars: 5,
      text: "Turnover between tenants was painless. Drywall touch-ups, pressure washing, and small repairs—all coordinated in one call.",
    },
    {
      name: "Alex T.",
      city: "Valrico, FL",
      stars: 5,
      text: "No ghosting, no surprise fees. Quote matched the invoice and the bathroom refresh looks sharp.",
    },
    {
      name: "Samira K.",
      city: "Tampa, FL",
      stars: 5,
      text: "Great communication from first message to walkthrough. Exactly what we needed on a tight timeline.",
    },
    {
      name: "Derek W.",
      city: "Brandon, FL",
      stars: 5,
      text: "Professional, detail-oriented, and easy to work with. We will use IronGate again for our rental prep.",
    },
  ],

  // ── Service Areas ──────────────────────────────────────────
  serviceAreas: ["Tampa", "Brandon", "Riverview", "Valrico", "Apollo Beach", "Seffner"],

  serviceAreaRegions: [
    {
      slug: "tampa-brandon-riverview",
      title: "Tampa, Brandon & Riverview",
      blurb: "Handyman, drone, and real estate support focused on Hillsborough County’s east and central communities.",
      locations: ["Tampa", "Brandon", "Riverview", "Valrico", "Seffner", "Apollo Beach"],
    },
  ],

  map: {
    title: "Find Us on Google Maps",
    subtitle: "7227 Sweet Alyssum Court, Tampa — serving Tampa, Brandon, Riverview, and nearby areas.",
    image: `${IG}/modern_bathroom_with_glass_shower_and_tools_on_the_sink_ (1).avif`,
    link: "https://www.google.com/maps/search/?api=1&query=7227+Sweet+Alyssum+Court+Tampa+FL",
  },

  // ── Footer ─────────────────────────────────────────────────
  footerText: "© 2026 IronGate Services LLC. Licensed & Insured.",

  // ── Social (optional — set to empty string to hide) ────────
  social: {
    facebook: "",
    instagram: "",
    nextdoor: "",
  },
};

export type SiteConfig = typeof SITE;
