# Animation Specification

## 1. Animation Principles

- **Purpose-Driven**: Every animation should enhance UX or provide feedback
- **Performant**: Use `transform` and `opacity` for GPU acceleration
- **Consistent**: Follow the timing and easing standards
- **Accessible**: Respect `prefers-reduced-motion` preference
- **Subtle**: Avoid overanimation; let motion feel natural and organic

---

## 2. Easing Functions

### Standard Eases

```css
/* Smooth deceleration - most common for UI */
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);

/* Fast start, slow end - for entrances */
--ease-ease-in: cubic-bezier(0.25, 0.1, 0.25, 1);

/* Slow start, fast end - for exits */
--ease-ease-out: cubic-bezier(0.0, 0, 0.58, 1);

/* Both slow - for attention */
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);

/* Bouncy - for playful interactions */
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

/* Linear - for continuous motion */
--ease-linear: linear;
```

### Usage

- **Entrances**: `ease-out` or `smooth`
- **Exits**: `ease-in`
- **Continuous**: `linear` or `smooth`
- **Hover/Focus**: `ease-in-out`
- **Playful**: `bounce`

---

## 3. Timing Standards

| Duration | Use Case | Example |
|----------|----------|---------|
| **150ms** | Very fast feedback | Button press, toggle |
| **200ms** | Fast feedback | Link hover, icon change |
| **300ms** | Standard interaction | Button background, card hover |
| **500ms** | Noticeable motion | Page transitions |
| **600ms** | Smooth entrance | Fade + slide on scroll |
| **800ms** | Dramatic entrance | Hero animations |
| **1000ms+** | Very slow motion | Background parallax, looping |

---

## 4. Page Load Animations

### Hero Section Sequence

```javascript
// Staggered animation for hero text
const lines = document.querySelectorAll('.hero h1');
lines.forEach((line, i) => {
  line.style.animation = `fadeSlideUp 600ms ease-out ${i * 100}ms both`;
});

// Hero image fades in and scales
const heroImage = document.querySelector('.hero img');
heroImage.style.animation = 'fadeScale 800ms ease-out 200ms both';

// Stats fade in after image
const stats = document.querySelectorAll('.stat-card');
stats.forEach((stat, i) => {
  stat.style.animation = `fadeIn 600ms ease-out ${1000 + i * 100}ms both`;
});
```

### Keyframe Definitions

```css
/* Fade + Slide Up */
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade + Scale */
@keyframes fadeScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Fade Only */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Scale Pulse */
@keyframes scalePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

---

## 5. Scroll Animations

### Fade In on Scroll

```javascript
// Trigger animation when element enters viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-fade').forEach(el => observer.observe(el));
```

```css
.scroll-fade {
  opacity: 0;
  transform: translateY(40px);
}

.scroll-fade.fade-in {
  animation: fadeSlideUp 600ms ease-out forwards;
}
```

### Parallax Effect

```javascript
// Simple parallax on scroll
window.addEventListener('scroll', () => {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  parallaxElements.forEach((el) => {
    const yOffset = window.pageYOffset;
    const speed = el.dataset.parallax || 0.5;
    el.style.transform = `translateY(${yOffset * speed}px)`;
  });
});
```

Usage:
```html
<img src="bg.jpg" data-parallax="0.5" class="parallax-bg" />
```

---

## 6. Hover & Focus Animations

### Button Hover

```css
button {
  background: #222222;
  color: #ffffff;
  transition: all 200ms ease-in-out;
}

button:hover {
  background: #0000ee;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(34, 34, 34, 0.15);
}

button:active {
  transform: translateY(0);
}
```

### Card Hover

```css
.card {
  transition: all 300ms ease-smooth;
  box-shadow: 0 2px 8px rgba(34, 34, 34, 0.05);
}

.card:hover {
  box-shadow: 0 12px 24px rgba(34, 34, 34, 0.15);
  transform: translateY(-4px);
}
```

### Link Underline Animation

```css
a {
  position: relative;
  text-decoration: none;
  color: #222222;
}

a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #0000ee;
  transition: width 300ms ease-out;
}

a:hover::after {
  width: 100%;
}
```

### Icon Rotation

```css
.icon-arrow {
  display: inline-block;
  transition: transform 200ms ease-in-out;
}

