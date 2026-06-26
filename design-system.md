# Design System - Inspired by Finox

## 1. Design Philosophy

The Finox design language emphasizes:

- **Minimalism**: Reduced visual clutter with intentional whitespace
- **Functionality First**: Design serves the user, not the other way around
- **Clarity**: Clear typography hierarchy and visual relationships
- **Confidence**: Bold, large typography that commands attention
- **Sophistication**: Elegant use of negative space and restraint
- **Professionalism**: Clean, sophisticated aesthetic for portfolio/SaaS context

### Core Principles

1. **Whitespace is a Feature**: Don't fear empty space - use it to improve readability and focus
2. **Typography-Driven**: The design relies on powerful typography more than decorative elements
3. **Color Minimalism**: Use a restricted palette (mostly grays, with strategic accent colors)
4. **Grid-Based**: Consistent, predictable layouts using clear grid systems
5. **Purposeful Motion**: Animations enhance, not distract
6. **Accessibility**: High contrast, readable typography, semantic HTML

---

## 2. Color Palette

### Primary Colors

| Name | Value | Usage | Hex |
|------|-------|-------|-----|
| **Deep Black** | RGB(34, 34, 34) | Primary text, headings | #222222 |
| **Dark Gray** | RGB(51, 51, 51) | Secondary text | #333333 |
| **Charcoal** | RGB(43, 43, 43) | Darker sections, emphasis | #2B2B2B |
| **Medium Gray** | RGB(123, 123, 123) | Body text, secondary content | #7B7B7B |
| **Light Gray** | RGB(175, 175, 175) | Disabled states, subtle text | #AFAFAF |
| **Very Light Gray** | RGB(243, 243, 243) | Backgrounds, subtle backgrounds | #F3F3F3 |
| **Off-White** | RGB(254, 254, 254) | Main backgrounds | #FEFEFE |
| **White** | RGB(255, 255, 255) | Primary background, cards | #FFFFFF |

### Accent Colors

| Name | Value | Usage | Hex |
|------|-------|-------|-----|
| **Cobalt Blue** | RGB(0, 0, 238) | Links, CTAs, active states | #0000EE |
| **Gradient Overlay** | rgba(34, 34, 34, 0.5) | Image overlays, modals | rgba(34, 34, 34, 0.5) |
| **White Overlay** | rgba(255, 255, 255, 0.3) | Hover effects, semi-transparent | rgba(255, 255, 255, 0.3) |

### Color Semantics

