# Complete Animation & Motion Specification for Monito AI Website
## Comprehensive Technical Prompt for AI Implementation

---

## Document Overview
This document provides a complete, detailed specification of all animations, transitions, and motion characteristics for the Monito AI website, starting from the **Features (Bento Grid) Section** through the **Final CTA Section**. Each section includes:
- **Layout & Structure**: Grid systems, alignment, spacing
- **Motion Characteristics**: Framer Motion configurations, timing, easing
- **Interaction States**: Hover, focus, active states
- **Visual Effects**: Gradients, glows, blur effects
- **Responsive Behavior**: Mobile, tablet, desktop adaptations

---

## SECTION 5: FEATURES (BENTO GRID) SECTION

### 5.1 Section Container
**Location**: `#features` ID, positioned after "How It Works"
**Layout**: 
- Max-width: `100rem` (1600px)
- Padding: `py-32 px-6` (128px vertical, 24px horizontal)
- Background: Solid dark background `#0D1117`
- Overflow: Hidden to contain decorative elements

**Background Decoration**:
- Positioned absolutely at top-right
- Dimensions: `800px × 800px`
- Color: Primary color with 5% opacity (`bg-primary/5`)
- Blur effect: `blur-[150px]`
- Pointer events: None (non-interactive)
- Z-index: Below content

### 5.2 Section Header
**Structure**: Flex container with responsive direction
- Desktop (md+): `flex-row` with `justify-between items-end`
- Mobile: `flex-col` with `gap-8`
- Margin bottom: `mb-20`

**Left Content (Title)**:
- Component: `AnimatedReveal` wrapper
- Font: `font-heading` (Space Grotesk)
- Size: `text-4xl` (mobile) → `text-6xl` (desktop)
- Weight: Bold (`font-bold`)
- Color: White with gradient accent
  - Primary text: White
  - Accent word "Unleashed": Gradient from secondary (`#F97316`) to primary (`#64FFDA`)
  - Gradient direction: Left to right
- Line breaks: "Intelligence" on first line, "Unleashed" on second
- Animation: Fade-in + slide-up on scroll into view
  - Opacity: 0 → 1
  - Transform: `translateY(40px)` → `translateY(0)`
  - Duration: 1000ms
  - Easing: `ease-out`
  - Delay: 0ms

**Right Content (Description)**:
- Component: `AnimatedReveal` wrapper with 200ms delay
- Font: `font-paragraph` (Roboto)
- Size: `text-lg`
- Color: Gray-400 (`text-gray-400`)
- Max-width: `max-w-md`
- Text alignment: Right on desktop, left on mobile
- Animation: Same as title but with 200ms additional delay
  - Opacity: 0 → 1
  - Transform: `translateY(40px)` → `translateY(0)`
  - Duration: 1000ms
  - Easing: `ease-out`
  - Delay: 200ms

### 5.3 Bento Grid Layout
**Grid Structure**:
- Mobile: `grid-cols-1` (single column)
- Tablet (md): `grid-cols-2` (two columns)
- Desktop (lg): `grid-cols-3` (three columns)
- Gap: `gap-6` (24px between items)

**Grid Item Sizing**:
- Default: Single cell (1 column)
- First item (index 0): `md:col-span-2` (spans 2 columns on tablet+)
- Fourth item (index 3): `md:col-span-2` (spans 2 columns on tablet+)
- Other items: Standard single-cell layout

**Grid Item Animation**:
- Component: `AnimatedReveal` wrapper
- Delay: `index * 50` (staggered: 0ms, 50ms, 100ms, 150ms, etc.)
- Animation:
  - Opacity: 0 → 1
  - Transform: `translateY(40px)` → `translateY(0)`
  - Duration: 1000ms
  - Easing: `ease-out`
  - Delay: Staggered per index

### 5.4 Feature Card Component (GlowingCard)
**Container Structure**:
- Border: `border border-white/10` (white with 10% opacity)
- Background: `bg-white/5` (white with 5% opacity)
- Overflow: Hidden
- Padding: `p-8` (32px)
- Border radius: `rounded-2xl` (16px)
- Min-height: `min-h-[300px]`
- Display: Flex column with space-between
- Z-index: 10 (relative positioning)

