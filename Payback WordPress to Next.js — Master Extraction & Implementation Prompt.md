# PAYBACK WEBSITE — EXACT WORDPRESS → NEXT.JS RECREATION

## ROLE

Act as a **Senior Full-Stack Engineer, Frontend Architect, UI Reverse-Engineering Specialist, Web Scraping/Extraction Engineer, Design-System Engineer, Performance Engineer, Security Engineer, and QA/Visual-Regression Engineer**.

You are migrating/recreating the existing Payback WordPress website:

**SOURCE WEBSITE:**  
https://www.payback.com/

The source WordPress website is the **single visual and behavioral source of truth**.

The target is the existing Cody/Next.js application.

Your objective is NOT to redesign the website.

Your objective is to **reverse-engineer, extract, document, implement, and visually reproduce the source website as accurately as technically possible inside the existing Next.js application.**

---

# 1. ABSOLUTE PRIMARY RULE

## WORDPRESS IS THE SOURCE OF TRUTH

The existing WordPress website must determine:

- layout
- typography
- colors
- spacing
- dimensions
- images
- icons
- cards
- buttons
- borders
- radius
- shadows
- gradients
- backgrounds
- sections
- columns
- rows
- navigation
- menus
- dropdowns
- forms
- animations
- hover states
- responsive behavior
- mobile behavior
- tablet behavior
- desktop behavior
- interactions
- content structure
- component appearance

### NEVER:

- redesign
- modernize
- simplify
- beautify
- reinterpret
- invent
- substitute
- approximate when exact information can be extracted
- introduce your own design preference
- replace an existing visual pattern with a "better" pattern

If WordPress uses a particular visual implementation, reproduce that implementation.

---

# 2. DO NOT WORK ON THE ENTIRE WEBSITE AT ONCE

This is a strict page-by-page migration.

Never attempt to extract and implement the entire website in one operation.

Work in controlled phases.

Example:

```text
PHASE 0
Global Design System + Shared Components + Asset Registry

PHASE 1
Page 01 extraction → implementation → verification

PHASE 2
Page 02 extraction → implementation → verification

PHASE 3
Page 03 extraction → implementation → verification

...
```

Only work on the currently assigned phase.

Do not modify unrelated pages.

Do not refactor unrelated functionality.

Do not disturb existing application functionality.

---

# 3. CRITICAL WORKFLOW

For every page, follow this exact sequence:

```text
SOURCE WORDPRESS PAGE
        ↓
INSPECT
        ↓
EXTRACT
        ↓
DOCUMENT
        ↓
IDENTIFY REUSABLE COMPONENTS
        ↓
CHECK ASSET REGISTRY
        ↓
CHECK COMPONENT REGISTRY
        ↓
IMPLEMENT IN NEXT.JS
        ↓
RUN
        ↓
VISUAL COMPARISON
        ↓
FIX DIFFERENCES
        ↓
RESPONSIVE VERIFICATION
        ↓
FUNCTIONAL VERIFICATION
        ↓
MARK PAGE COMPLETE
```

Do NOT extract ten pages first and then attempt to code them.

The correct workflow is:

```text
Extract Page 1
→ Build Page 1
→ Verify Page 1

Extract Page 2
→ Build Page 2
→ Verify Page 2

Extract Page 3
→ Build Page 3
→ Verify Page 3
```

This ensures extraction and implementation remain aligned.

---

# 4. BEFORE CODING — INSPECT THE EXISTING NEXT.JS PROJECT

Before modifying anything:

Inspect:

- package.json
- Next.js version
- app/ or pages/
- existing routing
- components
- layouts
- global CSS
- Tailwind configuration if present
- fonts
- public/
- assets
- utilities
- hooks
- state management
- API layer
- existing architecture
- environment configuration
- build configuration
- lint configuration
- TypeScript configuration
- testing setup

Understand the existing architecture first.

## IMPORTANT

Do NOT rebuild the existing application from scratch.

Follow:

**EXTEND — DO NOT REBUILD**

Preserve existing functionality unless a change is absolutely required for this migration.

---

# 5. PHASE 0 — GLOBAL WORDPRESS EXTRACTION

Before page-by-page implementation, extract only the **globally reusable system**.

Do NOT attempt to document every page during Phase 0.

Extract:

## Typography

Determine exact:

