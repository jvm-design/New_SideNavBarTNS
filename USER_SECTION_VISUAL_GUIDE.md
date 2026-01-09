# 👤 User Section - Visual Interaction Guide

## 🎯 Overview

This guide demonstrates the **visual states and interactions** of the updated User Section, now fully compliant with TNS design specifications.

---

## 🎨 Visual States Breakdown

### State 1: INACTIVE (Default)

```
┌────────────────────────────────────────┐
│                                        │
│  ⚪ JD  John Doe                       │
│         john@example.com               │
│                                        │
└────────────────────────────────────────┘
```

**Visual Characteristics:**
- **Avatar**: 
  - Size: 40x40px
  - No ring (transparent)
  - Normal scale (100%)
  - No shadow
  - Gradient: Purple to Pink

- **Name Text**: 
  - Color: `rgba(255, 255, 255, 0.7)` (70% white)
  - Font: 14px medium

- **Email Text**: 
  - Color: `rgba(255, 255, 255, 0.4)` (40% white) ⭐ TNS
  - Font: 12px regular

- **Background**: 
  - Color: `rgba(15, 23, 42, 0.5)` (slate-800/50)
  - No gradient overlay

- **Border**: 
  - Top: 1px solid `rgb(51, 65, 85)` (slate-700)

- **Chevron**: 
  - Hidden (`opacity: 0`)
  - Shifted left (`translateX: -8px`)

**User Perception**: "This is a profile display, but it might be clickable"

---

### State 2: HOVER

```
┌────────────────────────────────────────┐
│        ✨ Subtle Violet Glow ✨        │
│  🔵 JD  John Doe                    ›  │
│         john@example.com               │
│  Ring   Scaled                  Hint   │
└────────────────────────────────────────┘
```

**Visual Characteristics:**
- **Avatar**: 
  - Ring: `rgba(255, 255, 255, 0.1)` (10% white ring)
  - Scale: `102%` (subtle growth)
  - Shadow: None yet
  - **Transition**: 300ms Apple spring curve

- **Name Text**: 
  - Color: `rgba(255, 255, 255, 0.9)` (90% white)
  - Brightens smoothly
  - **Transition**: 300ms

- **Email Text**: 
  - Color: `rgba(255, 255, 255, 0.6)` (60% white)
  - Brightens from 40% → 60%
  - **Transition**: 300ms

- **Background**: 
  - Color: `rgba(15, 23, 42, 0.7)` (slate-800/70)
  - **Gradient Overlay**: `opacity: 0.5` (50%)
    - Type: Radial from center
    - Color: `rgba(139, 92, 246, 0.1)` (TNS Violet)
    - Creates subtle purple glow

- **Border**: 
  - Top: 1px solid `rgba(255, 255, 255, 0.07)` (7% white)
  - Brightens from gray

- **Chevron**: 
  - Visible (`opacity: 0.4`) (40%)
  - Slides to center (`translateX: 0`)
  - Size: 16px
  - Stroke: 1.5px ⭐ TNS
  - **Transition**: 300ms with slide animation

**User Perception**: "This is definitely interactive! I can click it."

---

### State 3: ACTIVE (Selected)

```
┌────────────────────────────────────────┐
│       ✨✨ Full Violet Glow ✨✨       │
│  🔵💫 JD  John Doe                  ›  │
│          john@example.com              │
│  Ring+   Scaled+  Shadow     Visible   │
│  Shadow  105%                          │
└────────────────────────────────────────┘
```

**Visual Characteristics:**
- **Avatar**: 
  - Ring: `rgba(255, 255, 255, 0.2)` (20% white ring) - **Prominent**
  - Scale: `105%` (noticeable growth)
  - Shadow: `shadow-lg` (large shadow for depth)
  - **Transition**: 300ms Apple spring curve

- **Name Text**: 
  - Color: `rgba(255, 255, 255, 1.0)` (100% white) ⭐ TNS
  - Maximum brightness
  - **Transition**: 300ms

- **Email Text**: 
  - Color: `rgba(255, 255, 255, 0.7)` (70% white) ⭐ TNS
  - Clear visibility
  - **Transition**: 300ms