**Hover State - Glow Effect**:
- Trigger: Mouse movement over card
- Effect: Dynamic radial gradient following cursor
  - Gradient type: Radial
  - Radius: 650px circle
  - Center: Follows mouse position (`${mouseX}px ${mouseY}px`)
  - Color: Primary with 15% opacity (`rgba(100, 255, 218, 0.15)`)
  - Falloff: Transparent at 80%
  - Opacity: 0 (default) → 100 (on hover)
  - Transition: 300ms duration
  - Position: Absolute, `-inset-px` (extends beyond border)
  - Border radius: `rounded-xl` (12px)
  - Pointer events: None

**Mouse Tracking Implementation**:
- Event: `onMouseMove`
- Calculation: Get card bounding rect, calculate relative mouse position
- Update: Use `useMotionValue` to set `mouseX` and `mouseY`
- Effect: Smooth cursor-following glow

### 5.5 Feature Card Content
**Icon Section**:
- Container: `p-3 bg-white/5 rounded-lg border border-white/10`
- Icon: Zap icon (Lucide React)
- Color: Primary (`text-primary`)
- Size: `w-6 h-6`
- Margin bottom: `mb-6`
- Position: Flex with `justify-between items-start`

**Badge (for new features)**:
- Condition: Render if `feature.isNew === true`
- Style: `px-3 py-1 rounded-full`
- Background: Secondary with 20% opacity (`bg-secondary/20`)
- Text: Secondary color (`text-secondary`)
- Font: Bold, extra small (`text-xs font-bold`)
- Border: Secondary with 20% opacity (`border border-secondary/20`)
- Position: Top-right of card

**Title**:
- Font: `font-heading` (Space Grotesk)
- Size: `text-2xl`
- Weight: Bold
- Color: White
- Margin bottom: `mb-3`

**Description**:
- Font: `font-paragraph` (Roboto)
- Color: Gray-400
- Line height: Relaxed (`leading-relaxed`)

**Learn More Link** (if available):
- Condition: Render if `feature.learnMoreUrl` exists
- Container: `mt-8 pt-6 border-t border-white/5`
- Link styling:
  - Font size: Small (`text-sm`)
  - Color: White (default) → Primary (hover)
  - Display: Flex with gap-2
  - Transition: 300ms color change
  - Icon: ArrowRight (14px)

### 5.6 Feature Card Interaction States
**Default State**:
- Border: White with 10% opacity
- Background: White with 5% opacity
- Glow: Hidden (opacity 0)

**Hover State**:
- Border: Unchanged
- Background: Unchanged
- Glow: Visible (opacity 100) with cursor-following effect
- Transition: 300ms ease

**Focus State** (keyboard navigation):
- Same as hover state
- Outline: None (glow replaces default focus)

---

## SECTION 6: USE CASES (SPLIT VIEW) SECTION

### 6.1 Section Container
**Location**: `#use-cases` ID, positioned after Features
**Layout**:
- Max-width: `100rem` (1600px)
- Padding: `py-32 px-6` (128px vertical, 24px horizontal)
- Background: Slightly lighter dark (`#161b22`)
- Border: Top and bottom (`border-y border-white/5`)
- Overflow: Visible

### 6.2 Section Header
**Structure**: Centered text block
- Text alignment: Center
- Margin bottom: `mb-20`

**Title**:
- Component: `AnimatedReveal` wrapper
- Font: `font-heading` (Space Grotesk)
- Size: `text-4xl` (mobile) → `text-5xl` (desktop)
- Weight: Bold
- Color: White
- Margin bottom: `mb-6`
- Animation:
  - Opacity: 0 → 1
  - Transform: `translateY(40px)` → `translateY(0)`
  - Duration: 1000ms
  - Easing: `ease-out`
  - Delay: 0ms

**Subtitle**:
- Font: `font-paragraph`
- Size: Base
- Color: Gray-400
- Animation: Same as title

### 6.3 Use Case Items Layout
**Container**:
- Space between items: `space-y-24` (96px vertical gap)

