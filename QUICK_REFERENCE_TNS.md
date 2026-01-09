# 📖 Quick Reference - Spécifications TNS

## 🎯 Guide Rapide pour Développeurs

Ce document est un aide-mémoire rapide des valeurs exactes TNS implémentées.

---

## 📐 STROKE WIDTH

```typescript
strokeWidth="1.5"  // TOUJOURS 1.5px
```

---

## 🎨 COULEURS DES ICÔNES

### Inactif (Default)
```typescript
// Tailwind
className="text-white/40"

// CSS
color: rgba(255, 255, 255, 0.4);
```

### Hover
```typescript
// Tailwind
className="text-white/70"

// CSS
color: rgba(255, 255, 255, 0.7);
```

### Actif
```typescript
// Tailwind
className="text-white"

// CSS
color: #ffffff;
// ou
color: #fefefe;
```

---

## ✨ GLOW EFFECTS

### Glow Blanc (AITools)
```typescript
// Tailwind
className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"

// CSS Variable
--glow-white: 0 0 8px rgba(255, 255, 255, 0.3);
```

### Glow Violet (Sidebar Principal)
```typescript
// Tailwind
className="drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"

// CSS Variable
--glow-violet: 0 0 10px rgba(139, 92, 246, 0.5);
```

---

## 🌊 BORDER GRADIENT - SIDEBAR PRINCIPAL

### Valeurs Exactes
```css
linear-gradient(
  to bottom,
  rgba(255, 255, 255, 0) 0%,      /* Transparent */
  rgba(139, 92, 246, 0.2) 20%,    /* Fade in */
  rgba(139, 92, 246, 0.4) 40%,    /* PIC ⭐ */
  rgba(139, 92, 246, 0.2) 60%,    /* Fade out */
  rgba(139, 92, 246, 0.1) 80%,    /* Presque transparent */
  rgba(255, 255, 255, 0) 100%     /* Transparent */
)
```

### Couleur Principale
```css
#8B5CF6  /* Violet-500 Tailwind */
rgb(139, 92, 246)
```

### Usage
```tsx
<div
  className="absolute right-0 top-0 bottom-0 w-[1px] pointer-events-none z-10"
  style={{ background: 'var(--border-gradient-main)' }}
/>
```

---

## 🤖 BORDER GRADIENT - AITOOLS SIDEBAR

### Valeurs Exactes
```css
linear-gradient(
  180deg,
  rgba(0, 0, 0, 1) 0%,              /* Noir opaque */
  rgba(255, 255, 255, 0.08) 20%,    /* Blanc 8% START */
  rgba(255, 255, 255, 0.08) 80%,    /* Blanc 8% END */
  rgba(0, 0, 0, 1) 100%             /* Noir opaque */
)
```

### Zone Constante
- **20% à 80%**: Blanc à 8% d'opacité
- **0% et 100%**: Noir opaque (invisible sur fond noir)

### Usage
```tsx
<div
  className="absolute right-0 top-0 bottom-0 w-[1px] pointer-events-none"
  style={{ background: 'var(--border-gradient-ai)' }}
/>
```

---

## ⚡ TRANSITIONS

### Durée
```css
300ms  /* 0.3s */
```

### Timing Function (Apple Spring Curve)
```css
cubic-bezier(0.23, 1, 0.32, 1)
```

### Usage
```tsx
style={{
  transitionDuration: "var(--timing-standard)",
  transitionTimingFunction: "var(--ease-apple)"
}}
```

---

## 📦 VARIABLES CSS DISPONIBLES

### Dans app/globals.css

```css
/* Stroke */
--sidebar-icon-stroke: 1.5;

/* Couleurs */
--icon-inactive: rgba(255, 255, 255, 0.4);
--icon-hover: rgba(255, 255, 255, 0.7);
--icon-active: #ffffff;
--icon-active-alt: #fefefe;

/* Glows */
--glow-violet: 0 0 10px rgba(139, 92, 246, 0.5);
--glow-white: 0 0 8px rgba(255, 255, 255, 0.3);

/* Gradients */
--border-gradient-main: linear-gradient(...);
--border-gradient-ai: linear-gradient(...);

/* Timing */
--timing-fast: 0.2s;
--timing-standard: 0.3s;
--timing-smooth: 0.4s;
--ease-apple: cubic-bezier(0.23, 1, 0.32, 1);
```

