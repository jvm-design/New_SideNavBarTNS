# Hub Card Videos

Place your video files here with the following names:

1. **automobile.mp4** - Video for the Automobile hub card
2. **cutout.mp4** - Video for the Cutout hub card
3. **trailers.mp4** - Video for the Trailers hub card
4. **advertising.mp4** - Video for the Advertising hub card

## File Requirements
- Format: MP4 (H.264 codec recommended)
- Resolution: Recommended 800x600 or higher
- Size: Keep under 10MB for optimal loading

## How to Update Paths

Open `/components/hub-overlay.tsx` and locate the `hubCards` array (around line 137).

Update the `bgMedia` property for each card:

```typescript
const hubCards: HubCardProps[] = [
  {
    title: "Automobile",
    category: "Hub",
    projectCount: "5 projects",
    bgMedia: "/videos/automobile.mp4", // 👈 Change this path
    mediaType: "video",
    workflows: [...]
  },
  // ... more cards
];
```

## Using Images Instead

If you want to use a static image instead of video for any card, change:
- `bgMedia: "/path/to/your/image.jpg"`
- `mediaType: "image"`

