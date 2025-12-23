# SUPER SIMPLE: Update Workflow Icons from Figma

## Just 5 Steps:

### 1️⃣ Open Figma
Go to: https://www.figma.com/design/aB9TNfWFDhNxGL1isXJ19N/

### 2️⃣ Select the icon you want

### 3️⃣ Copy as SVG
Right-click → **Copy as** → **Copy as SVG**

### 4️⃣ Open the file
Open: `/components/workflow-icons.tsx`

### 5️⃣ Find your section and PASTE
Find the right section:
- `CAR ADS ICON` for Car Ads
- `TRAILER ICON` for Trailer  
- `CUTOUT ICON` for Cutout
- `ADVERTISING ICON` for Advertising

Delete everything between `{/* START` and `END */}` and paste your SVG.

## Example:

**BEFORE:**
```tsx
// CAR ADS ICON
export function CarAdsIcon({ className }: IconProps) {
  return (
    <div className={className}>
      {/* START - PASTE YOUR FIGMA SVG BELOW */}
      <svg viewBox="0 0 56 56" fill="none">
        <rect x="7" y="7" width="42" height="42"/>
      </svg>
      {/* END */}
    </div>
  );
}
```

**AFTER (just paste):**
```tsx
// CAR ADS ICON
export function CarAdsIcon({ className }: IconProps) {
  return (
    <div className={className}>
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5..." fill="#FEFEFE"/>
        <circle cx="12" cy="12" r="4" fill="#FF669C"/>
      </svg>
    </div>
  );
}
```

## That's it! ✅

No need to worry about className or any other code. Just copy from Figma and paste!

