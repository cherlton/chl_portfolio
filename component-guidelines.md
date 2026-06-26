# Component Guidelines

## Introduction

This document defines reusable component patterns for the portfolio design system. Each component includes:
- Visual structure
- Props/variants
- Accessibility requirements
- Implementation notes
- Common use cases

---

## Components

### 1. Button Component

#### Variants

```jsx
// Primary (Default)
<Button>Click Me</Button>

// Secondary
<Button variant="secondary">Click Me</Button>

// Outline
<Button variant="outline">Click Me</Button>

// Link
<Button variant="link">Learn More →</Button>

// Icon Only
<Button icon="download" size="lg" />
```

#### Specifications

| Property | Value |
|----------|-------|
| **Default Size** | 12px × 24px padding, 16px font |
| **Border Radius** | 4px (subtle) or 8px (more rounded) |
| **Font Weight** | 600 (semi-bold) |
| **Text Transform** | Sentence case (not uppercase) |
| **Min Width** | 100px (for clickability) |
| **Cursor** | pointer |

#### Variants Details

```css
/* Primary */
.btn-primary {
  background: #222222;
  color: #ffffff;
  border: 2px solid #222222;
}
.btn-primary:hover {
  background: #0000ee;
  border-color: #0000ee;
}

/* Secondary */
.btn-secondary {
  background: #f3f3f3;
  color: #222222;
  border: 2px solid #f3f3f3;
}
.btn-secondary:hover {
  background: #e6e6e6;
  border-color: #e6e6e6;
}

/* Outline */
.btn-outline {
  background: transparent;
  color: #222222;
  border: 2px solid #222222;
}
.btn-outline:hover {
  background: #222222;
  color: #ffffff;
}

/* Link */
.btn-link {
  background: transparent;
  color: #0000ee;
  border: none;
  text-decoration: underline;
  padding: 0;
}
.btn-link:hover {
  color: #222222;
}
```

#### States

```css
/* Hover */
button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(34, 34, 34, 0.15);
  transition: all 200ms ease-in-out;
}

/* Active/Pressed */
button:active {
  transform: translateY(0);
}

/* Disabled */
button:disabled {
  background: #afafaf;
  color: #f3f3f3;
  cursor: not-allowed;
  opacity: 0.6;
}

/* Focus */
button:focus-visible {
  outline: 2px solid #0000ee;
  outline-offset: 2px;
}
```

#### Accessibility

- [ ] Has visible text or aria-label for icon-only buttons
- [ ] Supports keyboard navigation (Tab key)
- [ ] Has focus visible state (outline)
- [ ] Has proper color contrast (4.5:1 minimum)
- [ ] Not clickable when disabled

#### Usage Example

```jsx
import Button from '@/components/Button';

export default function CallToAction() {
  return (
    <div className="cta-section">
      <Button variant="primary">Get Started</Button>
      <Button variant="outline">Learn More</Button>
    </div>
  );
}
```

---

### 2. Card Component

#### Variants

```jsx
// Project Card
<Card type="project">
  <Card.Image src="project.jpg" />
  <Card.Title>Project Name</Card.Title>
  <Card.Description>Brief description</Card.Description>
  <Card.Tags tags={['React', 'Design']} />
  <Card.Link href="/project">View Project →</Card.Link>
</Card>

// Experience Card
<Card type="experience">
  <Card.Company>Company Name</Card.Company>
  <Card.Role>Role Title</Card.Role>
  <Card.DateRange from="Jan 2022" to="Present" />
  <Card.Description>Role description and impact</Card.Description>
</Card>

// Stat Card
<Card type="stat">
  <Card.Icon name="trending-up" />
  <Card.StatNumber>320%</Card.StatNumber>
  <Card.StatLabel>Metric Name</Card.StatLabel>
</Card>
```

#### Specifications

| Property | Value |
|----------|-------|
| **Background** | #ffffff |
| **Border** | 1px solid #f3f3f3 (subtle) |
| **Border Radius** | 8px - 12px |
| **Padding** | 24px - 32px |
| **Shadow** | 0 2px 8px rgba(34, 34, 34, 0.05) |
| **Shadow on Hover** | 0 12px 24px rgba(34, 34, 34, 0.15) |

#### Project Card Structure

```
┌─────────────────────────────────┐
│ [Image - 16:9 ratio]            │
├─────────────────────────────────┤
│ Project Title (H3, 24px)        │
│ Brief description (1-2 lines)   │
│                                 │
│ [Tag] [Tag] [Tag]               │
│                                 │
│ View Project →                  │
└─────────────────────────────────┘
```

Implementation:
```jsx
<Card type="project">
  <Card.Image 
    src="project.jpg" 
    alt="Project thumbnail"
    loading="lazy"
  />
  <div className="card-content">
    <h3 className="card-title">Project Title</h3>
    <p className="card-description">
      This is a brief description of the project...
    </p>
    <div className="card-tags">
      <Tag>React</Tag>
      <Tag>Design</Tag>
    </div>
    <a href="/project" className="card-link">
      View Project →
    </a>
  </div>
</Card>
```

