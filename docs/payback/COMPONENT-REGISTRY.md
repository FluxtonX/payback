# PAYBACK SITE — COMPONENT REGISTRY

Strict catalog of reusable components.
**RULE**: Always check this registry before creating or editing UI components. Extend rather than duplicate.

---

## 1. Global / Shared Core Components

| Component ID | Name | Path | Props / Variants | Used On |
| :--- | :--- | :--- | :--- | :--- |
| **C-001** | `Navbar` | `components/layout/Navbar.tsx` | `variant: 'dark' \| 'transparent' \| 'white'`, `withCookies?: boolean` | All Pages |
| **C-002** | `Footer` | `components/layout/Footer.tsx` | - | All Pages |
| **C-003** | `Button` | `components/ui/Button.tsx` | `variant: 'yellow' \| 'blue' \| 'white' \| 'link' \| 'header'`, `fullWidth?: boolean`, `size?: 'sm' \| 'md' \| 'lg'` | All Pages |
| **C-004** | `CookiesPopup`| `components/common/CookiesPopup.tsx` | `onAccept: () => void` | All Pages (Banner) |
| **C-005** | `AppLayout` | `components/layout/AppLayout.tsx` | `children: React.ReactNode` | All Pages |
| **C-006** | `DisclaimerSection`| `components/common/DisclaimerSection.tsx` | - | All Pages (Above Footer) |

---

## 2. Homepage & Reusable Content Components

| Component ID | Name | Path | Props / Description | Used On |
| :--- | :--- | :--- | :--- | :--- |
| **C-007** | `HeroSection` | `components/home/HeroSection.tsx` | Hero banner with claim title, value proposition, and intake form | Home |
| **C-008** | `IntakeForm` | `components/home/IntakeForm.tsx` | First-edition & second-edition scam case evaluation form | Home, Contact |
| **C-009** | `PartnersBar` | `components/home/PartnersBar.tsx` | Official partner logos, trust ratings, media mentions | Home |
| **C-010** | `OfferInfoSection` | `components/home/OfferInfoSection.tsx` | "What you should know about our offer" explanation section | Home |
| **C-011** | `InvestigationPackages` | `components/home/InvestigationPackages.tsx` | Pricing / package cards (Fraud Investigation, Crypto Tracing, Full Support) | Home, Services |
| **C-012** | `PackageCard` | `components/cards/PackageCard.tsx` | Reusable package card with features checklist, price, and CTA | Home, Services |
| **C-013** | `HowItWorksSection` | `components/home/HowItWorksSection.tsx` | 4-step investigation workflow (Review, Evidence, Report, Retrieval) | Home |
| **C-014** | `StepCard` | `components/cards/StepCard.tsx` | Step number, icon, title, description card | Home, How It Works |
| **C-015** | `WhyWorkSection` | `components/home/WhyWorkSection.tsx` | Why work with us: experience, stats, success rates | Home |
| **C-016** | `GuaranteeBlock` | `components/home/GuaranteeBlock.tsx` | "Your money back guarantee" trust banner | Home |
| **C-017** | `CopycatsBlock` | `components/home/CopycatsBlock.tsx` | "Beware of copycats & imposters" safety banner | Home |
| **C-018** | `LetsTalkCTA` | `components/common/LetsTalkCTA.tsx` | Reusable "Let's talk" consultation banner | Home, Services |
| **C-019** | `VideoReviewsSection` | `components/home/VideoReviewsSection.tsx` | Customer video testimonials carousel/grid with play triggers | Home, Testimonials |
| **C-020** | `ScamTypesSection` | `components/home/ScamTypesSection.tsx` | Grid of scam categories (Binary options, Crypto, Forex, Phishing, etc.) | Home, Services |
| **C-021** | `ScamCategoryCard` | `components/cards/ScamCategoryCard.tsx` | Category icon, name, description, link | Home, Services |
| **C-022** | `FaqAccordionSection` | `components/home/FaqAccordionSection.tsx` | Expandable Q&A accordion items | Home, FAQ |
| **C-023** | `AccordionItem` | `components/ui/AccordionItem.tsx` | Title, chevron, animated expandable content | Home, FAQ |
| **C-024** | `LatestArticlesSection`| `components/home/LatestArticlesSection.tsx` | Grid of 3 latest fraud analysis blog posts | Home, Blog |
| **C-025** | `ArticleCard` | `components/cards/ArticleCard.tsx` | Thumbnail, date, title, excerpt, read more link | Home, Blog |
| **C-026** | `ContactSection` | `components/home/ContactSection.tsx` | Bottom direct contact intake form | Home, Contact |
| **C-027** | `PbIsBackStatement` | `components/home/PbIsBackStatement.tsx` | Official statement section on DOJ/FBI updates | Home |
| **C-028** | `ConsultationModal` | `components/modals/ConsultationModal.tsx` | Multi-step radio popup flow for case evaluation | Global / Triggered |
| **C-029** | `WarningModal` | `components/modals/WarningModal.tsx` | Fraud alert popup banner | Global / Triggered |

---

## 3. Component Hierarchy Rule
```text
AppLayout
├── CookiesPopup (conditional)
├── Navbar (fixed)
│   ├── Logo (LOGO-001)
│   ├── DesktopNav / Dropdowns
│   ├── Actions (WhatsApp, "Get your money back" Button, Login)
│   └── MobileDrawer (hamburger triggered)
├── Page Content (e.g. Home)
│   ├── HeroSection
│   │   └── IntakeForm
│   ├── PartnersBar
│   ├── OfferInfoSection
│   ├── InvestigationPackages
│   │   └── PackageCard x 4
│   ├── HowItWorksSection
│   │   └── StepCard x 4
│   ├── WhyWorkSection
│   ├── GuaranteeBlock
│   ├── CopycatsBlock
│   ├── LetsTalkCTA
│   ├── VideoReviewsSection
│   ├── ScamTypesSection
│   │   └── ScamCategoryCard x 6+
│   ├── FaqAccordionSection
│   │   └── AccordionItem x 4
│   ├── LatestArticlesSection
│   │   └── ArticleCard x 3
│   ├── ContactSection
│   └── PbIsBackStatement
├── DisclaimerSection
└── Footer
    ├── Contact Columns
    ├── WhatsApp Button
    └── Copyright & Legal Links
```