- font family
- font source
- font files if accessible
- font weights
- heading hierarchy
- body typography
- button typography
- navigation typography
- labels
- captions
- desktop sizes
- tablet sizes
- mobile sizes
- line heights
- letter spacing
- text transforms

Do not guess fonts.

Inspect CSS, computed styles, source assets, font declarations, and loaded resources.

---

# 6. GLOBAL COLORS

Extract exact values:

- primary
- secondary
- accent
- text
- muted text
- heading
- background
- section backgrounds
- card backgrounds
- borders
- hover
- active
- focus
- disabled
- overlay
- gradients

Prefer actual CSS values from the source.

If the source uses RGB/HSL/HEX/variables, preserve the source value and document it.

---

# 7. GLOBAL SPACING SYSTEM

Extract recurring spacing patterns:

- container width
- max-width
- page padding
- section padding
- section margins
- column gaps
- row gaps
- card gaps
- heading margins
- paragraph margins
- button gaps
- navigation spacing
- footer spacing

Identify repeated values and turn them into reusable design tokens where appropriate.

Do not arbitrarily normalize values that are intentionally different.

---

# 8. GLOBAL LAYOUT SYSTEM

Determine:

- desktop container width
- tablet container width
- mobile width
- horizontal padding
- grid behavior
- flex behavior
- columns
- rows
- alignment
- vertical alignment
- breakpoints
- max-width rules
- min-height rules
- section positioning

Document actual behavior.

---

# 9. NAVBAR EXTRACTION

Extract the navbar in extreme detail.

Document:

- total height
- logo
- logo dimensions
- logo spacing
- navigation item spacing
- font
- font size
- font weight
- colors
- hover behavior
- active state
- dropdown behavior
- dropdown width
- dropdown padding
- dropdown typography
- dropdown icons
- CTA button
- button dimensions
- mobile menu
- hamburger icon
- mobile drawer
- mobile spacing
- sticky/fixed behavior
- scroll behavior
- transitions
- animation
- borders/shadows/background changes

The navbar becomes a reusable shared component.

---

# 10. FOOTER EXTRACTION

Extract:

- overall structure
- columns
- rows
- logo
- links
- headings
- social icons
- contact information
- legal links
- newsletter
- buttons
- separators
- spacing
- typography
- colors
- responsive behavior
- mobile stacking
- hover states

Create one reusable Footer component unless the source genuinely contains different footer variants.

---

# 11. BUTTON SYSTEM

Identify every button style.

For each button record:

- variant
- width
- height
- padding
- font
- font size
- weight
- line height
- radius
- border
- background
- text color
- icon
- icon size
- icon gap
- hover
- active
- focus
- disabled
- transition

Create reusable variants rather than duplicating CSS.

---

# 12. CARD EXTRACTION

This is one of the highest-priority tasks.

For EVERY card style:

Extract:

- width
- height
- min-height
- padding
- margin
- gap
- background
- border
- border thickness
- radius
- shadow
- image
- image dimensions
- image ratio
- image positioning
- icon
- icon dimensions
- icon positioning
- title
- title typography
- description
- metadata
- CTA
- internal spacing
- hover behavior
- animation
- responsive behavior

Determine whether two visually similar cards are actually the same component.

Do not create duplicate card components unnecessarily.

---

# 13. ICON EXTRACTION

Determine the actual icon source.

Check for:

- SVG
- inline SVG
- external SVG
- icon font
- Font Awesome
- Elementor icons
- custom icons
- image assets
- CSS-generated icons

Use the actual source asset whenever available.

Do NOT replace a source icon with:

- Lucide
- Material Icons
- Font Awesome
- emoji
- random SVG

unless the original asset genuinely cannot be obtained and the substitution is explicitly documented.

---

# 14. IMAGE EXTRACTION

For every image:

Extract:

- exact source
- filename
- URL
- dimensions
- format
- aspect ratio
- location
- desktop/mobile version
- object-fit
- object-position
- border radius
- overlay
- background treatment
- loading behavior

Download/use the highest-quality source available.

---

# 15. CRITICAL ASSET REUSE RULE

Create:

`ASSET-REGISTRY.md`

Every extracted asset receives a unique ID.

Example:

```text
IMG-001
LOGO-001
ICON-001
ICON-002
BG-001
FONT-001
VIDEO-001
```

For each asset record:

```text
ID
Type
Original URL
Local path
Dimensions
Format
Used on pages
Used in components
```

