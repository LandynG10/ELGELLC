// Everything a visitor needs to say yes: what we sell, what it costs, the
// guarantee and the answers to the usual questions. Prices live here (not
// in the components) so they can change without touching any layout.

export const PACKAGES = [
  {
    id: "launch",
    name: "Launch Site",
    price: "from $750",
    timeline: "Live in about a week",
    pitch: "A fast, mobile-first website that gets your phone ringing from Google.",
    includes: [
      "Up to 5 pages, written for you",
      "Click-to-call, map, hours and reviews",
      "Your domain, hosting and SSL set up",
      "Google Business Profile tune-up",
    ],
  },
  {
    id: "booking",
    name: "Booking Site",
    price: "from $1,500",
    timeline: "Live in about 2 weeks",
    pitch: "Customers book and pay online, so you stop losing jobs to phone tag.",
    includes: [
      "Everything in Launch Site",
      "Online booking with your real availability",
      "Deposits or full payment at checkout",
      "Text and email reminders that cut no-shows",
    ],
    featured: true,
  },
  {
    id: "ai",
    name: "AI Receptionist",
    price: "from $500 setup + $149/mo",
    timeline: "Live in about a week",
    pitch: "An AI phone agent that answers every call, day or night, and books the job.",
    includes: [
      "Answers calls 24/7 in a natural voice",
      "Answers FAQs, takes details, books appointments",
      "Texts back every missed call within seconds",
      "Call summaries sent straight to you",
    ],
  },
  {
    id: "custom",
    name: "Custom Software",
    price: "Quoted per project",
    timeline: "Scoped together",
    pitch: "CRMs, internal tools, apps and AI agents built around how you work.",
    includes: [
      "Custom CRMs and client portals",
      "Web and mobile apps",
      "Workflow automation and AI agents",
      "Built and supported by the same team",
    ],
  },
];

export const CARE_PLAN = {
  price: "$79/mo",
  copy: "Optional care plan for any site: hosting, security updates, small edits each month and a real person to text when something needs changing.",
};

export const GUARANTEE = [
  {
    title: "See it before you pay",
    copy: "We build a free preview of your new site first. You only put down a deposit once you've seen it and like it.",
  },
  {
    title: "Don't love it? You owe nothing.",
    copy: "If the preview isn't right for you, walk away. No invoice, no hard feelings.",
  },
  {
    title: "You own everything",
    copy: "Your domain, your content, your accounts. If you ever leave, it all goes with you.",
  },
];

export const FAQ = [
  {
    q: "How much does a website cost?",
    a: "Most local business sites land between $750 and $1,500 one-time, depending on pages and features like online booking. You get a fixed quote before anything starts, never an hourly bill.",
  },
  {
    q: "How fast can it be live?",
    a: "Your free preview is usually ready in 2 business days. Once you approve it, most sites go live within a week.",
  },
  {
    q: "What do I need to do?",
    a: "Very little. A 15-minute call about your business, a few photos if you have them, and a quick look at the preview. We write the words and handle all the setup.",
  },
  {
    q: "What does the AI receptionist actually do?",
    a: "It answers your business line when you can't, in a natural voice. It answers common questions, collects the caller's details, books appointments on your calendar and sends you a summary. Every missed call also gets an instant text back so the lead doesn't go to a competitor.",
  },
  {
    q: "Do I have to pay monthly?",
    a: "No. Websites are a one-time price. The care plan is optional. The AI receptionist has a monthly fee because it runs on phone and AI services every month.",
  },
  {
    q: "I already have a website. Can you redo it?",
    a: "Yes. We can rebuild it, add online booking, or fix what's broken, and we'll show you a preview before you commit.",
  },
];

export const PROJECT_TYPES = [...PACKAGES.map((p) => p.name), "Not sure yet"];