#### Experience Card Structure

```
┌─────────────────────────────────┐
│ Company Name (Bold, 20px)       │
│ Role Title (16px)               │
│ Jan 2022 - Present (gray)       │
│                                 │
│ Brief description of role,      │
│ responsibilities, and impact... │
└─────────────────────────────────┘
```

#### Stat Card Structure

```
┌──────────────┐
│   [Icon]     │
│   320%       │
│ Metric Name  │
└──────────────┘
```

#### States

```css
.card {
  transition: all 300ms ease-smooth;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(34, 34, 34, 0.15);
}

.card.active {
  border-color: #0000ee;
  box-shadow: 0 0 0 2px rgba(0, 0, 238, 0.1);
}
```

#### Accessibility

- [ ] Image has descriptive alt text
- [ ] Heading hierarchy is correct (h3 for titles)
- [ ] Links are keyboard accessible
- [ ] Links have visible focus state
- [ ] Color not sole differentiator

---

### 3. Input Component

#### Variants

```jsx
// Text Input
<Input type="text" placeholder="Enter text..." />

// Email Input
<Input type="email" placeholder="your@email.com" />

// Textarea
<Input type="textarea" rows={6} placeholder="Your message..." />

// Select
<Input type="select">
  <option>Option 1</option>
  <option>Option 2</option>
</Input>

// With Label & Error
<Input 
  label="Email" 
  error="Invalid email format"
  value={email}
  onChange={handleChange}
/>
```

#### Specifications

```css
input, textarea, select {
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  font-family: inherit;
  background: #ffffff;
  color: #222222;
  transition: all 200ms ease-in-out;
}

input::placeholder {
  color: #afafaf;
}
```

#### States

```css
/* Default */
input {
  border-color: #ddd;
  background: #ffffff;
}

/* Focus */
input:focus {
  outline: none;
  border-color: #0000ee;
  box-shadow: 0 0 0 3px rgba(0, 0, 238, 0.1);
}

/* Hover */
input:hover:not(:focus) {
  border-color: #aaa;
}

/* Disabled */
input:disabled {
  background: #f3f3f3;
  color: #afafaf;
  cursor: not-allowed;
}

/* Error */
input.error {
  border-color: #ff0000;
  background: rgba(255, 0, 0, 0.03);
}

/* Success */
input.success {
  border-color: #00aa00;
  background: rgba(0, 170, 0, 0.03);
}
```

#### Accessibility

- [ ] Inputs have associated labels
- [ ] Error messages are linked with aria-describedby
- [ ] Form has clear focus indicators
- [ ] Errors are announced to screen readers
- [ ] Placeholder is NOT the only instruction

Example:
```jsx
<label htmlFor="email">Email Address</label>
<Input 
  id="email" 
  type="email" 
  aria-describedby="email-error"
/>
<span id="email-error" className="error-message">
  Please enter a valid email
</span>
```

---

### 4. Navigation Bar Component

#### Structure

```
┌─────────────────────────────────────────────────┐
│ [Logo] │ Link Link Link Link │ [CTA Button]    │
└─────────────────────────────────────────────────┘
```

#### Specifications

| Property | Value |
|----------|-------|
| **Background** | #ffffff with subtle border |
| **Height** | 64px - 80px |
| **Logo Size** | 40px × 40px |
| **Position** | Sticky at top |
| **Z-Index** | 1000 |
| **Links Spacing** | 24px - 32px between items |

#### Mobile Menu

```
┌─────────────────────────┐
│ ☰ Menu                  │
└─────────────────────────┘
  │ Link 1
  │ Link 2
  │ Link 3
  │ [CTA Button]
```

#### Implementation

```jsx
<nav className="navbar">
  <Link href="/" className="navbar-logo">
    <img src="logo.svg" alt="Logo" />
  </Link>
  
  <div className="navbar-links">
    <a href="/about">About</a>
    <a href="/portfolio">Portfolio</a>
    <a href="/contact">Contact</a>
  </div>
  
  <Button variant="primary" size="sm">Get In Touch</Button>
  
  <button className="navbar-toggle" aria-label="Menu">
    ☰
  </button>
</nav>
```

#### Sticky Behavior

```css
nav.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid #f3f3f3;
}

/* Reduce shadow when scrolled */
nav.scrolled {
  box-shadow: 0 2px 8px rgba(34, 34, 34, 0.05);
}
```

#### Accessibility

- [ ] Links have proper semantic markup
- [ ] Mobile menu has ARIA labels
- [ ] Logo links to homepage
- [ ] Logo has alt text or is hidden from screen readers
- [ ] Active link is marked with aria-current="page"

---

### 5. Section Component

#### Structure

```jsx
<Section id="about" className="about-section">
  <Section.Subtitle>About Me</Section.Subtitle>
  <Section.Title>I'm a Product Designer</Section.Title>
  <Section.Description>
    Multi-line description about what I do...
  </Section.Description>
  
  <Section.Content>
    {/* Section content */}
  </Section.Content>
</Section>
```

