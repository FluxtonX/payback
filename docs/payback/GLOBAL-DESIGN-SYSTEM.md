# PAYBACK SITE — GLOBAL DESIGN SYSTEM SPECIFICATION

> **SOURCE OF TRUTH**: Live Payback site (`https://payback.com/`) CSS bundles, DOM inspection, and design tokens.
> **STRICT RULE**: All values below are directly extracted from computed styles and verified assets. No approximations or substitute designs.

---

## 1. Typography System

### Font Families
- **Primary Body & Headings**: `'Poppins', sans-serif`
  - Loaded weights: `300` (Light), `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold), `800` (ExtraBold)
- **Secondary / Editorial Font**: `'Raleway', sans-serif`
  - Loaded weights: `400` (Regular), `500` (Medium), `700` (Bold), `800` (ExtraBold)

### Type Scale & Hierarchy

| Element / Class | Desktop Size / Line-Height | Mobile Size / Line-Height | Weight | Default Color | Transform |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title / H1** | `40px` / `48px` | `28px` / `36px` | `700` (Bold) | `#030e31` / `#fff` | None |
| **Section Heading / H2** | `32px` / `40px` | `24px` / `32px` | `700` (Bold) | `#030e31` | None |
| **Subheading / H3** | `24px` / `32px` | `20px` / `28px` | `600` (SemiBold) | `#030e31` | None |
| **Card Title / H4** | `20px` / `28px` | `18px` / `26px` | `600` (SemiBold) | `#030e31` | None |
| **Body Lead / Subtitle** | `18px` / `28px` | `16px` / `24px` | `500` (Medium) | `#616267` | None |
| **Body Text (Paragraph)** | `16px` / `24px` | `15px` / `22px` | `400` (Regular) | `#616267` | None |
| **Body Small / Captions** | `14px` / `20px` | `13px` / `18px` | `400` (Regular) | `#a0a6ba` | None |
| **Micro Text / Disclaimer**| `12px` / `18px` | `12px` / `16px` | `400` (Regular) | `#616267` | None |
| **Button Text** | `18px` / `28px` | `16px` / `24px` | `500` (Medium) | Dynamic | None |
| **Navigation Item** | `16px` / `24px` | `16px` / `24px` | `400` / `500` | `#a0a6ba` / `#112152` | None |

---

## 2. Color Palette & Design Tokens

### Core Brand Colors
- `--pb-blue-dark`: `#112152` (Primary Brand Dark Navy)
- `--pb-blue-deep`: `#030e31` (Deepest Navy — Headings & Footer Background)
- `--pb-blue-secondary`: `#216ba5` (Accent Interactive Blue)
- `--pb-blue-soft`: `#edf2ff` (Soft Blue Card Background / Light Pill BG)
- `--pb-blue-border`: `#b7c3e8` (Periwinkle Border / Subtle Accent)
- `--pb-blue-slate`: `#3e4761` (Slate Blue / Subheadings / Alternate Nav)

### Neutral Colors
- `--pb-white`: `#ffffff`
- `--pb-bg-light`: `#f4f4f4` (Section Background Grey / Neutral Fill)
- `--pb-text-body`: `#616267` (Primary Body Paragraph Text)
- `--pb-text-muted`: `#a0a6ba` (Muted Text / Inactive Icons / Border Grey)
- `--pb-border-light`: `#e6e6e6`
- `--pb-black`: `#000000`

### Functional & Accent Colors
- `--pb-yellow`: `#ffe661` / `gold` (CTA Yellow / Highlight)
- `--pb-red`: `#e22020` (Urgency Badge / Error State / Warning Icon)
- `--pb-green`: `#10b981` (Verification / Trust Checkmark)

---

## 3. Spacing & Container Geometry

- **Global Container Max-Width**: `1208px`
- **Text / Form Narrow Container**: `720px`
- **Horizontal Container Padding**:
  - Desktop (`>= 992px`): `80px` or `24px` within container
  - Tablet (`768px - 991px`): `24px`
  - Mobile (`< 768px`): `16px`
- **Vertical Section Spacing**:
  - Standard Section: `64px 0` to `80px 0`
  - Compact / CTA Aside: `40px 0`
  - Mobile Vertical Padding: `40px 0` to `48px 0`
- **Border Radii System**:
  - Sharp / Default: `0px` (Cards, buttons, inputs have clean sharp corners)
  - Rounded Elements / Avatars / Badges: `50%` (Circle avatars, progress steps)
  - Input Select / Specific Tooltips: `4px`

---

## 4. Reusable Component Specifications

### 4.1. Navbar (`C-001`)
- **Structure**: Sticky/fixed header (`z-index: 50`)
- **Dimensions**:
  - Height: `88px` desktop, `72px` tablet, `64px` mobile
  - Inner Max-Width: `1208px`
- **Logo**: `/elements/logo.svg` (`151px x 40px` desktop, `121px x 32px` mobile)
- **Menu Items**:
  - Testimonials (`/testimonials/`)
  - Services (Dropdown with Investigation, Education, Consulting, Cyber Security)
  - Online Safety (Dropdown with Whistleblowing, Fraud Prevention Tools, Payback Verifier)
  - Blog (Dropdown with recent articles & View All link)
  - Payback (Dropdown with Contact Us, About Us)
  - FAQ (`/faq/`)
- **Action Buttons**:
  - WhatsApp Quick Chat Button (`/elements/chatButton.svg`)
  - "Get your money back" Header CTA (`228px x 48px`, `#112152` bg, `1px solid #edf2ff` border, `#edf2ff` text)
  - User Login Profile Icon
  - Mobile Hamburger Button (`/elements/burger.svg`)

### 4.2. Footer (`C-002`)
- **Background**: `#030e31`
- **Text Color**: `#edf2ff` and `#a0a6ba`
- **Columns**:
  1. Office Locations & Hours
  2. Investigation Services
  3. Direct Phone & WhatsApp contact
  4. Social Media & Trustpilot rating widget
- **Sub-Footer**:
  - Horizontal separator: `1px solid #a0a6ba`
  - Copyright notices: `© 2017 - 2026 Money Back Ltd. Trading as Payback`
  - Mandatory Disclaimer: Full regulatory disclosure (Money Back Ltd., Israeli company No. 515711653)

### 4.3. Button System (`C-003`)
- **Variants**:
  1. `Primary (Yellow)`: `background: gold / #ffe661; color: #030e31; border: 1px solid gold;`
  2. `Dark Blue`: `background: #112152; color: #ffffff; border: 1px solid #112152;`
  3. `White Outline`: `background: transparent; color: #030e31; border: 1px solid #112152;`
  4. `Link Plain`: `background: transparent; color: #616267; border: none; text-decoration: underline;`
  5. `Header CTA`: `width: 228px; background: #112152; border: 1px solid #edf2ff; color: #edf2ff;`

---

## 5. Responsive Breakpoints

| Breakpoint Name | Min-Width | Max-Width | Layout Characteristics |
| :--- | :--- | :--- | :--- |
| **Mobile Narrow** | `320px` | `413px` | Single column, stacked CTA, full width buttons |
| **Mobile Standard** | `414px` | `767px` | Stretched container, hamburger menu, 16px page padding |
| **Tablet** | `768px` | `991px` | 2-column grids, collapsed navbar, 24px page padding |
| **Desktop Small** | `992px` | `1207px` | Full navbar, 3-4 column grids, 40px padding |
| **Desktop Standard** | `1208px` | `1439px` | Fixed `1208px` centered container, 80px side margins |
| **Desktop Wide** | `1440px`+ | `∞` | Constrained `1208px` content container, expanded background |