a:hover .icon-arrow {
  transform: rotate(45deg) translateX(2px) translateY(-2px);
}
```

---

## 7. Form Animations

### Input Focus State

```css
input, textarea, select {
  border: 1px solid #ddd;
  transition: all 200ms ease-in-out;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: #0000ee;
  box-shadow: 0 0 0 3px rgba(0, 0, 238, 0.1);
  transform: scale(1.01);
}
```

### Form Validation

```css
input.error {
  border-color: #ff0000;
  animation: shake 300ms ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

input.success {
  border-color: #00aa00;
  background: rgba(0, 170, 0, 0.05);
}
```

---

## 8. Loading & Skeleton States

### Skeleton Loader

```css
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 0%,
    #f9f9f9 50%,
    #f0f0f0 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
  border-radius: 8px;
}
```

### Spinner

```css
@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f0f0f0;
  border-top-color: #0000ee;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

---

## 9. Micro-Interactions

### Checkbox Animation

```css
input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}

input[type="checkbox"]:checked {
  background: #0000ee;
  border-color: #0000ee;
}

input[type="checkbox"]:checked::before {
  content: '✓';
  color: white;
  font-size: 14px;
  line-height: 1;
}
```

### Badge Animation

```css
.badge {
  display: inline-block;
  padding: 4px 8px;
  background: #f3f3f3;
  border-radius: 20px;
  font-size: 12px;
  animation: badgePop 300ms ease-out;
}

@keyframes badgePop {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) rotate(5deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}
```

---

## 10. Accessibility

### Respect Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Focus Indicators

```css
:focus-visible {
  outline: 2px solid #0000ee;
  outline-offset: 2px;
  border-radius: 4px;
}

button:focus-visible {
  box-shadow: 0 0 0 3px rgba(0, 0, 238, 0.25);
}
```

---

## 11. Performance Optimization

### Use GPU Acceleration

```css
/* ✅ Performant: Uses GPU */
.animated {
  animation: slideUp 600ms ease-out;
}

@keyframes slideUp {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* ❌ Bad: Causes reflow */
.animated {
  animation: slideUp 600ms ease-out;
}

@keyframes slideUp {
  from { margin-top: 40px; }
  to { margin-top: 0; }
}
```

### Debounce Scroll Events

```javascript
let ticking = false;

function updateAnimations() {
  // Update animations
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateAnimations);
    ticking = true;
  }
});
```

### Lazy Load Animations

```javascript
// Only animate elements in viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-animate]').forEach(el => {
  observer.observe(el);
});
```

---

## 12. Testing Animations

### Use Browser DevTools

1. **Slow Down Motion**: DevTools → Rendering → slow down animations
2. **Disable GPU**: DevTools → Rendering → disable GPU rasterization
3. **Check Performance**: DevTools → Performance tab → record animation

### Test Scenarios

- [ ] Animations complete within expected timeframe
- [ ] No jank or stuttering on 60fps
- [ ] Smooth on mobile and desktop
- [ ] Respect `prefers-reduced-motion`
- [ ] Works without JavaScript (CSS fallback)
- [ ] Accessible keyboard navigation

---

## Implementation Example

```html
<!-- HTML -->
<section class="hero">
  <h1 class="hero-title">Welcome</h1>
  <img src="hero.jpg" class="hero-image" alt="Hero" />
</section>

<!-- CSS -->
<style>
  @media (prefers-reduced-motion: no-preference) {
    .hero-title {
      animation: fadeSlideUp 600ms ease-out;
    }

    .hero-image {
      animation: fadeScale 800ms ease-out 200ms both;
    }
  }
</style>

<!-- JavaScript (Optional) -->
<script>
  // Trigger animations on scroll if needed
  const hero = document.querySelector('.hero');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  });
  observer.observe(hero);
</script>
```

---

## Quick Reference

| Animation | Duration | Easing | Trigger | Use Case |
|-----------|----------|--------|---------|----------|
| Fade In | 600ms | ease-out | Page load / scroll | Entrance |
| Slide Up | 600ms | ease-out | Scroll | Content reveal |
| Scale In | 500ms | ease-out | Page load | Image entrance |
| Hover Lift | 200ms | ease-in-out | Hover | Card/button feedback |
| Color Change | 200ms | ease-in-out | Hover/focus | Link/button state |
| Parallax | Continuous | linear | Scroll | Background depth |
| Skeleton Shimmer | 2s | linear | Loading | Placeholder |
| Fade Out | 300ms | ease-in | Exit | Page leave |

