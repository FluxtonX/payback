# 🚨 STRICT PIXEL-ACCURATE PAYBACK WEBSITE REPRODUCTION — CORRECTION & ENFORCEMENT MODE

## ROLE

Act as a **Senior Frontend Reverse-Engineering Engineer, Pixel-Accurate UI Reconstruction Specialist, Browser Inspection Engineer, CSS/Layout Forensics Expert, Next.js Architect, and Visual QA Engineer.**

You are working on the recreation of:

**SOURCE:** https://www.payback.com/

The existing WordPress website is the **ABSOLUTE VISUAL SOURCE OF TRUTH**.

The current Next.js implementation is NOT the source of truth.

If the Next.js implementation differs from WordPress, **the Next.js implementation is wrong and must be corrected.**

---

# 🚨 MOST IMPORTANT RULE

## DO NOT DESIGN.

## DO NOT INTERPRET.

## DO NOT APPROXIMATE.

## DO NOT IMPROVE.

## DO NOT MODERNIZE.

## DO NOT "MAKE IT SIMILAR."

## REPRODUCE WHAT ACTUALLY EXISTS ON THE WORDPRESS WEBSITE.

You are not creating a new design inspired by Payback.

You are reconstructing the existing Payback website.

---

# 1. ZERO-ASSUMPTION POLICY

Never make a visual assumption when the source website can be inspected.

Never think:

> "This probably uses a 1200px container."

Inspect it.

Never think:

> "This heading should probably be centered."

Inspect it.

Never think:

> "This card looks like it has 24px padding."

Measure/inspect it.

Never think:

> "The navbar should look like this."

Inspect the actual navbar.

Never think:

> "This section is probably white."

Inspect the actual background.

Never think:

> "This image is centered."

Inspect its actual position.

### SOURCE > ASSUMPTION

Always.

---

# 2. CURRENT IMPLEMENTATION MUST BE AUDITED AGAINST SOURCE

Do NOT simply continue coding from the current Next.js implementation.

First perform a **source-vs-current implementation audit**.

For the assigned page:

```text
WORDPRESS
        ↓
inspect actual DOM
        ↓
inspect computed CSS
        ↓
inspect dimensions
        ↓
inspect spacing
        ↓
inspect assets
        ↓
inspect responsive behavior

NEXT.JS
        ↓
inspect actual DOM
        ↓
inspect computed CSS
        ↓
inspect dimensions
        ↓
inspect spacing
        ↓
inspect assets
        ↓
inspect responsive behavior

WORDPRESS vs NEXT.JS
        ↓
DIFFERENCE REPORT
        ↓
CORRECTION
```

Do not assume the existing Next.js page is correct.

---

# 3. EVERY PAGE MUST BE TREATED AS A GEOMETRY PROBLEM

For every page, reconstruct the exact visual geometry.

You must determine:

- viewport
- page width
- container width
- container left edge
- container right edge
- section width
- section height
- section top position
- section bottom position
- row position
- row width
- row height
- column width
- column position
- column gap
- element position
- element width
- element height
- element margin
- element padding
- element alignment

Do not merely reproduce the hierarchy.

Reproduce the **geometry**.

---

# 4. CONTAINER RULE — EXTREMELY IMPORTANT

For EVERY section identify the actual container.

Record:

```text
Viewport width
Section width
Container max-width
Container actual width
Left margin
Right margin
Padding-left
Padding-right
```

Example:

```text
Viewport: 1440px

Container:
left: 120px
right: 120px
width: 1200px
```

If the WordPress container is 1184px, use 1184px.

If it is 1240px, use 1240px.

Do NOT normalize it to 1200px because it is "standard."

---

# 5. SECTION-BY-SECTION FORENSIC EXTRACTION

Every page MUST be inspected from:

**TOP → BOTTOM**

Do not skip anything.

For every section extract:

```text
SECTION NUMBER
SECTION TOP POSITION
SECTION HEIGHT
BACKGROUND COLOR
BACKGROUND IMAGE
BACKGROUND SIZE
BACKGROUND POSITION
CONTAINER WIDTH
CONTAINER LEFT/RIGHT PADDING
TOP PADDING
BOTTOM PADDING
ROWS
COLUMNS
ROW GAP
COLUMN GAP
CHILD ELEMENTS
```

Then inspect every child.

---

# 6. BACKGROUND COLORS MUST MATCH EXACTLY

This is a high-priority requirement.

If a WordPress section has:

```text
#FFFFFF
#F7F7F7
#F1F4F5
rgba(...)
linear-gradient(...)
```

extract the actual value.

Do not replace it with:

> "a similar light gray."

Do not use generic Tailwind colors such as:

```text
bg-gray-50
bg-gray-100
bg-slate-50
```

unless that exact value matches the source.

If WordPress uses a custom color:

**use the custom color.**

---

# 7. TEXT POSITION MUST MATCH

For every text element inspect:

- X position
- Y position
- width
- height
- alignment
- font family
- font size
- font weight
- line height
- letter spacing
- color
- margin-top
- margin-bottom
- padding
- max-width

Pay special attention to:

### Heading wrapping.

The heading must wrap into the **same number of lines** as WordPress at the same viewport width.

If WordPress displays:

```text
LINE 1
LINE 2
LINE 3
```

and Next.js displays:

```text
LINE 1
LINE 2
```

the implementation is WRONG.

Fix:

- width
- font
- font size
- font weight
- letter spacing
- line height

until the wrapping matches.

---

# 8. DO NOT SUBSTITUTE FONTS

Determine the actual font used by WordPress.

Inspect:

- CSS
- `@font-face`
- network resources
- computed styles
- loaded fonts
- font weights

Use the actual font whenever available.

Do NOT casually replace it with:

- Inter
- Roboto
- Arial
- Poppins
- system-ui

unless inspection proves that WordPress uses it.

---

# 9. EVERY TEXT BLOCK IS AN INDIVIDUAL ELEMENT

Do not treat an entire section as:

> "Heading + paragraph + button."

Inspect each independently.

Example:

```text
Heading
X = ...
Y = ...
Width = ...
Height = ...

Paragraph
X = ...
Y = ...
Width = ...
Height = ...

Button
X = ...
Y = ...
Width = ...
Height = ...
```

Then reproduce the relationships between them.

---

# 10. CARD ALIGNMENT — ZERO TOLERANCE

For every card row determine:

```text
Container width
Number of cards
Card width
Card height
Left edge
Right edge
Gap
Top alignment
Bottom alignment
```

Example:

```text
Container: 1200px

Card 01:
x = 0
width = 360

Gap = 24

Card 02:
x = 384
width = 360

Gap = 24

Card 03:
x = 768
width = 360
```

Do NOT simply use:

```css
grid-template-columns: repeat(3, 1fr);
```

unless that produces the same actual geometry.

The visual result is what matters.

---

# 11. CARD INTERNAL ALIGNMENT

For every card inspect separately:

```text
Card
├── image
├── icon
├── badge
├── heading
├── description
├── metadata
├── button
└── footer/content
```

Determine exact:

- padding-top
- padding-right
- padding-bottom
- padding-left
- internal gaps
- image position
- icon position
- heading position
- paragraph position
- button position

If three cards have equal heights in WordPress, make them equal.

If they have different heights, do NOT artificially equalize them.

---

# 12. LEFT / RIGHT MARGINS ARE CRITICAL

Do NOT only match center alignment.

Inspect:

```text
element → container left distance
element → container right distance
element → neighboring element distance
```

A 10–20px difference can visibly change the entire page.

Correct it.

---

# 13. NAVBAR MUST BE RE-EXTRACTED

The navbar is currently inaccurate.

Therefore:

### DO NOT reuse the current Next.js navbar blindly.

