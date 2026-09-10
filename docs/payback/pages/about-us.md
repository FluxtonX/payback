# PAGE EXTRACTION: ABOUT US (/about-us/)

- **Source URL**: `https://payback.com/about-us/`
- **Page Title**: `About Us - PayBack`
- **Meta Description**: `Payback is one of the leading chargeback firms worldwide. Specializing in online trading scams (Forex, Binary Options, Digital Currencies, etc), we pride ourselves on`
- **Canonical**: `https://payback.com/about-us/`
- **Open Graph**: `https://payback.com/images/payback_og.jpeg`

---

## SECTION-BY-SECTION MASTER EXTRACTION

### SECTION 00: Breadcrumbs (`breadcrumbs_container`)
- **Container**: `max-w-[470px] md:max-w-[768px] xl:max-w-[1250px] mx-auto px-4 md:px-6`
- **Hierarchy**: `Home / About Us`
- **Schema**: `schema.org/BreadcrumbList` with ListItem position metadata

---

### SECTION 01: About Us Hero (`AboutSectionUs`)
- **Container**: `1048px` desktop width (`flex-row-reverse`), centered on mobile
- **Gap/Offset**: `236px` desktop margin-left
- **Heading (H1)**: `About Us`
  - Font: `Poppins`, Weight: `700`, Size: `40px` (desktop) / `28px` (mobile), Color: `#030e31`
- **Content**: `Founded in 2017, PayBack has been at the forefront of the battle against online fraud. We have quickly established ourselves as the leader in the field. With a proven track record, we have successfully recovered over $41 million for scam victims worldwide as of 2025 and are still going strong.`
- **Regulatory Note**: `Registered under the Ministry of Justice in Israel (Reg No. 515711653), ASIC (Reg No. 562295), proud members of AFCA (Reg No. 109819), and with a Dun & Bradstreet Credibility Mark.`
- **Illustration**: Vector SVG `/icons/about-us/about.svg` (`192px x 192px` desktop, `104px-128px` mobile)

---

### SECTION 02: Tony Robbins Quote Card (`Quote_quote`)
- **Container**: `1000px` max-width card, shadow `8px 16px 32px 0 rgba(3,14,49,.08)`
- **Heading (H3)**: `“The path to success is to take massive, determined action.”`
  - Font: `Poppins`, Weight: `700`, Size: `28px` (desktop) / `20px` (mobile), Color: `#112152`
- **Author**: `-Tony Robbins-` (Color: `#112152`, `margin-top: 8px`)

---

### SECTION 03: Our Mission (`AboutSectionMission`)
- **Container**: `1048px` desktop width (`flex-row-reverse`), `236px` offset
- **Heading (H2)**: `Our Mission`
  - Font: `Poppins`, Weight: `700`, Size: `40px` / `28px`, Color: `#030e31`
- **Content**: `To empower Individuals & Businesses who have suffered losses due to scams by equipping them with the necessary tools and expert guidance.`
- **Illustration**: Vector SVG `/icons/about-us/our-mission.svg` (`192px x 192px` desktop)

---

### SECTION 04: Our Vision (`AboutSectionVision`)
- **Container**: `1048px` desktop width (`flex-row`), alternating left illustration with `236px` content offset
- **Heading (H2)**: `Our Vision`
  - Font: `Poppins`, Weight: `700`, Size: `40px` / `28px`, Color: `#030e31`
- **Content**: `To be the leading support system for scam victims, providing the expertise, resources, and tools necessary to navigate the complexities of their situations and achieve optimal outcomes. We aim to empower individuals to reclaim what’s rightfully theirs, ensuring they have the support they need every step of the way.`
- **Illustration**: Vector SVG `/icons/about-us/our-vision.svg` (`192px x 192px` desktop)

---

### SECTION 05: What Sets Payback Apart (`howItWorks`)
- **Heading (H2)**: `What Sets Payback Apart`
- **Grid Layout**: 2 Columns (`720px` at md, `1000px` at xl, `40px` col-gap, `32px` row-gap)
- **8 Core Feature Cards** (White card, `8px 16px 32px` shadow, `32px` padding):
  1. `Client-centric approach` (`/icons/client-centric.svg`)
  2. `Experience` (`/icons/experience.svg`)
  3. `Ethical Standards` (`/icons/ethical.svg`)
  4. `Expertise and innovation` (`/icons/expertise-and-innovation.svg`)
  5. `Extensive Database` (`/icons/database.svg`)
  6. `Global reach and impact` (`/icons/global.svg`)
  7. `Data security and privacy` (`/icons/shield-approved.svg`)
  8. `Continuous improvement` (`/icons/improvement.svg`)