- **Background**: 
  - Color: `rgba(15, 23, 42, 0.8)` (slate-800/80)
  - **Gradient Overlay**: `opacity: 1.0` (100%)
    - Type: Radial from center
    - Color: `rgba(139, 92, 246, 0.1)` (TNS Violet)
    - Creates full purple glow effect

- **Border**: 
  - Top: 1px solid `rgba(255, 255, 255, 0.1)` (10% white)
  - Clear white border

- **Chevron**: 
  - Fully visible (`opacity: 1.0`) (100%)
  - Centered (`translateX: 0`)
  - Size: 16px
  - Stroke: 1.5px ⭐ TNS
  - Color: Pure white
  - **Transition**: 300ms

**User Perception**: "This is the active/selected item. I'm viewing my profile."

---

## 🎬 Animation Sequences

### Inactive → Hover (On Mouse Enter)

**Timeline (300ms total)**:

```
0ms:    Inactive state
        ↓
50ms:   Chevron starts sliding in from left
        Avatar ring begins to appear
        Text starts brightening
        Gradient overlay fades in
        ↓
150ms:  Chevron at 50% opacity, halfway to center
        Avatar ring at 50% strength
        Text at mid-brightness
        Gradient at 25% opacity
        ↓
250ms:  Chevron at 90% opacity, almost centered
        Avatar ring almost full strength
        Text almost at hover brightness
        Gradient at 45% opacity
        ↓
300ms:  Hover state complete
        ✓ Chevron at 40% opacity, centered
        ✓ Avatar ring at 10% white
        ✓ Avatar scaled to 102%
        ✓ Text at hover colors
        ✓ Gradient at 50% opacity
```

**Easing**: Apple spring curve `cubic-bezier(0.23, 1, 0.32, 1)`
- Starts fast
- Smooth deceleration
- Natural, organic feel

---

### Hover → Active (On Click)

**Timeline (300ms total)**:

```
0ms:    Hover state
        ↓
50ms:   Avatar ring strengthens
        Avatar starts scaling up
        Shadow begins to appear
        Text brightens more
        Gradient intensifies
        Chevron brightens
        ↓
150ms:  Avatar ring at 15% white
        Avatar at 103% scale
        Shadow at 50% strength
        Text at 85% of active brightness
        Gradient at 75% opacity
        Chevron at 70% opacity
        ↓
250ms:  Avatar ring at 18% white
        Avatar at 104.5% scale
        Shadow at 90% strength
        Text almost at full brightness
        Gradient at 95% opacity
        Chevron at 95% opacity
        ↓
300ms:  Active state complete
        ✓ Avatar ring at 20% white
        ✓ Avatar scaled to 105%
        ✓ Shadow at full strength
        ✓ Text at active colors (100% & 70%)
        ✓ Gradient at 100% opacity
        ✓ Chevron at 100% opacity
```

**Easing**: Apple spring curve `cubic-bezier(0.23, 1, 0.32, 1)`
- Smooth acceleration
- Gentle overshoot feel
- Settles naturally

---

### Active → Inactive (On Click Elsewhere)

**Timeline (300ms total)**:

```
0ms:    Active state
        ↓
50ms:   Chevron starts fading
        Avatar ring weakens
        Avatar starts shrinking
        Shadow fades
        Text dims
        Gradient fades
        ↓
150ms:  Chevron at 50% opacity
        Avatar ring at 10% white
        Avatar at 102.5% scale
        Shadow at 50% strength
        Text at mid-brightness
        Gradient at 50% opacity
        ↓
250ms:  Chevron at 10% opacity, starting to shift left
        Avatar ring at 2% white
        Avatar at 101% scale
        Shadow almost gone
        Text almost at inactive brightness
        Gradient at 10% opacity
        ↓
300ms:  Inactive state complete
        ✓ Chevron hidden, shifted left
        ✓ Avatar ring transparent
        ✓ Avatar at normal scale
        ✓ No shadow
        ✓ Text at inactive colors (70% & 40%)
        ✓ Gradient hidden
```

**Easing**: Apple spring curve `cubic-bezier(0.23, 1, 0.32, 1)`
- Smooth deceleration
- Natural fade out
- Returns to rest state

---

## 🔍 Detailed Element Breakdown

### 1. Avatar Component

**Structure**:
```tsx
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600
                flex items-center justify-center font-bold text-white text-sm
                transition-all ring-2">
  JD
</div>
```