**Individual Use Case**:
- Component: `AnimatedReveal` wrapper
- Layout: Flex column (mobile) → Flex row (desktop)
- Gap: `gap-16` (64px)
- Alignment: Center items vertically
- Direction: Alternating
  - Even index (0, 2, 4...): Normal left-to-right
  - Odd index (1, 3, 5...): Reverse (`lg:flex-row-reverse`)
- Animation:
  - Opacity: 0 → 1
  - Transform: `translateY(40px)` → `translateY(0)`
  - Duration: 1000ms
  - Easing: `ease-out`
  - Delay: 0ms (all items animate together)

### 6.4 Use Case Content (Left/Right Column)
**Icon Badge**:
- Container: `p-4 rounded-2xl bg-primary/10 border border-primary/20`
- Icon: Terminal (Lucide React)
- Size: `w-8 h-8`
- Color: Primary
- Margin bottom: `mb-4`

**Title**:
- Font: `font-heading`
- Size: `text-3xl` (mobile) → `text-4xl` (desktop)
- Weight: Bold
- Color: White
- Margin bottom: `mb-8` (from parent space-y-8)

**Description Points**:
- Container: `space-y-4` (16px gap between points)
- Individual point:
  - Layout: Flex with gap-4
  - Padding: `p-4`
  - Border radius: `rounded-xl`
  - Background: White with 5% opacity (`bg-white/5`)
  - Border: White with 5% opacity (default) → Primary with 30% opacity (hover)
  - Transition: 300ms color change
  - Icon: Check mark (Lucide React)
    - Size: `w-5 h-5`
    - Color: Primary
    - Margin top: `mt-1` (align with text)
    - Flex shrink: 0 (prevent shrinking)
  - Text: Gray-300
  - Hover effect: Border color change with smooth transition

### 6.5 Use Case Image (Right/Left Column)
**Container**:
- Aspect ratio: Video (16:9)
- Border radius: `rounded-2xl`
- Overflow: Hidden
- Border: White with 10% opacity
- Shadow: Large shadow with primary glow
  - `shadow-2xl` (large shadow)
  - `group` class for hover effects
- Width: Full (`w-full`)

**Image**:
- Component: Image component from `@/components/ui/image`
- Object fit: Cover
- Opacity: 90% (default) → 100% (hover)
- Transform: Scale 1 (default) → Scale 1.05 (hover)
- Transition: 700ms ease
- Fallback: Default illustration if not provided

**Overlay Gradient** (on hover):
- Position: Absolute, full inset
- Background: Gradient from primary with 20% opacity to transparent
- Direction: Top-right (`to-tr`)
- Opacity: 0 (default) → 100 (hover)
- Transition: 300ms ease
- Z-index: 10 (above image)

---

## SECTION 7: TESTIMONIALS (MASONRY) SECTION

### 7.1 Section Container
**Location**: Positioned after Use Cases
**Layout**:
- Max-width: `100rem` (1600px)
- Padding: `py-32 px-6` (128px vertical, 24px horizontal)
- Background: Default dark (`#0D1117`)
- Border: None
- Overflow: Visible

### 7.2 Section Header
**Title**:
- Component: `AnimatedReveal` wrapper
- Font: `font-heading`
- Size: `text-4xl`
- Weight: Bold
- Color: White
- Margin bottom: `mb-16` (64px)
- Animation:
  - Opacity: 0 → 1
  - Transform: `translateY(40px)` → `translateY(0)`
  - Duration: 1000ms
  - Easing: `ease-out`
  - Delay: 0ms

### 7.3 Testimonials Grid
**Grid Structure**:
- Mobile: `grid-cols-1` (single column)
- Tablet (md): `grid-cols-2` (two columns)
- Desktop (lg): `grid-cols-3` (three columns)
- Gap: `gap-8` (32px)
- Display: Only first 3 testimonials (`.slice(0, 3)`)

**Grid Item Animation**:
- Component: `AnimatedReveal` wrapper
- Delay: `index * 100` (staggered: 0ms, 100ms, 200ms)
- Animation:
  - Opacity: 0 → 1
  - Transform: `translateY(40px)` → `translateY(0)`
  - Duration: 1000ms
  - Easing: `ease-out`
  - Delay: Staggered per index

