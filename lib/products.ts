export type Product = {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  tag: string;
  format: string;
  summary: string;
  description: string;
  includes: string[];
  bestFor: string;
  tone: string;
};

export const products: Product[] = [
  {
    slug: "weekly-operator-os",
    name: "Weekly Operator OS",
    price: 47,
    tag: "Best seller",
    format: "Notion + printable PDF",
    summary: "A one-page week that tells you what actually matters by Thursday.",
    description:
      "Most planners assume you have a staff. This one assumes you are the staff. The Weekly Operator OS is a tight system for solo operators who ship work, invoice clients, and still have to buy groceries.",
    includes: [
      "Monday load-in page (90 minutes, max)",
      "Daily constraint board: 3 moves, 1 bottleneck",
      "Cash and invoice pulse",
      "Friday close: what shipped, what slipped, what to cut",
      "Printable desk sheet + Notion workspace",
    ],
    bestFor: "Freelancers, studio owners, one-person shops",
    tone: "from-olive",
  },
  {
    slug: "client-pipeline",
    name: "Client Pipeline",
    price: 67,
    tag: "High intent",
    format: "Notion + Google Sheets",
    summary: "See every lead, every stuck proposal, and every unpaid invoice on one board.",
    description:
      "Pipeline tools built for sales teams hide the real work of a small practice. Client Pipeline is a quiet board that makes the money visible.",
    includes: [
      "Lead to scoped to live to paid stages",
      "Follow-up cadence",
      "Proposal and scope checklist",
      "Aging invoices view",
      "Simple forecast: next 30 / 60 / 90 days",
    ],
    bestFor: "Agencies under 8 people, consultants, studios",
    tone: "from-rust",
  },
  {
    slug: "launch-week-kit",
    name: "Launch Week Kit",
    price: 97,
    tag: "New",
    format: "Notion + checklists + email drafts",
    summary: "A 7-day launch that does not require a marketing department.",
    description:
      "Launch Week Kit is the exact order of operations for shipping a product without burning the week before it.",
    includes: [
      "T-minus 14 / 7 / 3 / 1 checklists",
      "Email and social drafts",
      "Waitlist capture page outline",
      "Day-of run of show",
      "Post-launch 10-day follow-through",
    ],
    bestFor: "Digital product makers launching an offer",
    tone: "from-brass",
  },
  {
    slug: "cash-calendar",
    name: "Cash Calendar",
    price: 37,
    tag: "Starter",
    format: "Google Sheets + PDF",
    summary: "Know whether you can pay yourself before the month starts.",
    description:
      "A 13-week picture of money in, money out, and the week you will be tight.",
    includes: [
      "13-week cash view",
      "Tax set-aside line",
      "Owner pay planned as a bill",
      "One-page month close",
    ],
    bestFor: "Anyone surprised by their own bank account",
    tone: "from-ink",
  },
  {
    slug: "content-engine",
    name: "90-Day Content Engine",
    price: 79,
    tag: "Organic growth",
    format: "Notion + Pinterest + short-form map",
    summary: "Ninety days of useful posts mapped to the products they should sell.",
    description:
      "This engine maps search questions, Pinterest pins, and short videos to the exact product each piece should sell.",
    includes: [
      "90-day calendar with one job per piece",
      "Pin and Reel formulas",
      "SEO briefs for 12 purchase-intent articles",
      "Repurpose ladder",
    ],
    bestFor: "Stores growing without ads",
    tone: "from-olive",
  },
  {
    slug: "operator-stack",
    name: "The Operator Stack",
    price: 197,
    compareAt: 327,
    tag: "Bundle",
    format: "Everything, one workspace",
    summary: "All five systems in one workspace.",
    description:
      "Weekly OS, pipeline, launch kit, cash calendar, and content engine linked together.",
    includes: [
      "All five products",
      "Single Notion home",
      "90-minute setup guide",
      "Lifetime file updates",
    ],
    bestFor: "Operators done collecting templates",
    tone: "from-rust",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const posts = [
  {
    slug: "zero-ad-math",
    title: "The math of $30k months with no ads",
    excerpt: "You do not need a viral store. You need 450 honest sales and a list that buys again.",
    body: "A $30,000 month with zero ad spend is arithmetic. If your average order is $67, you need about 448 sales. At a 3% conversion rate that is roughly 15,000 visits. Split it: search, Pinterest, email, and people who already trust you.\n\nDigital products are the only Shopify model where this math is kind. No inventory, no returns, no freight.\n\nWhat does not work: a generic dropshipping catalog. What does work: one narrow buyer, five products that stack, and a year of pages that answer questions people type before they buy.",
  },
  {
    slug: "pinterest-is-the-aisle",
    title: "Pinterest is still the aisle",
    excerpt: "People open Pinterest to find a thing to use. That is a store, not a feed.",
    body: "TikTok is a show. Pinterest is a filing cabinet. For digital products that difference is the business. Pins of the product in use, linked to the product page, compound for months.\n\nDo twenty pins a week for a quarter. Most will do nothing. Four will compound.",
  },
  {
    slug: "ai-search-citations",
    title: "Get cited by AI shopping, not just ranked by Google",
    excerpt: "AI-referred buyers often convert higher than classic search.",
    body: "Write product pages like a person who has used the thing. Add Product schema. Keep an llms.txt that lists what you sell. Publish original operator advice, not thin roundups.",
  },
];
