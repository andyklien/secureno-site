export const site = {
  name: "SecuReno",
  tagline: "Your vision. Beautifully built.",
  ctaPrimary: "Start Your Renovation",
  ctaSecondary: "Explore Our Work",
  phoneDisplay: "(613) 555-0142",
  phoneHref: "tel:+16135550142",
  email: "hello@securereno.ca",
  city: "Ottawa, ON",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/kitchen-renovations", label: "Kitchen Renovations" },
  { href: "/bathroom-renovations", label: "Bathroom Renovations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const serviceAreas = [
  "Ottawa",
  "Kanata",
  "Barrhaven",
  "Nepean",
  "Orleans",
  "Stittsville",
  "Westboro",
  "The Glebe",
];

// "Trusted professional network" — what SecuReno verifies before a
// professional is introduced to a homeowner.
export const trustBadges = [
  {
    icon: "shield" as const,
    title: "Licensing Verified",
    description: "Every professional in our network is licensed before we make an introduction.",
  },
  {
    icon: "hardhat" as const,
    title: "Insurance Verified",
    description: "We confirm active liability and WSIB coverage for every renovation pro we work with.",
  },
  {
    icon: "award" as const,
    title: "5-Year Workmanship Guarantee",
    description: "Coordinated and enforced by SecuReno on every project in our network, start to finish.",
  },
  {
    icon: "filecheck" as const,
    title: "Fixed-Price Proposals",
    description: "The quote you sign with your matched professional is the number you pay.",
  },
];

// "Why choose us" — the 6 reasons a homeowner picks SecuReno over
// searching for a contractor directly.
export const whyChooseUs = [
  {
    title: "A curated network, not a directory",
    description: "We match you with two or three vetted professionals suited to your project, not a wall of listings to sort through yourself.",
  },
  {
    title: "One point of contact",
    description: "A single SecuReno coordinator stays with your project from first call to final walkthrough.",
  },
  {
    title: "Honest budget ranges up front",
    description: "We talk real numbers early, before you fall in love with a plan you can't afford.",
  },
  {
    title: "Photo-documented progress",
    description: "Every milestone is logged with photos, so you always know where the project stands.",
  },
  {
    title: "Ottawa-specific expertise",
    description: "Our network understands local permitting, older housing stock, and Ottawa winters.",
  },
  {
    title: "No obligation to proceed",
    description: "Your first consultation and proposal are free. Walk away at any point with no pressure.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Tell Us About Your Project",
    description:
      "Share your renovation vision, rough budget range, and timeline through a short project brief.",
  },
  {
    number: "02",
    title: "Free In-Home Consultation",
    description:
      "We walk your space with you, talk through goals and constraints, and take precise measurements.",
  },
  {
    number: "03",
    title: "Meet Your Matched Professional",
    description:
      "We introduce you to a vetted renovation professional from our network suited to your project and style.",
  },
  {
    number: "04",
    title: "Fixed-Price Proposal",
    description:
      "You get a detailed design plan and one locked-in price before any work begins — no allowances that balloon later.",
  },
  {
    number: "05",
    title: "Coordinated Build & Handover",
    description:
      "SecuReno stays involved through the build, ending in a final walkthrough backed by a 5-year workmanship guarantee.",
  },
];

export const kitchenFeatures = [
  {
    title: "Custom Cabinetry",
    description: "Framed or frameless cabinetry built to your layout, finished on-site by hand.",
  },
  {
    title: "Countertops & Islands",
    description: "Quartz, granite, and butcher block — templated and installed to a tight tolerance.",
  },
  {
    title: "Lighting & Electrical",
    description: "Under-cabinet, pendant, and pot lighting planned and wired by licensed electricians.",
  },
  {
    title: "Flooring",
    description: "Hardwood, engineered, tile, or LVP — matched or replaced end to end.",
  },
  {
    title: "Plumbing Coordination",
    description: "Sink, gas line, and appliance rough-ins handled by licensed plumbers.",
  },
  {
    title: "Appliance Integration",
    description: "Built-in and panel-ready appliances fitted flush to your new cabinetry.",
  },
];

export const bathroomFeatures = [
  {
    title: "Walk-In & Curbless Showers",
    description: "Fully tiled glass showers with proper slope and waterproofing, built to last.",
  },
  {
    title: "Vanities & Storage",
    description: "Custom or semi-custom vanities sized to fit tight or generous footprints alike.",
  },
  {
    title: "Soaker Tubs",
    description: "Freestanding and drop-in tubs, plumbed and finished for a spa-level result.",
  },
  {
    title: "Tile Work",
    description: "Floor-to-ceiling tile, mosaic accents, and heated floors installed by specialists.",
  },
  {
    title: "Waterproofing & Ventilation",
    description: "Code-compliant membranes and exhaust so the room performs for decades, not years.",
  },
  {
    title: "Fixtures & Lighting",
    description: "Faucets, vanity lighting, and exhaust fans selected and installed to match your finish.",
  },
];

export const generalFaqs = [
  {
    question: "How does the matching process work?",
    answer:
      "You tell us about your project through a short brief. We review it, then introduce you to one to three vetted professionals from our network whose experience fits your project and style.",
  },
  {
    question: "Is there a fee to use SecuReno?",
    answer:
      "No. Consultations and proposals are free for homeowners. SecuReno is compensated by the professionals in our network, not by the homeowners we match.",
  },
  {
    question: "What if I don't like my matched professional?",
    answer:
      "You're not obligated to proceed with anyone we introduce. If it's not the right fit, tell your coordinator and we'll suggest another match from the network.",
  },
  {
    question: "Do you only work on kitchens and bathrooms?",
    answer:
      "Right now, yes — kitchen and bathroom renovations are our focus, which lets us vet our network specifically for that work rather than spreading thin across every trade.",
  },
];

export const kitchenFaqs = [
  {
    question: "How long does a kitchen renovation take?",
    answer:
      "Most full kitchen renovations in Ottawa take 4–7 weeks from demolition to final walkthrough, depending on scope and whether plumbing or electrical is moving. Your matched professional will give you a specific schedule in your fixed-price proposal.",
  },
  {
    question: "Can I still use my kitchen during the renovation?",
    answer:
      "Once demolition starts, no — but your project lead will help you set up a temporary kitchenette elsewhere in your home and sequence the work to minimize downtime.",
  },
  {
    question: "Do you handle permits?",
    answer:
      "Yes. SecuReno coordinates permitting with the City of Ottawa on your behalf and tracks inspections alongside your matched professional as part of the project.",
  },
  {
    question: "What's included in the fixed-price proposal?",
    answer:
      "Labour, materials, permits where required, and disposal are all itemized before you sign. The only things that change the price are scope changes you approve in writing.",
  },
];

export const bathroomFaqs = [
  {
    question: "How long does a bathroom renovation take?",
    answer:
      "A full bathroom gut renovation typically runs 2–4 weeks. Powder rooms and smaller refreshes can be faster — you'll get an exact timeline in your proposal.",
  },
  {
    question: "Will you address water damage or mould if you find it?",
    answer:
      "Yes. Your matched professional opens the walls before quoting the finish work whenever there's a risk of hidden damage, so remediation is priced upfront rather than discovered mid-project.",
  },
  {
    question: "Can you add a second bathroom or convert a powder room?",
    answer:
      "Yes — layout changes, plumbing relocation, and new ensuite builds are all within scope. We'll assess feasibility during your free consultation.",
  },
  {
    question: "Is heated flooring an option?",
    answer:
      "Yes, in-floor heating is one of the most requested upgrades and can be added to almost any tile floor renovation.",
  },
];
