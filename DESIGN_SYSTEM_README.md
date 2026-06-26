# Design System Implementation Guide

## Overview

This portfolio design system is inspired by the Finox design language. It emphasizes minimalism, clarity, and sophisticated typography with a restrained color palette. All design artifacts are documented here for consistent implementation.

## 📁 Design System Files

### 1. [design-system.md](./design-system.md)
**Comprehensive design philosophy and specifications**

Covers:
- Design philosophy & principles
- Complete color palette with usage guidelines
- Typography system & font scale
- Spacing scale (8px base unit)
- Grid & layout system with breakpoints
- Component library overview
- Navigation structure
- Card design patterns
- Button styling guide
- Scroll & page load animations
- Hover effects
- Responsive breakpoints

**When to use:** Reference this for high-level design decisions, color selections, and understanding the overall design language.

---

### 2. [animation-specification.md](./animation-specification.md)
**Detailed animation specs with code examples**

Covers:
- Animation principles
- Easing functions & timing standards
- Page load animation sequences
- Scroll-triggered animations
- Hover & focus animations
- Form animations & validation
- Micro-interactions
- Loading states & skeleton screens
- Accessibility (prefers-reduced-motion)
- Performance optimization tips
- Testing guidelines

**When to use:** Reference when implementing any animated feature. Includes copy-paste code snippets for common animations.

---

### 3. [component-guidelines.md](./component-guidelines.md)
**Individual component specifications & usage**

Documents:
- **Button**: Variants, states, accessibility
- **Card**: Project, experience, stat cards
- **Input**: Form fields with validation states
- **Navigation Bar**: Structure and mobile handling
- **Section**: Page section containers
- **Tag/Badge**: Labels and categories
- **Icon**: Icon usage patterns
- **Hero**: Hero section structure

**When to use:** Reference when building individual components. Each section includes JSX examples and CSS specifications.

---

### 4. [tailwind.config.js](./tailwind.config.js)
**Tailwind CSS configuration with design tokens**

Includes:
- Color palette (Finox grays, blues, semantics)
- Typography scale & font families
- Spacing system (8px base unit)
- Border radius scale
- Shadow system
- Animation keyframes & easing
- Letter spacing scale

**When to use:** Use Tailwind utility classes directly in JSX. All design tokens are available via class names.

---

## 🎨 Design Tokens Quick Reference

### Colors

```tsx
// Gray scale (most used)
className="text-gray-900"   // Deep black (#222)
className="text-gray-600"   // Medium gray (#7b7b)
className="bg-gray-50"      // Off-white (#fefe)
className="bg-gray-100"     // Very light (#f3f3)

// Accent
className="text-blue-primary"  // Cobalt blue (#0000ee)

// Semantic
className="text-success"    // Green
className="text-error"      // Red
```

### Typography

```tsx
// Sizes (use font-* classes)
className="text-7xl"  // 80px (hero)
className="text-6xl"  // 48px (section title)
className="text-5xl"  // 36px (heading)
className="text-lg"   // 19px (body)
className="text-sm"   // 16px (small text)

// Families
className="font-display"  // Geometric, bold headings
className="font-body"     // Standard body text
```

### Spacing

```tsx
// All values are multiples of 8px
className="p-3"   // 24px padding
className="m-2"   // 16px margin
className="gap-4" // 32px gap
className="mt-6"  // 48px margin-top
```

### Animations

```tsx
// CSS animations
className="animate-fadeSlideUp"
className="animate-fadeScale"
className="animate-scalePulse"

// Easing functions
transition: 'cubic-bezier(0.4, 0, 0.2, 1)'
```

---

## 🚀 Implementation Workflow

### Step 1: Understand the System
1. Read **design-system.md** to understand the overall philosophy
2. Familiarize yourself with the color palette and typography scale
3. Review the component library overview

### Step 2: Plan Your Page/Component
1. Sketch the layout using the grid system
2. Choose typography sizes from the scale
3. Select colors from the palette
4. Plan any animations needed

### Step 3: Build with Tailwind
1. Use Tailwind utility classes for styling
2. Reference **component-guidelines.md** for component patterns
3. Use colors/spacing/typography from `tailwind.config.js`

### Step 4: Add Animations
1. Reference **animation-specification.md** for animation patterns
2. Use keyframes from `tailwind.config.js`
3. Implement with Intersection Observer for scroll triggers

### Step 5: Review
- [ ] Colors match the palette
- [ ] Typography follows the scale
- [ ] Spacing uses 8px multiples
- [ ] Animations are smooth & performant
- [ ] Accessibility requirements met
- [ ] Responsive on all breakpoints

---

## 📊 Color Palette Summary