**States**:
| Property | Inactive | Hover | Active |
|----------|----------|-------|--------|
| Ring Color | transparent | rgba(255,255,255,0.1) | rgba(255,255,255,0.2) |
| Scale | 100% | 102% | 105% |
| Shadow | none | none | shadow-lg |
| Transition | 300ms Apple curve | 300ms Apple curve | 300ms Apple curve |

**Visual Effect**: 
- Ring creates a glowing halo
- Scale makes it feel "pressed" or "selected"
- Shadow adds depth when active

---

### 2. Name Text

**Structure**:
```tsx
<p className="text-sm font-medium truncate transition-all">
  John Doe
</p>
```

**States**:
| State | Color | Opacity | Hex Equivalent |
|-------|-------|---------|----------------|
| Inactive | `text-white/70` | 70% | rgba(255,255,255,0.7) |
| Hover | `text-white/90` | 90% | rgba(255,255,255,0.9) |
| Active | `text-white` | 100% | rgba(255,255,255,1.0) ⭐ |

**Visual Effect**: Progressive brightening shows increasing importance

---

### 3. Email Text

**Structure**:
```tsx
<p className="text-xs truncate transition-all">
  john@example.com
</p>
```

**States**:
| State | Color | Opacity | Hex Equivalent | TNS |
|-------|-------|---------|----------------|-----|
| Inactive | `text-white/40` | 40% | rgba(255,255,255,0.4) | ✅ |
| Hover | `text-white/60` | 60% | rgba(255,255,255,0.6) | ✅ |
| Active | `text-white/70` | 70% | rgba(255,255,255,0.7) | ✅ |

**Visual Effect**: 
- Starts very subtle (40%) to not compete with name
- Brightens on interaction to show it's part of clickable area
- TNS-compliant opacity values

---

### 4. Chevron Indicator

**Structure**:
```tsx
<ChevronRight 
  size={16} 
  className="text-white"
  strokeWidth={1.5}  // ← TNS Spec ✅
/>
```

**States**:
| State | Opacity | Transform | Visibility |
|-------|---------|-----------|------------|
| Inactive | 0% | translateX(-8px) | Hidden |
| Hover | 40% | translateX(0) | Hint |
| Active | 100% | translateX(0) | Visible |

**Visual Effect**: 
- Slides in from left on hover (hint of interactivity)
- Fully visible when active (confirms selection)
- 1.5px stroke matches TNS specification

---

### 5. Radial Gradient Overlay

**Structure**:
```tsx
<div 
  className="absolute inset-0 opacity-0 pointer-events-none transition-opacity"
  style={{
    background: "radial-gradient(circle at center, 
                  rgba(139, 92, 246, 0.1) 0%, 
                  transparent 70%)"
  }}
/>
```

**States**:
| State | Opacity | Visual Effect |
|-------|---------|---------------|
| Inactive | 0% | Not visible |
| Hover | 50% | Subtle purple glow from center |
| Active | 100% | Full purple glow from center |

**Color**: TNS Violet `#8B5CF6` (139, 92, 246) at 10% opacity

**Visual Effect**: 
- Creates a "spotlight" effect on the user section
- Ties into the TNS violet theme used throughout the sidebar
- Adds depth and visual interest

---

## 📊 Color Progression Chart

### Name Text Brightness
```
Inactive:  ████████████████░░░░  70%
Hover:     ██████████████████░░  90%
Active:    ████████████████████  100% ⭐
```

### Email Text Brightness
```
Inactive:  ████████░░░░░░░░░░░░  40% ⭐ TNS
Hover:     ████████████░░░░░░░░  60%
Active:    ██████████████░░░░░░  70% ⭐ TNS
```

### Avatar Ring Strength
```
Inactive:  ░░░░░░░░░░░░░░░░░░░░   0%
Hover:     ██░░░░░░░░░░░░░░░░░░  10%
Active:    ████░░░░░░░░░░░░░░░░  20%
```

### Gradient Overlay Intensity
```
Inactive:  ░░░░░░░░░░░░░░░░░░░░   0%
Hover:     ██████████░░░░░░░░░░  50%
Active:    ████████████████████ 100%
```