Return to WordPress and inspect the actual navbar again.

Extract:

- exact height
- exact logo
- logo dimensions
- logo X position
- logo Y position
- navigation X positions
- navigation spacing
- typography
- text color
- hover color
- active color
- CTA
- CTA size
- CTA position
- dropdown
- dropdown position
- dropdown width
- dropdown padding
- dropdown shadow
- dropdown border
- dropdown radius
- mobile menu
- menu icon
- sticky behavior
- scroll behavior
- background behavior

If WordPress has a different navbar structure from the current Next.js navbar:

**REBUILD THE NAVBAR TO MATCH WORDPRESS.**

Do not preserve an incorrect design simply because it already exists.

---

# 14. FOOTER MUST ALSO BE FORENSICALLY MATCHED

Extract:

- exact number of columns
- widths
- spacing
- logo position
- headings
- links
- social icons
- separators
- copyright
- legal links
- background
- typography
- padding
- alignment
- responsive stacking

Do not create a generic footer.

---

# 15. ICONS MUST BE EXACT

For every icon determine:

- source
- SVG
- dimensions
- stroke width
- fill
- color
- viewBox
- position
- spacing
- hover behavior

If the actual SVG exists, use it.

Do NOT substitute a visually similar icon.

For example:

```text
WordPress icon ≠ random Lucide icon
WordPress icon ≠ Font Awesome replacement
WordPress icon ≠ emoji
```

Exact source asset takes priority.

---

# 16. BUTTONS MUST MATCH GEOMETRY

For every button inspect:

```text
width
height
padding-left
padding-right
padding-top
padding-bottom
border
border-radius
font
font-size
font-weight
line-height
text alignment
icon
icon size
icon gap
background
text color
hover
active
focus
transition
```

If WordPress button width is content-based, reproduce that.

If fixed-width, reproduce fixed width.

Do not automatically use:

```text
width: 100%
```

or generic Tailwind button classes.

---

# 17. IMAGE POSITIONING MUST MATCH

Do not only use the correct image.

The image must also have the correct:

- width
- height
- crop
- aspect ratio
- object-fit
- object-position
- border radius
- position
- margin
- padding
- overlay

If WordPress shows a person positioned toward the right side of an image, reproduce that positioning.

Do not simply center the image.

---

# 18. IMAGE REUSE

Before extracting/downloading an image:

CHECK:

```text
ASSET-REGISTRY
PROJECT /public
EXISTING COMPONENTS
```

If the same image exists:

**REUSE IT.**

Do not duplicate the asset.

---

# 19. EXACT URL / ROUTE RULE

Extract the actual URL structure from WordPress.

Do not invent routes.

Record:

```text
Source URL
Target Next.js route
```

Every internal link must point to the correct corresponding Next.js route.

Do not:

- remove pages
- rename routes unnecessarily
- invent slugs
- create fake URLs
- redirect pages arbitrarily

If WordPress contains:

```text
/example-page/
```

preserve that route unless the project has a documented requirement to change it.

---

# 20. PAGE DISCOVERY

Inspect:

- sitemap
- navbar
- dropdowns
- footer
- internal links
- breadcrumbs
- service links
- article links
- CTA links

Create a complete page inventory.

Do not migrate only the obvious pages.

---

# 21. DO NOT MISS HIDDEN/LOWER-PAGE CONTENT

Agents often stop after the hero or major sections.

Do NOT do this.

Scroll through the entire page.

Inspect:

```text
Header
Hero
Section 01
Section 02
Section 03
Section 04
...
Final CTA
Footer
```

Every visible section matters.

---

# 22. NO GENERIC PLACEHOLDERS

Never replace:

- real image → placeholder
- real icon → generic icon
- real text → Lorem ipsum
- real card → generic card
- real button → generic button
- real background → white
- real layout → centered layout

Use actual source material.

---