### 7.4 Testimonial Card
**Container**:
- Height: Full (`h-full`)
- Padding: `p-8` (32px)
- Border radius: `rounded-2xl` (16px)
- Background: Slate with 30% opacity (`bg-[#1E293B]/30`)
- Border: White with 10% opacity
- Backdrop: Blur effect (`backdrop-blur-sm`)
- Hover state:
  - Background: Slate with 50% opacity (`bg-[#1E293B]/50`)
  - Transition: 300ms color change

**Rating Stars**:
- Container: Flex with gap-1, margin bottom `mb-6`
- Icon: Zap (Lucide React) - used as star alternative
- Size: `w-4 h-4`
- Color: Secondary (`text-secondary`)
- Fill: Solid (`fill-secondary`)
- Count: Based on `testimonial.rating` (default 5)

**Quote**:
- Font: `font-paragraph`
- Size: `text-lg`
- Color: Gray-300
- Margin bottom: `mb-8` (32px)
- Line height: Relaxed (`leading-relaxed`)
- Formatting: Wrapped in quotation marks

**Author Section**:
- Container: Flex with gap-4, padding top `pt-6`, border top `border-t border-white/5`
- Avatar:
  - Size: `w-10 h-10`
  - Border radius: Full circle
  - Background: Gradient from primary to blue-500
  - Display: Flex, centered
  - Content: First letter of author name
  - Text: Black, bold
- Author info:
  - Name: Bold, white
  - Title/Company: Small, gray-500

---

## SECTION 8: PRICING SECTION

### 8.1 Section Container
**Location**: `#pricing` ID, positioned after Testimonials
**Layout**:
- Max-width: `100rem` (1600px)
- Padding: `py-32 px-6` (128px vertical, 24px horizontal)
- Background: Dark (`#0D1117`)
- Border: None
- Overflow: Visible

### 8.2 Section Header
**Container**: Centered text block
- Text alignment: Center
- Margin bottom: `mb-20` (80px)

**Title**:
- Font: `font-heading`
- Size: `text-4xl` (mobile) → `text-6xl` (desktop)
- Weight: Bold
- Color: White
- Margin bottom: `mb-6` (24px)
- Animation: Fade-in + slide-up on scroll
  - Opacity: 0 → 1
  - Transform: `translateY(40px)` → `translateY(0)`
  - Duration: 1000ms
  - Easing: `ease-out`
  - Delay: 0ms

**Subtitle**:
- Font: `font-paragraph`
- Color: Gray-400
- Animation: Same as title

### 8.3 Pricing Cards Grid
**Grid Structure**:
- Mobile: `grid-cols-1` (single column)
- Tablet (md): `grid-cols-3` (three columns)
- Gap: `gap-8` (32px)
- Max-width: `max-w-7xl`
- Alignment: `items-start` (cards align to top)

**Grid Item Animation**:
- Component: `AnimatedReveal` wrapper
- Delay: `index * 100` (staggered: 0ms, 100ms, 200ms)
- Animation:
  - Opacity: 0 → 1
  - Transform: `translateY(40px)` → `translateY(0)`
  - Duration: 1000ms
  - Easing: `ease-out`
  - Delay: Staggered per index

### 8.4 Pricing Card
**Container**:
- Height: Full (`h-full`)
- Padding: `p-8` (32px)
- Border radius: `rounded-2xl` (16px)
- Display: Flex column
- Position: Relative
- Transition: All properties, 300ms duration

**Most Popular Card Styling**:
- Background: Slate with 40% opacity (`bg-[#1E293B]/40`)
- Border: Primary color
- Shadow: Glow effect
  - `shadow-[0_0_40px_rgba(100,255,218,0.1)]`
- Scale: 1.05 (105% size)
- Z-index: 10 (above other cards)

**Standard Card Styling**:
- Background: Slate with 20% opacity (`bg-[#1E293B]/20`)
- Border: White with 10% opacity (default) → White with 20% opacity (hover)
- Shadow: None
- Scale: 1 (default)
- Z-index: 0