---

### SECTION 06: CTA Banner (`letsTalk`)
- Reusable component from Homepage (`components/home/LetsTalkCTA.tsx`)
- Background: `#112152`
- Form: 376px vertical stack `.startForm` with scam type selector and yellow consultation button

---

### SECTION 07: Our CEO Statement Card (`statementBlock`)
- **Container**: `1000px` elevated white card (`8px 16px 32px` shadow)
- **Heading (H2)**: `Our CEO`
- **Content**: `Amir Geva co-founded Payback in 2017, bringing over a decade of expertise in the field to the forefront of our mission. As a dynamic leader, he spearheads our dedicated team in the global battle against fraud and scams, driving innovation and implementing effective strategies to protect individuals from financial harm.`

---

### SECTION 08: About Our Team (`ContentPage_aboutUsTextPage`)
- **Container**: `594px` centered column (`margin: 8px auto 0`)
- **Heading (H2)**: `About Our Team`
- **Overview**: `At Payback, we recognize that navigating the complexities of assisting scam victims requires a dedicated team of experts who work seamlessly together...`
- **5 Departments**:
  - `Marketing team`
  - `Case Assessment Managers`
  - `Service team`
  - `Investigation team`
  - `Cyber team`

---

### SECTION 09: It's Payback Time! Statement Card (`statementBlock`)
- **Container**: `1000px` elevated white card (`8px 16px 32px` shadow)
- **Content**: `If you're reading this, there's a strong chance you've fallen victim to a scam. We want you to know that you're not alone—thousands of individuals experience similar losses yearly...`
- **Highlight**: `It's Payback Time!` (Color: `#030e31`, Bold)

---

### SECTION 10: Scam Categories Grid (`scamSection`)
- Reusable component from Homepage (`components/home/ScamTypesSection.tsx`)
- 8 fraud categories with 1px `#112152` grid lines and hover inversion

---

### SECTION 11: Partner Contact Form (`partnerFormBlock`)
- **Container**: `1000px` elevated white card (`8px 16px 32px` shadow)
- **Heading (H2)**: `Contact us now to get started`
- **Subtitle**: `Our team of experts is here to help. If you’ve been ripped off by scammers, get in touch now.`
- **5 Intake Fields**:
  - `Your Name` (`firstName`)
  - `Last Name` (`lastName`)
  - `Phone number` (`phone`)
  - `Enter your E-mail` (`email`)
  - `Tell us what you need` (`message` textarea, `140px` height)
- **Submit Button**: `Get a free consultation` (Yellow, `376px` centered)

---

## SECTION 31. VISUAL DIFFERENCE REPORT

PAGE: About Us (`/about-us/`)

Breadcrumbs:
✓ Match (Home / About Us with schema.org BreadcrumbList metadata)

Section 01: About Us Hero
✓ Match (1048px container, 236px desktop gap, about.svg background icon, Dun & Bradstreet link)

Section 02: Tony Robbins Quote
✓ Match (1000px card, 8px 16px 32px shadow, exact font sizes 28px/20px, #112152 color)

Section 03: Our Mission
✓ Match (1048px container, 236px desktop gap, our-mission.svg background icon)

Section 04: Our Vision
✓ Match (1048px container, alternating left illustration with 236px margin, our-vision.svg icon)

Section 05: What Sets Payback Apart
✓ Match (8 cards, 2-column grid 720px/1000px, 8px 16px 32px shadow, exact 8 SVG icons)

Section 06: CTA Banner
✓ Match (Navy #112152 background, 376px vertical startForm, scam dropdown, yellow submit button)

Section 07: Our CEO Card
✓ Match (1000px card, 8px 16px 32px shadow, Amir Geva biography text)

Section 08: About Our Team
✓ Match (594px centered column, 5 departments: Marketing, Case Assessment, Service, Investigation, Cyber)

Section 09: It's Payback Time! Statement
✓ Match (1000px card, 8px 16px 32px shadow, bold closing statement)

Section 10: Scam Types Grid
✓ Match (8 fraud category cards, 1px #112152 border grid gap, hover inversion)

Section 11: Contact Intake Form
✓ Match (1000px card, 5 fields: Name, Last Name, Phone, Email, 140px textarea, 376px submit button)

Footer & Disclaimers:
✓ Match (Global Footer and DisclaimerSection inherited from AppLayout)