### Chevron Visibility
```
Inactive:  ░░░░░░░░░░░░░░░░░░░░   0%
Hover:     ████████░░░░░░░░░░░░  40%
Active:    ████████████████████ 100%
```

---

## 🎯 UX Principles Applied

### 1. **Progressive Disclosure**
- Inactive: Minimal visual weight
- Hover: Reveals interactivity hints
- Active: Full visual emphasis

### 2. **Layered Feedback**
- Multiple simultaneous feedback mechanisms
- Each layer reinforces the interaction
- Creates rich, satisfying experience

### 3. **Natural Motion**
- Apple spring curve mimics physical objects
- 300ms duration feels responsive but not rushed
- Smooth acceleration/deceleration

### 4. **Visual Hierarchy**
- Active state is unmistakable
- Hover state clearly different from inactive
- Each state has distinct visual signature

### 5. **Affordance**
- Button appearance signals clickability
- Hover effects confirm interactivity
- Active state confirms action completed

---

## 🧪 Testing Scenarios

### Scenario 1: First-Time User
1. **Sees**: Inactive state with subtle profile display
2. **Hovers**: Avatar glows, chevron appears, gradient hint
3. **Thinks**: "Oh, this is clickable!"
4. **Clicks**: Full active state with all effects
5. **Result**: Clear feedback that profile is selected

### Scenario 2: Returning User
1. **Sees**: Active state (profile already selected)
2. **Recognizes**: Prominent ring, bright text, visible chevron
3. **Knows**: "I'm on my profile page"
4. **Clicks elsewhere**: Smooth transition back to inactive
5. **Result**: Clear state awareness

### Scenario 3: Collapsed Sidebar
1. **Sees**: Avatar only (36x36px), centered
2. **Hovers**: Avatar ring appears, scales to 102%
3. **Clicks**: Ring strengthens, scales to 105%, shadow
4. **Result**: Same feedback in compact form

---

## 📱 Responsive Behavior

### Desktop (Expanded Sidebar)
- **Width**: 256px (w-64)
- **Avatar**: 40x40px
- **Text**: Both name and email visible
- **Chevron**: Visible on hover/active
- **All effects**: Fully visible

### Desktop (Collapsed Sidebar)
- **Width**: 64px (w-16)
- **Avatar**: 36x36px, centered
- **Text**: Hidden
- **Chevron**: Hidden
- **Avatar effects**: Ring, scale, shadow still work

### Tablet
- Same as desktop
- Touch: Active state on tap (no hover)

### Mobile
- Same as desktop
- Touch: Active state on tap (no hover)
- Collapsed by default on small screens

---

## 🎨 Design Philosophy

### Before: Static Information Display
- Purpose: Show user info
- Interaction: None
- Feedback: None
- Feel: Functional but basic

### After: Interactive Profile Button
- Purpose: Show user info + access profile
- Interaction: Full button with states
- Feedback: 6 layers of visual feedback
- Feel: Polished, professional, engaging

---

## ✅ TNS Compliance Summary

| Element | TNS Requirement | Implementation | Status |
|---------|----------------|----------------|--------|
| Email (Inactive) | rgba(255,255,255,0.4) | `text-white/40` | ✅ |
| Email (Hover) | rgba(255,255,255,0.6) | `text-white/60` | ✅ |
| Email (Active) | rgba(255,255,255,0.7) | `text-white/70` | ✅ |
| Name (Active) | rgba(255,255,255,1.0) | `text-white` | ✅ |
| Chevron Stroke | 1.5px | `strokeWidth={1.5}` | ✅ |
| Transition Duration | 300ms | `var(--timing-standard)` | ✅ |
| Transition Timing | cubic-bezier(0.23,1,0.32,1) | `var(--ease-apple)` | ✅ |
| Accent Color | rgba(139,92,246,...) | Violet gradient | ✅ |

**Compliance**: **100%** ✅

---

## 🚀 How to Experience

1. **Start dev server**: `npm run dev`
2. **Open**: http://localhost:3003
3. **Scroll to bottom**: User section is at the bottom of sidebar
4. **Hover**: See ring, gradient, chevron appear
5. **Click**: See full active state with all effects
6. **Toggle sidebar**: Click X to collapse, see avatar-only state

---

**Date**: January 9, 2026  
**Status**: ✅ Complete  
**TNS Compliance**: ✅ 100%