**Most Popular Badge**:
- Condition: Render if `plan.isMostPopular === true`
- Position: Absolute, top center
  - `absolute -top-4 left-1/2 -translate-x-1/2`
- Padding: `px-4 py-1`
- Background: Primary
- Text: Black, extra small, bold, uppercase
- Border radius: Full (`rounded-full`)
- Letter spacing: Wider

**Card Content**:
- Margin bottom: `mb-8` (32px)

**Plan Name**:
- Font: `font-heading`
- Size: `text-xl`
- Weight: Bold
- Color: White
- Margin bottom: `mb-2` (8px)

**Price**:
- Container: Flex with baseline alignment, gap-1
- Amount:
  - Size: `text-4xl`
  - Weight: Bold
  - Color: White
- Unit:
  - Color: Gray-500
  - Format: `/{unit}` (e.g., "/month")

**Description**:
- Font: `font-paragraph`
- Size: Small
- Color: Gray-400
- Margin top: `mt-4` (16px)

**Features List**:
- Container: `space-y-4` (16px gap)
- Margin bottom: `mb-8` (32px)
- Flex grow: 1 (pushes button to bottom)
- Individual feature:
  - Layout: Flex with gap-3
  - Font size: Small
  - Color: Gray-300
  - Icon: Check mark
    - Size: `w-4 h-4`
    - Color: Primary
    - Margin top: `mt-0.5` (align with text)
    - Flex shrink: 0

**CTA Button**:
- Width: Full (`w-full`)
- Padding: `py-4` (16px vertical)
- Border radius: `rounded-lg` (8px)
- Font: Bold
- Text alignment: Center
- Transition: All properties
- Most popular variant:
  - Background: Primary
  - Text: Black
  - Hover: Primary with 90% opacity
- Standard variant:
  - Background: White with 10% opacity
  - Text: White
  - Hover: White with 20% opacity

---

## SECTION 9: FAQ SECTION

### 9.1 Section Container
**Location**: `#faq` ID, positioned after Pricing
**Layout**:
- Max-width: `max-w-3xl` (768px)
- Padding: `py-32 px-6` (128px vertical, 24px horizontal)
- Background: Default dark (`#0D1117`)
- Border: Top (`border-t border-white/5`)
- Overflow: Visible

### 9.2 Section Header
**Title**:
- Font: `font-heading`
- Size: `text-3xl` (mobile) → `text-4xl` (desktop)
- Weight: Bold
- Color: White
- Text alignment: Center
- Margin bottom: `mb-12` (48px)

### 9.3 Accordion Container
**Structure**: Shadcn/ui Accordion component
- Type: Single (only one item open at a time)
- Collapsible: True (can close all items)
- Space between items: `space-y-4` (16px)

### 9.4 Accordion Item
**Container**:
- Border: White with 10% opacity
- Background: White with 2% opacity (`bg-white/[0.02]`)
- Border radius: `rounded-lg` (8px)
- Padding: `px-4` (16px horizontal)
- Overflow: Hidden

**Trigger (Question)**:
- Font: Medium weight
- Color: White (default) → Primary (hover)
- Text alignment: Left
- Padding: `py-6` (24px vertical)
- Transition: 300ms color change
- Icon: Terminal (Lucide React)
  - Size: 16px
  - Color: Gray-500
  - Margin right: Gap-3 (12px)
- Layout: Flex with gap-3

**Content (Answer)**:
- Font: `font-paragraph`
- Color: Gray-400
- Padding bottom: `pb-6` (24px)
- Padding left: `pl-9` (36px) - aligns with icon
- Line height: Relaxed (`leading-relaxed`)
- Animation: Smooth expand/collapse
  - Framer Motion handles this via Accordion component
  - Duration: 300ms (default)
  - Easing: Ease-out

### 9.5 Accordion Interaction States
**Default State**:
- Trigger: White text
- Content: Hidden
- Icon: Gray-500

**Hover State** (trigger):
- Trigger text: Primary color
- Transition: 300ms

**Open State**:
- Trigger: Primary color
- Content: Visible with smooth expand animation
- Icon: Rotates (handled by Accordion component)

---

## SECTION 10: FINAL CTA SECTION

