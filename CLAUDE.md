@AGENTS.md

# SecuReno — Project Context for Claude Code

## What This Project Is
SecuReno is a premium Canadian residential renovation company based in Ottawa, Ontario. The business generates renovation leads, qualifies homeowners, and connects them with a trusted network of skilled renovation professionals who execute the work.

Current focus: **Kitchen renovations** and **Bathroom renovations** only.
Do NOT build or reference the HomeCare membership model yet.

## Core Positioning
- Tagline: **Your vision. Beautifully built.**
- Primary CTA everywhere: **Start Your Renovation**
- Secondary CTA: **Explore Our Work**
- Feel: premium architecture studio meets modern interior design company
- Do NOT position on price. Do NOT use words like cheap, budget, lowest price.
- Compete on: quality, craftsmanship, professionalism, coordination, trust.

## Target Customer
Ottawa homeowners spending $15,000–$75,000+ on kitchen or bathroom renovations who want a professional, organized experience without managing contractors themselves.

## Geography
Ottawa and surrounding communities: Orleans, Kanata, Stittsville, Barrhaven, Nepean, Gloucester, Westboro, Downtown Ottawa.
Build so additional service areas can be added later. Do NOT claim Toronto yet.

## Tech Stack
- Next.js 16.3.0 with React 19
- TypeScript strict mode
- Tailwind CSS 4
- Lucide React for icons
- Unsplash for images (already whitelisted in next.config.ts)

## Design Direction
- Palette: warm white, off-white, charcoal, soft grey, one restrained gold accent
- Typography: large editorial, generous whitespace, strong hierarchy
- Motion: cinematic scroll storytelling — sections slide up from below, text reveals upward line by line with stagger, parallax on hero images, sticky scroll for process section
- Every section is 100vh full viewport
- Scroll snapping between major sections
- Mobile first — sticky CTA bar on mobile
- Do NOT use generic contractor aesthetics, clip art, excessive icons, or cluttered layouts

## Skills to Load on Every Session
Always load and follow these skills at the start of every task:
- high-end-visual-design
- design-taste-frontend
- redesign-existing-projects

If working on a specific UI component also load:
- stitch-design-taste
- minimalist-ui (for clean sections)
- industrial-brutalist-ui (only if exploring bold direction)

## Image Strategy
Use Unsplash API (already configured). Never reuse the same photo ID twice. Use these search terms:
- Hero: "modern kitchen white cabinets" or "luxury kitchen renovation"
- Bathroom hero: "modern bathroom spa white"
- Gallery kitchens: "kitchen remodel open concept"
- Gallery bathrooms: "bathroom renovation freestanding tub"
- Before photos: "outdated kitchen old cabinets"
- After photos: "modern kitchen transformation"
- Process/trust sections: "renovation professionals working"

## Homepage Section Order
1. Navigation (logo left, links right, CTA button always visible)
2. Hero — "Your vision. Beautifully built."
3. The renovation problem section
4. Kitchen and bathroom service cards
5. Our 5-step process (sticky scroll sequence)
6. Trusted professional network
7. Quality philosophy
8. Project gallery (categories: All, Kitchens, Bathrooms, Completed)
9. Why choose us (6 reasons)
10. Budget education section
11. Testimonials (placeholder, clearly labeled)
12. FAQ
13. Consultation CTA
14. Footer

## Lead Form Fields
First name, last name, email, phone, postal code, property type, renovation type (Kitchen/Bathroom/Both), approximate budget (ranges), desired timeline, project description, photo upload, optional consultation date.
Build form so it can connect to a CRM later — do not hardcode.

## Content Rules
- Do not invent fake testimonials or fake customer names
- Do not fabricate exact pricing — use configurable ranges only
- Do not make false claims about contractor certifications
- Placeholder content must be clearly labeled and easy to replace
- All FAQ answers should be honest and editable

## Emotional Goal for the Visitor
1. "These people understand renovations."
2. "They have access to good professionals."
3. "They seem organized."
4. "I trust them enough to share my project."
5. "I want to talk to them about my renovation."

## Future Architecture Notes
- Structure lead data for eventual CRM integration
- Customer journey ends at potential HomeCare membership (do not promote yet)
- Build service area system so Toronto can be added later
- Gallery component must support: project name, location, type, scope, before/after photos, optional budget, optional timeline, optional testimonial
