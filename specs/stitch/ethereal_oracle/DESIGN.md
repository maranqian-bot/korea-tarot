---
name: Ethereal Oracle
colors:
  surface: '#121222'
  surface-dim: '#121222'
  surface-bright: '#38374a'
  surface-container-lowest: '#0c0c1d'
  surface-container-low: '#1a1a2b'
  surface-container: '#1e1e2f'
  surface-container-high: '#29283a'
  surface-container-highest: '#333345'
  on-surface: '#e3e0f8'
  on-surface-variant: '#cfc2d7'
  inverse-surface: '#e3e0f8'
  inverse-on-surface: '#2f2f40'
  outline: '#988ca0'
  outline-variant: '#4c4354'
  surface-tint: '#dcb8ff'
  primary: '#dcb8ff'
  on-primary: '#480081'
  primary-container: '#8a2be2'
  on-primary-container: '#eed9ff'
  inverse-primary: '#8422dc'
  secondary: '#ffaaf9'
  on-secondary: '#5a005f'
  secondary-container: '#96049d'
  on-secondary-container: '#ffaff9'
  tertiary: '#c6c6c6'
  on-tertiary: '#2f3131'
  tertiary-container: '#636464'
  on-tertiary-container: '#e2e1e1'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#efdbff'
  primary-fixed-dim: '#dcb8ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6700b5'
  secondary-fixed: '#ffd6f8'
  secondary-fixed-dim: '#ffaaf9'
  on-secondary-fixed: '#37003a'
  on-secondary-fixed-variant: '#7f0086'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#121222'
  on-background: '#e3e0f8'
  surface-variant: '#333345'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  title-md:
    fontFamily: Be Vietnam Pro
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 2rem
  margin-edge: 4rem
  section-gap: 8rem
  card-padding: 2.5rem
---

## Brand & Style

The design system is crafted to evoke a cinematic and mystical atmosphere, transporting users into a surreal dark fantasy dreamworld. The brand personality is enigmatic yet regal, positioning the platform as a luxurious gateway to cosmic wisdom. 

The visual style is a sophisticated blend of **Glassmorphism** and **High-Contrast Modern**. It utilizes translucent, frosted surfaces that appear to float over deep celestial backgrounds. Every interaction is designed to feel like a micro-manifestation of magic, using subtle glows, "bloom" effects, and ethereal depth. The target audience seeks a premium, immersive experience that feels more like an editorial exploration of destiny than a functional utility.

## Colors

The palette is anchored in a **Dark Mode** aesthetic, drawing from the depths of the night sky. 

- **Primaries & Secondaries:** We use a spectrum of Royal Purples and Neon Violets for interactive elements. Soft Pink glows serve as "spiritual energy" highlights.
- **Neutrals:** The base is a Deep Midnight Blue, nearly black, to provide maximum contrast for glowing elements.
- **Highlights:** Moonlight Silver and pure White are used sparingly for fine lines, filigree, and high-contrast typography.
- **Gradients:** Avoid solid fills. Use radial and linear gradients that mimic cosmic nebulae, transitioning from deep indigo to vibrant violet.

## Typography

Typography functions as a bridge between the historical mystery of divination and modern luxury.

- **Headlines:** Use high-contrast serif typography to create a literary, authoritative feel. For Korean text, ensure generous tracking and line-height to maintain a "cinematic" breathing room.
- **UI & Body:** A clean, geometric sans-serif ensures readability against complex, glowing backgrounds. 
- **Hierarchy:** Display sizes should be impactful, often used with subtle text-shadows (soft violet) to ensure they "pop" from the background.

## Layout & Spacing

The layout follows a **Fluid Grid** model with significant emphasis on negative space to emphasize the "void" of the cosmos.

- **Desktop:** A 12-column system with wide 32px gutters. Content should feel centered and purposeful, often utilizing asymmetrical placements to mimic star charts.
- **Rhythm:** Use an 8px base unit, but lean towards larger increments (24px, 48px, 64px) to maintain a premium, non-cluttered feel.
- **Safe Zones:** High-fidelity imagery (crystal balls, floating cards) should occupy dedicated "hero" zones with ample padding to prevent UI elements from feeling cramped.

## Elevation & Depth

Depth is conveyed through **Glassmorphism** and light physics rather than traditional shadows.

- **Surface Layers:** Use `backdrop-filter: blur(20px)` on all containers. Background colors for these containers should be semi-transparent indigos.
- **Luminosity:** Instead of black shadows, use "Bloom Shadows"—diffused outer glows using the primary violet or secondary pink colors (`box-shadow: 0 0 30px rgba(188, 19, 254, 0.3)`).
- **Z-Index Strategy:** Lower levels are darker and more blurred. Higher levels (modals, active cards) are clearer, have brighter borders, and stronger bloom effects.

## Shapes

The shape language is organic and refined. 

- **Corners:** Standard UI components use a 0.5rem (8px) radius, while larger cards and featured panels use 1.5rem (24px) for a softer, more modern look.
- **Borders:** Surfaces are defined by thin 1px "moonlight" borders (low-opacity silver) or subtle gradient strokes that glow at the corners.
- **Circles:** Circular elements (progress rings, icons) are used frequently to represent the cycles of fate and celestial bodies.

## Components

### Glassmorphic Cards
Cards feature a frosted glass texture with a 1px inner border. Hovering on a card triggers a "surge" effect where the border luminosity increases and a soft radial glow follows the cursor.

### Celestial Buttons
Primary buttons use a deep-to-vibrant violet gradient. They should have a subtle "pulsing" bloom effect. Secondary buttons are outlined in silver with a ghost-blur background.

### Form Inputs
Inputs are dark and recessed. Upon focus, the border transitions into a neon violet glow, and the placeholder text floats upward with a slight silver shimmer.

### Progress & Score Indicators
Fortune results are displayed in concentric circular rings. Use thin, glowing lines that animate "drawing" the circle when the result is revealed.

### Mystical Iconography
Icons must be "Line Art" style using moonlight silver. Incorporate celestial motifs (crescents, stars, sparkles) into functional icons (e.g., a "Search" icon with a small star at the center of the lens).

### Tarot & Card States
Tarot cards should include a "gold filigree" border effect. When selected, the card should scale slightly and emit a soft pink light from beneath.