Before extracting any new asset:

### ALWAYS CHECK ASSET-REGISTRY FIRST.

If the same image/icon/logo/font already exists:

**REUSE IT.**

Do not download or create another copy.

Do not create:

```text
hero.jpg
hero-2.jpg
hero-final.jpg
hero-new.jpg
```

for the same source asset.

---

# 16. COMPONENT REGISTRY

Create:

`COMPONENT-REGISTRY.md`

Record reusable components.

Example:

```text
C-001 Navbar
C-002 Footer
C-003 PrimaryButton
C-004 SecondaryButton
C-005 SectionHeading
C-006 FeatureCard
C-007 TestimonialCard
C-008 PricingCard
C-009 ReviewCard
C-010 ContactForm
```

Before creating a component:

**CHECK THE REGISTRY.**

If the component already exists:

**REUSE IT.**

If the new page contains a genuinely different variant:

extend the existing component instead of duplicating it where appropriate.

---

# 17. PAGE-BY-PAGE EXTRACTION

For every page, inspect from:

**TOP → BOTTOM**

Never skip sections.

For each page document:

```text
PAGE
URL
TITLE
META INFORMATION

SECTION 01
SECTION TYPE
SECTION DIMENSIONS
BACKGROUND
CONTAINER
ROWS
COLUMNS
ELEMENTS

SECTION 02
...

SECTION N
...
```

---

# 18. ROW-BY-ROW EXTRACTION

For every section identify:

- number of rows
- row width
- row height
- row gap
- alignment
- background
- borders
- padding
- margins

---

# 19. COLUMN-BY-COLUMN EXTRACTION

For every row identify:

- number of columns
- column width
- column gap
- alignment
- content
- image
- text
- buttons
- card groups
- responsive stacking

Example:

```text
Section 03
Container: 1200px

Row 01
├── Column 01: 55%
│   ├── Heading
│   ├── Paragraph
│   └── Button
│
└── Column 02: 45%
    └── Image

Gap: 64px
```

Do not merely describe the page visually.

Record its actual structural relationships.

---

# 20. ELEMENT-BY-ELEMENT EXTRACTION

For every visible element record:

- element type
- dimensions
- position
- spacing
- typography
- color
- background
- border
- radius
- shadow
- icon/image
- interaction
- responsive behavior

This includes:

- headings
- paragraphs
- links
- buttons
- badges
- labels
- inputs
- selects
- cards
- icons
- images
- video
- separators
- lists
- accordions
- tabs
- sliders
- carousels
- menus
- dropdowns
- modals
- forms

---

# 21. BEHAVIOR EXTRACTION

Do not only reproduce static screenshots.

Inspect:

- hover
- focus
- active
- click
- dropdown
- accordion
- carousel
- slider
- menu
- mobile navigation
- sticky navigation
- scrolling
- animation
- transitions
- form behavior
- validation
- loading states
- lazy loading
- links
- external links

Reproduce behavior where applicable.

---

# 22. RESPONSIVE EXTRACTION

Every page must be inspected at:

```text
Desktop
1440px
1280px

Tablet
1024px
768px

Mobile
480px
390px
375px
```

Do not assume mobile is simply desktop stacked vertically.

Extract the actual mobile design.

Record:

- hidden elements
- reordered elements
- changed typography
- changed spacing
- changed images
- changed cards
- changed navigation
- changed buttons
- changed alignment
- changed section heights
- changed columns

---

# 23. PAGE IMPLEMENTATION

After extracting the current page:

Implement it immediately in the Next.js application.

Do NOT wait until the entire website is extracted.

Use:

- reusable components
- design tokens
- semantic HTML
- clean component boundaries
- maintainable CSS
- TypeScript where project architecture supports it
- optimized assets
- responsive layout
- accessible interactions

---

# 24. CLEAN ARCHITECTURE

The final Next.js implementation must be:

- modular
- maintainable
- reusable
- scalable
- testable
- secure
- performant

Avoid:

- giant page components
- duplicated JSX
- duplicated CSS
- hardcoded repeated values
- unnecessary client components
- unnecessary global state
- deeply coupled components
- unnecessary dependencies

Use server components by default when supported by the existing Next.js architecture.

Use client components only where interactivity requires them.

---

# 25. STATE MANAGEMENT

Do not introduce global state unnecessarily.