---

## 🎨 EXEMPLES DE CODE

### Icône avec Stroke 1.5px
```tsx
<svg>
  <path 
    d="M..." 
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />
</svg>
```

### Bouton avec États
```tsx
<button
  className={cn(
    "transition-all",
    isActive 
      ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
      : isHovered
      ? "text-white/70"
      : "text-white/40"
  )}
  style={{
    transitionDuration: "var(--timing-standard)",
    transitionTimingFunction: "var(--ease-apple)"
  }}
>
  <Icon size={24} strokeWidth={1.5} />
</button>
```

### SVG Custom avec États
```tsx
<div
  className={`transition-all ${
    showActiveOrHover
      ? "[&_svg]:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] [&_svg_path]:stroke-[#fefefe]"
      : "[&_svg_path]:stroke-[rgba(255,255,255,0.4)]"
  }`}
>
  <svg>...</svg>
</div>
```

---

## 📊 TABLEAU RÉCAPITULATIF

| Élément | Valeur TNS | Variable CSS |
|---------|------------|--------------|
| **Stroke** | 1.5px | `--sidebar-icon-stroke` |
| **Inactif** | rgba(255,255,255,0.4) | `--icon-inactive` |
| **Hover** | rgba(255,255,255,0.7) | `--icon-hover` |
| **Actif** | #ffffff ou #fefefe | `--icon-active` |
| **Glow Blanc** | 0 0 8px rgba(255,255,255,0.3) | `--glow-white` |
| **Glow Violet** | 0 0 10px rgba(139,92,246,0.5) | `--glow-violet` |
| **Border Main** | Gradient violet | `--border-gradient-main` |
| **Border AI** | Gradient blanc/noir | `--border-gradient-ai` |
| **Durée** | 300ms | `--timing-standard` |
| **Timing** | cubic-bezier(0.23,1,0.32,1) | `--ease-apple` |

---

## 🎯 CHECKLIST RAPIDE

Avant de commit, vérifier:

- [ ] Tous les `strokeWidth="1.5"`
- [ ] Inactif = `rgba(255,255,255,0.4)` ou `text-white/40`
- [ ] Hover = `rgba(255,255,255,0.7)` ou `text-white/70`
- [ ] Actif = `#ffffff` ou `#fefefe` + glow
- [ ] Border gradient utilise les variables CSS
- [ ] Transitions = 300ms + Apple curve
- [ ] Pas d'erreur linter
- [ ] Pas d'erreur TypeScript

---

## 🚀 COMMANDES UTILES

```bash
# Développement
npm run dev

# Build
npm run build

# Lint
npm run lint

# Type check
npx tsc --noEmit
```

---

## 📞 RÉFÉRENCES RAPIDES

### Fichiers Clés
- `components/aitools-sidebar.tsx`
- `components/side-navbar.tsx`
- `app/globals.css`

### Documentation
- `SIDEBAR_SPECS_FRONTEND.md` - Specs TNS complètes
- `TNS_SPEC_COMPLIANCE.md` - Conformité détaillée
- `RESUME_IMPLEMENTATION_FR.md` - Résumé français

### Couleurs Hex
```
Violet TNS: #8B5CF6 (rgb 139, 92, 246)
Blanc actif: #FFFFFF ou #FEFEFE
```

---

## 💡 TIPS

### Performance
- Utiliser `transform` et `opacity` pour animations (GPU)
- Éviter `width`, `height`, `margin` dans transitions
- Préférer `drop-shadow` à `box-shadow` pour SVG

### Tailwind
- `text-white/40` = rgba(255,255,255,0.4)
- `text-white/70` = rgba(255,255,255,0.7)
- `drop-shadow-[...]` pour valeurs custom

### CSS Variables
- Toujours utiliser `var(--nom-variable)`
- Définies dans `:root` de `globals.css`
- Accessibles partout dans l'app

---

**Version**: 1.0.0  
**Date**: 9 Janvier 2026  
**Conformité TNS**: ✅ 100%