- **Text**: Use Deep Black (#222) for primary text, Dark Gray (#333) for secondary
- **Backgrounds**: Off-White (#FEFE) for body, Very Light Gray (#F3F3) for cards/sections
- **Interactive**: Cobalt Blue (#0000EE) for links and primary actions
- **Disabled**: Light Gray (#AFAFAF) for disabled elements
- **Shadows**: Use rgba(34, 34, 34, 0.1) to rgba(34, 34, 34, 0.3)

---

## 3. Typography System

### Font Stack

```css
body {
  font-family: 'Interdisplay', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Interdisplay', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}
```

### Font Scale

| Level | Size | Line Height | Weight | Letter Spacing | Usage |
|-------|------|-------------|--------|-----------------|-------|
| **Display 1** | 80px | 1.1 | 700 | -0.02em | Hero headings, main titles |
| **Display 2** | 48px | 1.15 | 700 | -0.02em | Section titles |
| **Heading 1** | 36px | 1.2 | 700 | -0.02em | Large headings |
| **Heading 2** | 32px | 1.2 | 700 | -0.02em | Subheadings |
| **Heading 3** | 29px | 1.25 | 600 | -0.01em | Card titles |
| **Heading 4** | 24px | 1.3 | 600 | -0.01em | Section subheadings |
| **Body Large** | 20px | 1.5 | 500 | 0em | Large body text |
| **Body Regular** | 19px | 1.6 | 500 | 0em | Standard body text |
| **Body Medium** | 17px | 1.6 | 500 | 0em | Secondary text, descriptions |
| **Body Small** | 16px | 1.6 | 400 | 0em | Caption text, footer content |

### Typography Principles

- **Hierarchy**: Use size and weight for visual hierarchy, not color
- **Line Length**: Keep body text to 60-80 characters per line (max 600px width)
- **Leading**: Generous line-height (1.5–1.6) for body text improves readability
- **Letter Spacing**: Subtle negative letter spacing in headings adds sophistication

---

## 4. Spacing Scale

### Spacing Units (Base: 8px)

```
Spacing values follow an 8px base unit system:

xs:  4px   (0.5 unit)
sm:  8px   (1 unit)
md:  16px  (2 units)
lg:  24px  (3 units)
xl:  32px  (4 units)
2xl: 48px  (6 units)
3xl: 64px  (8 units)
4xl: 96px  (12 units)
5xl: 128px (16 units)
```

### Applied Spacing

| Element | Padding | Margin | Notes |
|---------|---------|--------|-------|
| **Buttons** | 12px 24px | 8px | Small internal, moderate external |
| **Cards** | 24px-32px | 16px | Generous internal spacing |
| **Sections** | 64px-96px (vertical) | 0 | Large vertical sections |
| **Text Blocks** | 0 | 16px-24px | Space between text elements |
| **Icon + Text** | 8px | 0 | Minimal space between |
| **Form Fields** | 12px 16px | 16px | Comfortable input areas |

---

## 5. Grid & Layout System

### Container

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px; /* 24px on mobile, 48px on desktop */
}
```

### Breakpoints

```
Mobile:      320px - 767px
Tablet:      768px - 1023px
Desktop:     1024px - 1279px
Large:       1280px+
```

### Grid Columns

- **Mobile (320px)**: 1 column
- **Tablet (768px)**: 2 columns
- **Desktop (1024px)**: 3-4 columns (depending on component)
- **Large (1280px)**: 4-6 columns

### Section Layouts

1. **Full Width**: 100% with max-width container
2. **Centered**: Center content with margin auto
3. **Split**: 2-column layout (image + content)
4. **Grid**: 3-4 column grid for portfolios/testimonials
5. **Asymmetric**: Mixed column layouts for visual interest

---

## 6. Component Library

### Core Components

#### Buttons

- **Primary**: Deep Black background, White text, 12px × 24px padding
- **Secondary**: Very Light Gray background, Black text
- **Outline**: Transparent background, Black border
- **Link**: Inline, with arrow icon (↗) on hover
- **Icon**: Circular, 40px × 40px with icon inside

#### Cards

- **Project Card**: Image-heavy, rounded corners (8px-12px), text overlay or below
- **Stat Card**: Icon + large number + label, minimal styling
- **Experience Card**: Timeline format with company, role, dates, description
- **Testimonial Card**: Quote, author avatar, author name/title

#### Inputs

- **Text Field**: 12px × 16px padding, border: 1px solid #DDDDD, hover/focus states
- **Select**: Same styling as text field
- **Textarea**: Larger height, same padding

#### Navigation

- **Navbar**: Logo left, nav links center/right, hamburger menu on mobile
- **Breadcrumb**: Link / Link / Current
- **Pagination**: Numbers with active state, prev/next arrows

---

## 7. Navigation Structure

### Primary Navigation

```
Logo / Home
├── About
├── Portfolio / Work
├── Services / Skills
├── Blog / Insights
└── Contact
```

### Information Architecture

- **Homepage**: Hero + Featured Projects + About + CTA
- **About Page**: Bio + Skills + Timeline + Photo
- **Portfolio Page**: Filter + Grid of projects
- **Services Page**: Cards of services + CTAs
- **Contact Page**: Form + Contact info + Map
- **Footer**: Links, contact info, social media

---

## 8. Card Design Patterns

### Project Card (Horizontal)

```
┌─────────────────────────────────┐
│ [Image] │ Title                 │
│         │ Brief description     │
│         │ Tags / Category       │
│         │ [→ View Project]      │
└─────────────────────────────────┘
```

- Large image on left or top
- Title (H3, 24px)
- 1-2 line description
- Category tags in light gray
- Link with arrow icon

### Stat Card

```
┌──────────────┐
│ [Icon]       │
│              │
│ 320%         │
│ Metric Name  │
└──────────────┘
```

- Circular icon (40px)
- Large number (48px-80px)
- Metric label (16px-20px)
- Minimal borders

### Experience Card

```
┌─────────────────────────────────┐
│ Company Name                    │
│ Role Title                      │
│ Jan 2022 - Present              │
│                                 │
│ Brief description of role and   │
│ key responsibilities or impact. │
└─────────────────────────────────┘
```

- Company name (bold, 20px)
- Role title (16px)
- Date range (light gray, 14px)
- Description (body text, 16px)

---

## 9. Button Styling

### States

| State | Background | Text | Border | Notes |
|-------|------------|------|--------|-------|
| **Default** | #222222 | #FFFFFF | None | Primary action |
| **Hover** | #0000EE | #FFFFFF | None | Link color, elevation |
| **Active** | #000000 | #FFFFFF | None | Pressed state |
| **Disabled** | #AFAFAF | #F3F3F3 | None | Cursor not-allowed |
| **Focus** | #222222 | #FFFFFF | 2px solid #0000EE | Keyboard focus |

### Sizes

- **Small**: 10px × 16px, 14px font
- **Medium**: 12px × 24px, 16px font (default)
- **Large**: 16px × 32px, 18px font

### Button Text

- Use action verbs: "View Project", "Download", "Explore", "Learn More"
- Include arrow icon for navigation: "View Project →"
- Keep text short (1-2 words max)

---

## 10. Scroll Animations

### Timing

- **Standard Ease**: cubic-bezier(0.4, 0, 0.2, 1) — 300ms
- **Smooth Ease**: cubic-bezier(0.25, 0.46, 0.45, 0.94) — 600ms
- **Bounce**: cubic-bezier(0.34, 1.56, 0.64, 1) — 400ms

### Common Patterns

1. **Fade In**: Opacity 0 → 1, over 600ms
2. **Slide Up**: Transform translateY(40px) → translateY(0), over 600ms
3. **Parallax**: Transform translateY() based on scroll position
4. **Scale In**: Transform scale(0.95) → scale(1), over 500ms
5. **Stagger**: Chain animations with 100ms delay between elements

---

## 11. Page Load Animations

### Hero Section

- Hero text: Fade + slide up, staggered (100ms per line)
- Hero image: Fade + scale in, 800ms
- Stats: Fade in, 1000ms delay

### Other Sections

- Section title: Fade + slide up on enter, 600ms
- Cards: Fade + slide up on enter, staggered (100ms-150ms each)
- Images: Fade + parallax on scroll

### Animation Triggers

- Fade in below fold on scroll (Intersection Observer)
- Scale/rotate for interactive elements on hover
- Smooth transitions on all state changes (300-600ms)

---

## 12. Hover Effects

### Interactive Elements

| Element | Effect | Duration | Notes |
|---------|--------|----------|-------|
| **Links** | Text color → Blue (#0000EE), underline appears | 200ms | Smooth transition |
| **Buttons** | Background darker, slight scale (1.02), shadow | 200ms | Inviting feedback |
| **Cards** | Subtle shadow increase, slight lift (transform: translateY(-2px)) | 300ms | Depth feedback |
| **Images** | Slight zoom (1.02-1.05) or fade overlay | 300ms | Engagement signal |
| **Nav Links** | Underline appears from left to right | 200ms | Elegant feedback |
| **Project Cards** | Image darkens slightly, text becomes visible | 300ms | Reveal more info |

### Cursor States

- Default: Arrow
- Hover on links/buttons: Pointer (hand)
- Hover on draggable: Grab/Grabbing
- Loading: Progress/Wait

---

## 13. Responsive Breakpoints

### Mobile First Approach

```css
/* Mobile (320px - 767px) */
.element { font-size: 16px; padding: 16px; }

/* Tablet (768px - 1023px) */
@media (min-width: 768px) { 
  .element { font-size: 18px; padding: 24px; }
}

/* Desktop (1024px - 1279px) */
@media (min-width: 1024px) { 
  .element { font-size: 20px; padding: 32px; }
}

/* Large (1280px+) */
@media (min-width: 1280px) { 
  .element { font-size: 20px; padding: 48px; }
}
```

### Responsive Adjustments

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| **Hero Text** | 36px | 48px | 80px |
| **Heading** | 24px | 32px | 48px |
| **Body Text** | 16px | 18px | 19px |
| **Section Padding** | 24px | 48px | 64px-96px |
| **Card Layout** | Stack (1 col) | 2 columns | 3-4 columns |
| **Image Ratio** | 1:1 | 4:3 | 16:9 (varies) |

---

## 14. Implementation Tips

### CSS Architecture

- Use CSS Variables for colors, spacing, typography
- Follow BEM naming convention for classes
- Organize by component, not page
- Use Tailwind utility classes for rapid prototyping

### Performance

- Lazy load images (use `loading="lazy"`)
- Use `IntersectionObserver` for scroll animations
- Optimize images (AVIF, WebP, proper dimensions)
- Minimize CSS/JavaScript animations on mobile

### Accessibility

- Ensure 4.5:1 contrast ratio for text
- Use semantic HTML (headings, buttons, forms)
- Add `aria-labels` for icons and buttons
- Test with keyboard navigation
- Use `prefers-reduced-motion` media query

### Version Control

Keep this document updated as your design evolves. Reference this system in all component development to ensure consistency.
