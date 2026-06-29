# Plan: Mkulima Soko Tanzania App

A comprehensive farmer's market application for the Tanzanian market, featuring crop management, market data visualization, and transportation services.

## Scope Summary
- **Soko (Marketplace):** Browse and buy agricultural products.
- **Mkulima (Farmer Dashboard):** Add crops, view price trends (graphs) by region, and manage listings.
- **Usafirishaji (Logistics):** Connect farmers with transport services.
- **Market Data:** A simulated database of market prices across Tanzanian regions.
- **Language:** Primarily Swahili (as requested).

## Non-Goals
- Real-time payment gateway integration (will use simulated checkout).
- Real-time GPS tracking for transport (will use static status updates).
- Backend database (all data will be persisted in `localStorage` for this session).

## Assumptions & Open Questions
- **Assumption:** The app should target mobile-first users given the Tanzanian market context.
- **Question:** Are there specific crops to prioritize? (Initial set: Mahindi, Mpunga, Maharage, Viazi).

## Affected Areas
- **Frontend:** React with Tailwind CSS, Lucide icons for UI, Recharts for data visualization.
- **State Management:** React hooks and `localStorage` for persistence.
- **Components:** Shadcn UI for cards, forms, and tables.

## Phases

### Phase 1: Foundation & Navigation
- Set up core routing (Soko, Farmer Dashboard, Logistics).
- Implement a bottom navigation bar for mobile-friendly access.
- **Owner:** frontend_engineer

### Phase 2: Marketplace (Sehemu ya Manunuzi)
- Create product listing cards with images, prices, and locations.
- Implement search and category filters (e.g., Nafaka, Mbogamboga).
- **Owner:** frontend_engineer

### Phase 3: Farmer Dashboard & Graphs (Sehemu ya Mkulima)
- Form to add new crops (Zao, Kiasi, Bei, Mkoa).
- Market price visualization using `recharts` (Price trends per region).
- List of "My Listings" for the farmer.
- **Owner:** frontend_engineer

### Phase 4: Logistics & Market Database (Usafirishaji & Data ya Soko)
- Logistics request form and list of available transporters.
- "Soko Data" page showing current average prices across major Tanzanian regions (Dar, Arusha, Mbeya, etc.).
- **Owner:** frontend_engineer

### Phase 5: Refinement & Swahili Localization
- Ensure all labels and messages are in clear Swahili.
- Final UI polish and responsiveness check.
- **Owner:** quick_fix_engineer

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the core application structure, marketplace, and farmer dashboard.
2. quick_fix_engineer — Finalize Swahili translations and CSS tweaks.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1, 2, 3, 4
- **Scope:** 
    - Install `lucide-react`, `recharts`, and `clsx` if not present.
    - Create a mobile-first layout with `src/components/Navigation.tsx`.
    - Build `Marketplace.tsx` for buying.
    - Build `FarmerDashboard.tsx` with a "Post Crop" form and a Price Chart using `recharts`.
    - Build `Logistics.tsx` for transport services.
    - Use `localStorage` to save user-added crops.
- **Files:** `src/App.tsx`, `src/components/*`, `src/pages/*`
- **Depends on:** none
- **Acceptance criteria:** App has 3 distinct tabs; user can "add a crop"; a graph displays market prices; marketplace shows items.

### 2. quick_fix_engineer
- **Phases:** 5
- **Scope:** 
    - Audit all English strings and convert to Swahili (e.g., "Add Crop" -> "Ongeza Zao").
    - Fix any padding/margin issues on mobile views.
    - Ensure the "Gebeya" branding or placeholder images look professional.
- **Files:** All modified files in `src/`
- **Depends on:** frontend_engineer
- **Acceptance criteria:** 100% Swahili UI; no broken layouts on small screens.