### 10.1 Section Container
**Location**: Final section before footer
**Layout**:
- Max-width: `max-w-4xl` (1024px)
- Padding: `py-32 px-6` (128px vertical, 24px horizontal)
- Background: Gradient
  - Direction: Top to bottom
  - From: Dark (`#0D1117`)
  - To: Slate (`#1E293B`)
- Overflow: Hidden
- Position: Relative

### 10.2 Background Decorations
**Gradient Overlay**:
- Position: Absolute, full inset
- Background: Gradient from dark to slate
- Z-index: 0 (behind content)

**Texture Overlay**:
- Position: Absolute, full inset
- Background: Cubes pattern (transparent texture)
- Opacity: 30%
- Mix blend mode: Overlay
- Z-index: 0

**Content Z-index**: 10 (above backgrounds)

### 10.3 Content Structure
**Container**: Centered text block
- Text alignment: Center
- Position: Relative, z-index 10

**Title**:
- Component: `AnimatedReveal` wrapper
- Font: `font-heading`
- Size: `text-5xl` (mobile) → `text-7xl` (desktop)
- Weight: Bold
- Color: White
- Margin bottom: `mb-8` (32px)
- Animation:
  - Opacity: 0 → 1
  - Transform: `translateY(40px)` → `translateY(0)`
  - Duration: 1000ms
  - Easing: `ease-out`
  - Delay: 0ms

**Description**:
- Font: `font-paragraph`
- Size: `text-xl`
- Color: Gray-400
- Margin bottom: `mb-12` (48px)
- Max-width: `max-w-2xl`

**CTA Buttons Container**:
- Layout: Flex column (mobile) → Flex row (sm+)
- Alignment: Center
- Gap: `gap-6` (24px)
- Component: `AnimatedReveal` wrapper (wraps entire button group)

**Primary Button**:
- Padding: `px-10 py-5` (40px horizontal, 20px vertical)
- Background: Primary
- Text: Black, bold
- Font size: Large (`text-lg`)
- Border radius: `rounded-lg` (8px)
- Shadow: Glow effect
  - `shadow-[0_0_30px_rgba(100,255,218,0.3)]`
- Hover state:
  - Transform: Scale 1.05 (105%)
  - Transition: 300ms ease

**Secondary Button**:
- Padding: `px-10 py-5` (40px horizontal, 20px vertical)
- Background: Transparent
- Text: White
- Font size: Large (`text-lg`)
- Border: White with 20% opacity
- Border radius: `rounded-lg` (8px)
- Hover state:
  - Background: White with 5% opacity
  - Transition: 300ms ease

---

## ANIMATION TIMING & EASING REFERENCE

### Global Animation Defaults
- **Reveal animations**: 1000ms duration, `ease-out` easing
- **Hover transitions**: 300ms duration, `ease` easing
- **Scroll animations**: Triggered by `IntersectionObserver` at 10% threshold
- **Stagger delays**: 50-100ms between items

### Framer Motion Configurations
**Scroll Progress Spring**:
```
stiffness: 100
damping: 30
restDelta: 0.001
```

**Scroll Indicator Animation**:
```
y: [0, 10, 0]
repeat: Infinity
duration: 2000ms
```

**Cursor-Following Glow**:
```
opacity: 0 → 100 (on hover)
transition: 300ms
```

---

## RESPONSIVE BREAKPOINTS

### Mobile (< 768px)
- Single column layouts
- Full-width padding: 24px
- Smaller font sizes (text-3xl → text-4xl for headings)
- Flex column for split layouts
- Simplified animations (reduced complexity)

### Tablet (768px - 1024px)
- Two-column layouts
- Moderate padding: 24px
- Medium font sizes
- Flex row with wrapping
- Full animations enabled

### Desktop (> 1024px)
- Three-column layouts
- Larger padding: 24px-48px
- Larger font sizes
- Flex row with no wrapping
- All animations at full complexity

---

## COLOR PALETTE REFERENCE

### Primary Colors
- **Primary**: `#64FFDA` (Cyan/Turquoise)
- **Secondary**: `#F97316` (Orange)
- **Background**: `#0D1117` (Dark Navy)
- **Foreground**: `#FFFFFF` (White)