#### Specifications

```css
.section {
  padding: 64px 24px;
  max-width: 1280px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .section {
    padding: 96px 48px;
  }
}

.section-subtitle {
  font-size: 14px;
  color: #7b7b7b;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-subtitle::before {
  content: '';
  width: 8px;
  height: 8px;
  background: #222222;
  border-radius: 50%;
}

.section-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.15;
}

.section-description {
  font-size: 18px;
  color: #7b7b7b;
  max-width: 600px;
  margin-bottom: 48px;
  line-height: 1.6;
}
```

#### Variants

```jsx
// Light background
<Section variant="light">

// Dark background
<Section variant="dark">

// With background image
<Section backgroundImage="url(bg.jpg)">
```

#### Accessibility

- [ ] Has unique heading hierarchy
- [ ] Sections have semantic landmark roles
- [ ] Sufficient color contrast in all text
- [ ] Skip navigation links available

---

### 6. Tag/Badge Component

#### Variants

```jsx
<Tag>React</Tag>
<Tag variant="secondary">Design</Tag>
<Tag icon="check">Completed</Tag>
<Tag dismissible onDismiss={handleDismiss}>
  Technology
</Tag>
```

#### Specifications

```css
.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #f3f3f3;
  color: #222222;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}

.tag-secondary {
  background: #efefef;
  border-color: #e0e0e0;
}
```

#### Accessibility

- [ ] Dismissible tags have proper button semantics
- [ ] Icons have aria-labels if necessary
- [ ] Sufficient contrast ratio maintained

---

### 7. Icon Component

#### Specifications

```jsx
<Icon name="arrow-right" size="24px" color="#222222" />
```

Supported sizes: 16px, 20px, 24px, 32px, 40px

#### Common Icons

- arrow-right (→)
- arrow-up (↑)
- chevron-down (∨)
- check (✓)
- x (✕)
- menu (☰)
- close (×)
- download
- share
- external-link

#### Usage

```jsx
// Inline with text
<a href="/project">
  View Project <Icon name="arrow-right" />
</a>

// Standalone
<Icon name="github" size="32px" role="img" aria-label="GitHub" />

// Colored
<Icon name="heart" color="#ff0000" />
```

---

### 8. Hero Component

#### Structure

```jsx
<Hero>
  <Hero.Text>
    <Hero.Heading>Welcome to My Portfolio</Hero.Heading>
    <Hero.Subheading>
      I design products people love
    </Hero.Subheading>
  </Hero.Text>
  
  <Hero.Image src="profile.jpg" alt="Profile photo" />
  
  <Hero.Stats>
    <Stat number="200+" label="Projects" />
    <Stat number="50+" label="Clients" />
  </Hero.Stats>
</Hero>
```

#### Specifications

```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 24px;
  gap: 48px;
}

.hero-heading {
  font-size: 80px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 24px;
}

.hero-subheading {
  font-size: 24px;
  color: #7b7b7b;
  margin-bottom: 48px;
  line-height: 1.4;
}

.hero-image {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  object-fit: cover;
}
```

#### Animations

- Hero text: Fade + slide up, staggered
- Hero image: Fade + scale in
- Stats: Fade in with delay

---

## Summary Table

| Component | Purpose | Variants | Common Props |
|-----------|---------|----------|--------------|
| **Button** | Call-to-action, form submission | Primary, secondary, outline, link | variant, size, disabled, onClick |
| **Card** | Content containers | Project, experience, stat | type, children, className |
| **Input** | Form fields | Text, email, textarea, select | type, value, onChange, error |
| **Navbar** | Site navigation | Sticky, mobile | active, onNavigate |
| **Section** | Page sections | Light, dark | variant, id, children |
| **Tag** | Labels & categories | Default, secondary | dismissible, icon, children |
| **Icon** | Visual indicators | Various names | name, size, color, aria-label |
| **Hero** | Hero section | None | children |

---

## Best Practices

### Consistency
- Use the same component across pages for similar functionality
- Maintain consistent naming and prop interfaces
- Update components centrally, not per-page

### Performance
- Lazy load components when possible
- Use React.memo for expensive renders
- Optimize images and SVGs

### Accessibility
- Always include proper labels and ARIA attributes
- Test with keyboard navigation
- Ensure focus management
- Use semantic HTML

### Responsive Design
- Design mobile-first
- Test at all breakpoints
- Use flexible layouts (flexbox, grid)
- Scale typography proportionally

---

## Component Checklist

When creating a new component, ensure:

- [ ] Visual design matches system
- [ ] Props are clearly documented
- [ ] Accessibility requirements met
- [ ] Responsive on all breakpoints
- [ ] Keyboard navigable
- [ ] Color contrast ≥ 4.5:1
- [ ] Loading states defined
- [ ] Error states defined
- [ ] Hover/focus states defined
- [ ] Performance optimized
- [ ] Styled consistently with system
- [ ] Documented with examples