# 23. DO NOT "FIX" THE SOURCE DESIGN

If the WordPress source has:

- unusual spacing
- asymmetry
- large whitespace
- unusual card dimensions
- unusual typography
- non-standard container
- unusual navbar
- overlapping elements

REPRODUCE IT.

Do not correct it because it looks unusual.

The goal is source fidelity, not design quality.

---

# 24. CSS RULE

Do not write CSS based on visual guessing.

Whenever possible derive values from:

- computed styles
- DOM dimensions
- browser inspection
- source CSS
- source assets

Use exact values.

---

# 25. DESKTOP FIRST — THEN RESPONSIVE

For each page:

### STEP 1

Match desktop geometry exactly.

### STEP 2

Match tablet.

### STEP 3

Match mobile.

Do not assume responsive behavior.

Inspect the source at each viewport.

---

# 26. RESPONSIVE LAYOUT MUST MATCH SOURCE

At each viewport inspect:

```text
1440
1280
1024
768
480
390
375
```

Determine:

- container width
- margins
- typography
- wrapping
- cards
- columns
- images
- navigation
- buttons
- spacing
- hidden elements
- reordered elements

If WordPress changes layout at 768px, reproduce that behavior.

---

# 27. SCREENSHOT COMPARISON IS MANDATORY

For every page and viewport:

Capture:

```text
WORDPRESS SCREENSHOT
NEXT.JS SCREENSHOT
```

Compare them.

Do not rely on memory.

Do not rely on "looks good."

---

# 28. USE OVERLAY / DIFFERENCE COMPARISON

Where tooling allows, create a visual comparison:

```text
SOURCE
+
TARGET
↓
OVERLAY / IMAGE DIFF
↓
VISIBLE MISALIGNMENTS
```

Look specifically for:

- horizontal displacement
- vertical displacement
- wrong widths
- wrong heights
- wrong section backgrounds
- wrong card positions
- wrong typography
- wrong image crop
- wrong margins
- wrong padding
- wrong gaps

---

# 29. FIX IN THIS ORDER

When differences exist, fix:

```text
1. Page/container geometry
2. Section dimensions
3. Row/column geometry
4. Element position
5. Width/height
6. Typography
7. Margins
8. Padding
9. Gaps
10. Colors
11. Borders/radius
12. Shadows
13. Images
14. Icons
15. Hover/interaction
```

Do not randomly modify CSS.

---

# 30. ONE CHANGE → VERIFY

Do not make 50 random CSS changes.

Use controlled iteration:

```text
Identify mismatch
↓
Find source value
↓
Change implementation
↓
Screenshot
↓
Compare
↓
Continue
```

---

# 31. DO NOT OVER-ABSTRACT

Reusable code is important.

But do NOT force unrelated designs into one component just because they look somewhat similar.

Use:

```text
shared component
+
controlled variants
```

when the structure is genuinely shared.

Otherwise keep page-specific composition.

Visual accuracy takes priority over artificial abstraction.

---

# 32. DO NOT DESTROY EXISTING FUNCTIONALITY

While correcting visual implementation:

DO NOT break:

- routing
- API calls
- authentication
- forms
- existing functionality
- state
- backend
- database
- integrations

Make visual corrections without unnecessary functional changes.

---

# 33. NO UNNECESSARY REWRITES

Do not rewrite the entire application to fix one page.

Modify only what is required.

If a shared component is wrong, determine all consumers before changing it.

---

# 34. FINAL PAGE AUDIT

Before marking a page complete, verify:

```text
LAYOUT
[ ] Container width
[ ] Container margins
[ ] Section widths
[ ] Section heights
[ ] Rows
[ ] Columns
[ ] Alignment

TYPOGRAPHY
[ ] Font
[ ] Weight
[ ] Size
[ ] Line-height
[ ] Letter-spacing
[ ] Wrapping
[ ] Color

SPACING
[ ] Margin
[ ] Padding
[ ] Gap
[ ] Left/right spacing
[ ] Top/bottom spacing

VISUALS
[ ] Background colors
[ ] Background images
[ ] Cards
[ ] Borders
[ ] Radius
[ ] Shadows
[ ] Images
[ ] Icons
[ ] Buttons

NAVIGATION
[ ] Navbar
[ ] Menus
[ ] Dropdowns
[ ] Links
[ ] Footer
[ ] URLs

BEHAVIOR
[ ] Hover
[ ] Focus
[ ] Active
[ ] Dropdown
[ ] Mobile menu
[ ] Animations
[ ] Transitions

RESPONSIVE
[ ] 1440
[ ] 1280
[ ] 1024
[ ] 768
[ ] 480
[ ] 390
[ ] 375

QA
[ ] Screenshot comparison
[ ] Visual differences corrected
[ ] Console errors checked
[ ] Build successful
[ ] Existing functionality verified
```

---

# 35. FAILURE CONDITIONS

The page MUST be considered **FAILED** if:

- content is visibly misaligned
- container is wrong
- section background is wrong
- card spacing is wrong
- card widths are wrong
- text wrapping differs significantly
- navbar differs
- footer differs
- icons differ
- image positioning differs
- buttons differ
- margins are noticeably wrong
- mobile layout differs
- sections are missing
- URLs are incorrect

Do not report the page as complete under these conditions.

---

# 36. DO NOT ASK ME TO MANUALLY CORRECT VISUAL DETAILS

Do not tell the user:

> "Please tell me what spacing you want."

> "Which color should I use?"

> "Should the cards be centered?"

> "Do you prefer this navbar?"

The source website already answers these questions.

Inspect the source and determine the answer.

Only ask the user if the required information genuinely cannot be extracted.

---

# 37. FINAL IMPLEMENTATION PRINCIPLE

The goal is:

```text
WORDPRESS SOURCE
       ↓
EXACT EXTRACTION
       ↓
EXACT MEASUREMENTS
       ↓
EXACT ASSETS
       ↓
EXACT STRUCTURE
       ↓
NEXT.JS IMPLEMENTATION
       ↓
SCREENSHOT
       ↓
VISUAL DIFFERENCE
       ↓
CORRECTION
       ↓
SCREENSHOT AGAIN
       ↓
MATCH
```

NOT:

```text
WordPress
↓
AI looks at it
↓
AI guesses
↓
Similar design
```

---

# 🚨 FINAL COMMAND

STOP treating the existing Next.js page as a design reference.

Treat **https://www.payback.com/** as the reference.

For the current page:

1. Open the exact WordPress page.
2. Inspect its complete DOM/layout.
3. Inspect computed styles.
4. Inspect every container.
5. Inspect every section.
6. Inspect every row.
7. Inspect every column.
8. Inspect every text element.
9. Inspect every card.
10. Inspect every icon.
11. Inspect every image.
12. Inspect every button.
13. Inspect navbar.
14. Inspect menus/dropdowns.
15. Inspect footer.
16. Inspect every URL.
17. Inspect hover/interactive states.
18. Inspect responsive states.
19. Compare against the current Next.js implementation.
20. Produce a mismatch list.
21. Correct the Next.js implementation.
22. Screenshot again.
23. Compare again.
24. Repeat until there are no meaningful visual mismatches.

### DO NOT STOP AT "CLOSE."

### DO NOT STOP AT "SIMILAR."

### DO NOT STOP BECAUSE THE PAGE BUILDS.

### DO NOT STOP BECAUSE THE CONTENT EXISTS.

### STOP ONLY WHEN THE NEXT.JS PAGE VISUALLY AND STRUCTURALLY MATCHES THE WORDPRESS SOURCE AS CLOSELY AS THE AVAILABLE SOURCE/inspection data permits.

**SOURCE TRUTH > CURRENT CODE > AGENT PREFERENCE**

Always.