| Usage | Color | Hex |
|-------|-------|-----|
| Primary Text | Deep Black | #222222 |
| Secondary Text | Medium Gray | #7b7b7b |
| Backgrounds | Off-White | #fefefe |
| Light Sections | Very Light Gray | #f3f3f3 |
| Links/CTAs | Cobalt Blue | #0000ee |
| Borders | Light Gray | #ddd |

---

## 🔤 Typography Summary

| Level | Size | Use |
|-------|------|-----|
| Display 1 | 80px | Hero headings |
| Display 2 | 48px | Section titles |
| Heading 1 | 36px | Large headings |
| Body Large | 20px | Important text |
| Body Regular | 19px | Standard text |
| Body Small | 16px | Captions |

---

## 📦 Common Component Patterns

### Hero Section
```jsx
<section className="min-h-screen flex items-center justify-between px-6 py-20 gap-12">
  <div>
    <h1 className="text-7xl font-bold mb-6">Welcome</h1>
    <p className="text-lg text-gray-600 max-w-lg">Description here</p>
  </div>
  <img src="image.jpg" alt="Hero" className="w-96 rounded" />
</section>
```

### Card
```jsx
<div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all">
  <img src="img.jpg" alt="" className="w-full rounded mb-4" />
  <h3 className="text-2xl font-bold mb-2">Title</h3>
  <p className="text-gray-600 mb-4">Description</p>
  <a href="#" className="text-blue-primary hover:underline">
    View →
  </a>
</div>
```

### Button
```jsx
<button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-blue-primary transition-all">
  Get Started
</button>
```

### Section
```jsx
<section className="py-24 px-6 max-w-5xl mx-auto">
  <div className="flex items-center gap-2 mb-4">
    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
    <span className="text-sm uppercase tracking-wider text-gray-600">About</span>
  </div>
  <h2 className="text-5xl font-bold mb-6">Section Title</h2>
  {/* Content */}
</section>
```

---

## ✨ Animation Patterns

### Fade In on Scroll
```jsx
import { useEffect, useRef } from 'react';

export function FadeInOnScroll({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeSlideUp');
      }
    });
    observer.observe(ref.current);
  }, []);

  return <div ref={ref} className="opacity-0">{children}</div>;
}
```

### Button Hover Effect
```jsx
<button className="
  bg-gray-900 text-white px-6 py-3 rounded
  hover:bg-blue-primary
  hover:shadow-lg
  hover:-translate-y-0.5
  transition-all duration-200
">
  Hover Me
</button>
```

### Staggered List Animation
```jsx
{items.map((item, i) => (
  <div
    key={i}
    style={{
      animation: `fadeSlideUp 600ms ease-out ${i * 100}ms both`,
    }}
  >
    {item}
  </div>
))}
```

---

## ♿ Accessibility Checklist

- [ ] All text has 4.5:1 contrast ratio minimum
- [ ] Links have visible focus states
- [ ] Buttons have proper semantic markup
- [ ] Images have descriptive alt text
- [ ] Forms have labels for all inputs
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Keyboard navigation works throughout
- [ ] Color is never the only differentiator

---

## 📱 Responsive Breakpoints

```
Mobile:      sm (350px)
Tablet:      md (768px)
Desktop:     lg (1024px)
Large:       xl (1280px)
Extra Large: 2xl (1536px)
```

**Mobile-first approach**: Style for mobile first, then add `md:`, `lg:`, etc. for larger screens.

```jsx
className="text-4xl md:text-5xl lg:text-6xl"    // Responsive text
className="px-4 md:px-8 lg:px-12"               // Responsive padding
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"  // Responsive grid
```

---

## 🎯 Design Principles (Remember These)

1. **Whitespace is a Feature** — Use generous spacing to improve clarity
2. **Typography First** — Design relies on powerful typography, not decoration
3. **Color Minimalism** — Stick to the palette; resist adding new colors
4. **Grid-Based** — Everything aligns to the 8px grid
5. **Purposeful Motion** — Animations enhance, not distract
6. **Accessibility First** — Build accessible components from the start

---

## 📚 Further Reading

- [Finox.webflow.io](https://finox.webflow.io) — Original inspiration
- [Tailwind CSS Docs](https://tailwindcss.com/docs) — Utility-first CSS reference
- [MDN Web Docs](https://developer.mozilla.org) — HTML/CSS/JS reference

---

## 🔄 Updating the System

When you add a new:

- **Color**: Add to `tailwind.config.js` colors object
- **Typography Style**: Add to fontSize scale
- **Animation**: Add keyframe + animation to `tailwind.config.js`
- **Component**: Document in `component-guidelines.md`
- **Pattern**: Document in `design-system.md`

Keep this system living and evolving with your portfolio!

---

**Last Updated:** 2026-06-24
**System Version:** 1.0
**Inspired By:** Finox Design Language