### Opacity Variants
- **10%**: `white/10`, `primary/10`, `secondary/10`
- **20%**: `white/20`, `primary/20`, `secondary/20`
- **30%**: `white/30`, `primary/30`, `secondary/30`
- **50%**: `white/50`, `primary/50`, `secondary/50`

### Neutral Colors
- **Gray-300**: Light gray text
- **Gray-400**: Medium gray text
- **Gray-500**: Muted gray text
- **Slate-300**: Light slate
- **Slate-500**: Medium slate

---

## ACCESSIBILITY CONSIDERATIONS

### Color Contrast
- All text meets WCAG AA standards (4.5:1 minimum for normal text)
- Primary color (`#64FFDA`) on dark background: 8.2:1 contrast ratio
- White text on dark background: 21:1 contrast ratio

### Focus States
- All interactive elements have visible focus states
- Glow effects replace default focus outlines
- Keyboard navigation fully supported

### Motion Preferences
- Animations respect `prefers-reduced-motion` media query
- Critical animations can be disabled for accessibility
- All information conveyed by motion also available statically

### Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- Semantic sections with IDs for navigation
- Alt text on all images
- ARIA labels where needed

---

## PERFORMANCE OPTIMIZATION

### Animation Optimization
- Use `transform` and `opacity` for GPU acceleration
- Avoid animating `width`, `height`, `left`, `right`
- Use `will-change` sparingly for heavy animations
- Debounce scroll events

### Rendering Performance
- Lazy load images below the fold
- Use `backdrop-filter` with caution (performance impact)
- Limit blur effects to critical elements
- Use CSS transforms instead of position changes

### Bundle Size
- Framer Motion: ~40KB gzipped
- Lucide React icons: ~15KB gzipped
- Total animation library overhead: ~55KB

---

## IMPLEMENTATION CHECKLIST

### Features Section
- [ ] Bento grid layout with responsive columns
- [ ] GlowingCard component with cursor-following effect
- [ ] Feature cards with hover glow
- [ ] Staggered animation on scroll
- [ ] New badge styling
- [ ] Learn more links

### Use Cases Section
- [ ] Split view layout with alternating direction
- [ ] Image hover effects (scale + overlay)
- [ ] Description points with hover border change
- [ ] Icon badges
- [ ] Responsive mobile layout

### Testimonials Section
- [ ] Three-column grid layout
- [ ] Rating stars using Zap icons
- [ ] Author avatars with gradient
- [ ] Card hover effects
- [ ] Staggered animation

### Pricing Section
- [ ] Three-column pricing cards
- [ ] Most popular card styling with scale
- [ ] Feature list with checkmarks
- [ ] CTA buttons with variant styling
- [ ] Responsive mobile layout

### FAQ Section
- [ ] Accordion component integration
- [ ] Smooth expand/collapse animation
- [ ] Icon styling
- [ ] Hover state on triggers
- [ ] Responsive layout

### Final CTA Section
- [ ] Gradient background
- [ ] Texture overlay
- [ ] Centered content
- [ ] Button styling and hover effects
- [ ] Animation on scroll

---

## NOTES FOR AI IMPLEMENTATION

1. **Data Binding**: All content is fetched from CMS collections via `BaseCrudService`
2. **Component Reusability**: `AnimatedReveal` and `GlowingCard` are utility components used throughout
3. **Framer Motion**: Used for scroll-based animations and complex interactions
4. **Tailwind CSS**: All styling uses Tailwind utility classes
5. **Responsive Design**: Mobile-first approach with breakpoints at 768px (md) and 1024px (lg)
6. **Accessibility**: All animations are optional and don't block content access
7. **Performance**: Animations use GPU-accelerated properties (transform, opacity)
8. **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge) with CSS Grid and Flexbox support

---

## CONCLUSION

This comprehensive specification provides complete details for implementing all animations and motion characteristics for the Monito AI website's remaining sections. Each section includes layout structure, animation timing, interaction states, and responsive behavior. The specification is designed to be implementable by AI tools while maintaining design consistency and performance standards.