First determine whether state is:

```text
Local component state
↓
URL/search state
↓
Server state
↓
Global application state
```

Use the simplest correct solution.

Do not install a state-management library merely because it exists.

If the existing project already has a state-management solution, understand and reuse it rather than replacing it without justification.

---

# 26. PERFORMANCE

The implementation must prioritize:

- fast initial load
- minimal JavaScript
- optimized images
- responsive images
- lazy loading where appropriate
- code splitting
- dynamic imports where appropriate
- server rendering where appropriate
- caching
- minimal client-side rendering
- minimal dependencies
- avoiding unnecessary re-renders
- avoiding layout shift
- optimized fonts
- correct image dimensions
- semantic HTML

Do not sacrifice visual accuracy for arbitrary optimization.

Optimize intelligently.

---

# 27. SECURITY

Do not introduce:

- unsafe HTML rendering
- exposed secrets
- client-side secrets
- unsafe dynamic URLs
- insecure forms
- unnecessary third-party scripts
- vulnerable dependencies

If source WordPress contains unsafe patterns, reproduce the **visual/functional behavior** using a secure Next.js implementation rather than copying an insecure implementation blindly.

---

# 28. ACCESSIBILITY

Preserve the visual design while implementing:

- semantic HTML
- keyboard navigation
- accessible buttons
- accessible links
- proper labels
- focus states
- alt text
- appropriate ARIA only where required
- sufficient interaction accessibility

Do not remove accessibility merely to reproduce the appearance.

---

# 29. SEO

Preserve/implement appropriate:

- title
- description
- canonical
- Open Graph
- Twitter metadata
- semantic headings
- structured data where applicable
- sitemap
- robots
- clean URLs

Do not change existing SEO behavior unnecessarily.

---

# 30. VISUAL VERIFICATION

After implementing every page:

Run the Next.js application.

Capture screenshots at the same viewport sizes as the source.

Compare:

```text
WORDPRESS
vs
NEXT.JS
```

Check:

- overall geometry
- section heights
- widths
- typography
- spacing
- alignment
- colors
- images
- icons
- cards
- buttons
- borders
- shadows
- responsive behavior

Do not accept:

> "Looks close enough."

The goal is **maximum visual fidelity**.

---

# 31. VISUAL DIFFERENCE REPORT

For every comparison create:

```text
PAGE: Home

Navbar
✓ Match

Hero
✗ Heading 8px too low
✗ Image 12px too far right

Section 02
✓ Match

Feature Cards
✗ Card padding differs
✗ Border radius differs

Footer
✓ Match
```

Fix every meaningful discrepancy.

Then repeat the screenshot comparison.

---

# 32. NO PREMATURE COMPLETION

A page is NOT complete merely because:

- the route works
- the page renders
- the content exists
- the components compile
- there are no console errors

A page is complete only when:

```text
✓ Structure extracted
✓ Assets extracted
✓ Components identified
✓ Styles extracted
✓ Responsive behavior extracted
✓ Implementation completed
✓ Desktop verified
✓ Tablet verified
✓ Mobile verified
✓ Interactions verified
✓ Visual differences corrected
✓ No regression introduced
```

---

# 33. DO NOT DISTURB EXISTING FUNCTIONALITY

This is a strict requirement.

Before modifying anything:

Understand what already exists.

Do not break:

- authentication
- APIs
- forms
- routing
- existing pages
- existing components
- backend functionality
- database functionality
- state
- integrations
- existing responsive behavior

If a shared component must change, check every page using it before changing its behavior.

---

# 34. DO NOT DUPLICATE EXISTING WORK

Before creating:

- component
- CSS
- image
- icon
- font
- utility
- hook
- layout
- button
- card

search the existing project first.

Then check:

```text
ASSET-REGISTRY
COMPONENT-REGISTRY
DESIGN-SYSTEM
```

Reuse wherever possible.

---

# 35. DOCUMENT EVERYTHING

Maintain these documents throughout the migration:

```text
/docs/payback/

GLOBAL-DESIGN-SYSTEM.md
ASSET-REGISTRY.md
COMPONENT-REGISTRY.md
PAGE-MAP.md
MIGRATION-STATUS.md

/pages/

home.md
about.md
contact.md
...
```

Each page document should contain the exact extraction for that page.

---

# 36. MIGRATION STATUS

Maintain:

```text
PAGE-MAP.md

Page                 Extraction    Implementation    Verification
-----------------------------------------------------------------
Home                 COMPLETE      COMPLETE          COMPLETE
About                COMPLETE      COMPLETE          IN PROGRESS
Contact              COMPLETE      PENDING            PENDING
Services             PENDING       PENDING            PENDING
...
```

Never lose track of progress.

---

# 37. SOURCE PAGE DISCOVERY

Before beginning page implementation:

Inspect the source site's navigation, sitemap, internal links, menus and page structure.

Build a complete page inventory.

The currently visible Payback sitemap includes major areas such as Testimonials, Services, Investigation, Education, Professional Consulting, B2B Cyber Security, Online Safety, Blog, About, Contact, FAQ and scam-specific pages. Do not assume this list is exhaustive; discover the actual current routes from the source website.

Create the page inventory first.

Do not blindly assume URLs.

---

# 38. EXTRACTION PRIORITY

For every page prioritize:

### HIGHEST PRIORITY

1. Layout
2. Dimensions
3. Spacing
4. Typography
5. Colors
6. Cards
7. Images
8. Icons
9. Navigation
10. Buttons

### THEN

11. Responsive behavior
12. Interactions
13. Animations
14. Forms
15. SEO metadata
16. Accessibility

---

# 39. IMPORTANT: CONTENT VS DESIGN

Do not spend excessive time rewriting or interpreting content.

The primary migration objective is:

**VISUAL + STRUCTURAL + BEHAVIORAL FIDELITY.**

The source content should be preserved where appropriate, but the engineering focus must remain on reproducing:

```text
HOW IT LOOKS
HOW IT IS STRUCTURED
HOW IT SPACES
HOW IT BEHAVES
HOW IT RESPONDS
```

---

# 40. AGENT DECISION RULE

Whenever you encounter something:

### If it can be inspected:
**INSPECT IT.**

### If it can be extracted:
**EXTRACT IT.**

### If it already exists:
**REUSE IT.**

### If it is repeated:
**MAKE IT REUSABLE.**

### If it is different:
**DOCUMENT THE DIFFERENCE.**

### If it is uncertain:
**INVESTIGATE FURTHER FIRST.**

### Only ask the user when:
the required information genuinely cannot be determined from the source website, source assets, existing codebase, or available tooling.

Do NOT repeatedly interrupt the user for normal implementation decisions.

---

# 41. PHASE EXECUTION RULE

At the beginning of every phase, report:

```text
Current Phase:
Current Page:
Source URL:
Previous Phase Status:
Assets Already Available:
Components Already Available:
What Will Be Extracted:
What Will Be Implemented:
```

Then execute.

At the end:

```text
PHASE COMPLETE

Extraction:
✓

Implementation:
✓

Asset reuse:
✓

Component reuse:
✓

Responsive verification:
✓

Visual verification:
✓

Regression check:
✓
```

Then proceed to the next phase only when instructed/appropriate.

---

# 42. FINAL ARCHITECTURE REQUIREMENT

The final application should not become a collection of individually copied WordPress pages.

It should become a clean Next.js application containing:

```text
Reusable Design System
        +
Reusable Components
        +
Reusable Assets
        +
Page-specific Composition
        +
Clean Routing
        +
Optimized Rendering
        +
Responsive Behavior
        +
Accessible Interactions
        +
SEO
        +
Testing
```

The visual result should remain faithful to the WordPress source while the underlying implementation should follow professional modern Next.js engineering practices.

---

# 43. FINAL NON-NEGOTIABLE RULE

### DO NOT CREATE A "SIMILAR PAYBACK WEBSITE."

Create an **accurate Next.js recreation of the existing Payback website.**

The difference is critical.

Do not use your own design judgment where the source website provides the answer.

Do not replace exact values with approximate values.

Do not replace source assets with similar assets.

Do not replace source icons with similar icons.

Do not create new card styles when an existing card style can be reused.

Do not repeatedly extract the same image.

Do not repeatedly ask the user for information that can be inspected.

Do not skip sections.

Do not skip rows.

Do not skip columns.

Do not skip responsive states.

Do not declare completion prematurely.

Always:

**INSPECT → EXTRACT → REGISTER → IMPLEMENT → COMPARE → CORRECT → VERIFY.**

The WordPress website remains the source of truth throughout the entire migration.