# AI Tools Sidebar - Installation Guide

A beautiful, animated side navigation bar component with gradient effects, overlays, and smooth interactions. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Gradient Animations** - Smooth hover and active state animations with vibrant gradients
- 🌓 **Dark Theme** - Optimized for dark backgrounds with elegant styling
- 📱 **Fully Responsive** - Works seamlessly across all screen sizes
- 🎯 **Tab Navigation** - Multiple navigation tabs (Home, Library, Story, Hub, Apps, Studio)
- 🔔 **Overlay Panels** - Built-in Hub and Help menu overlays
- ⚡ **Smooth Transitions** - Powered by Framer Motion for fluid animations
- 🎭 **Hover Effects** - Interactive hover states with gradient backgrounds
- 🚀 **TypeScript** - Fully typed for better development experience

---

## 📦 Prerequisites

Before installing, ensure you have:

- **Node.js** (v18 or higher)
- **Next.js 14** project set up
- **Tailwind CSS** configured
- **TypeScript** enabled (recommended)

---

## 🚀 Installation

### Step 1: Install Dependencies

```bash
npm install framer-motion lucide-react clsx tailwind-merge class-variance-authority
```

Or with yarn:

```bash
yarn add framer-motion lucide-react clsx tailwind-merge class-variance-authority
```

Or with pnpm:

```bash
pnpm add framer-motion lucide-react clsx tailwind-merge class-variance-authority
```

### Step 2: Copy Required Files

Copy the following files from this repository to your project:

#### 1. Components
```
components/
├── aitools-sidebar.tsx      # Main sidebar component
├── hub-overlay.tsx          # Hub overlay panel
├── help-menu-overlay.tsx    # Help menu overlay
├── workflow-icons.tsx       # Custom workflow icons
└── ui/
    └── button.tsx           # Button component
```

#### 2. Library Files
```
lib/
├── utils.ts                 # Utility functions (cn helper)
└── svg-paths.ts            # SVG path data for icons
```

#### 3. SVG Assets
Copy all SVG files (and PNG files if needed) from the root directory to your project's root or a dedicated assets folder.

### Step 3: Configure Tailwind CSS

Ensure your `tailwind.config.ts` includes the component paths:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add any custom theme extensions here
    },
  },
  plugins: [],
};

export default config;
```

### Step 4: Set Up Global Styles

Ensure your `app/globals.css` includes Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🎯 Usage

### Basic Implementation

```tsx
"use client";

import { useState } from "react";
import { AiToolsSidebar } from "@/components/aitools-sidebar";
import { HubOverlay } from "@/components/hub-overlay";

export default function Page() {
  const [activeTab, setActiveTab] = useState("home");
  const [isHubOverlayOpen, setIsHubOverlayOpen] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "hub") {
      setIsHubOverlayOpen(true);
    } else {
      setIsHubOverlayOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-black">
      <AiToolsSidebar 
        activeTab={activeTab} 
        setActiveTab={handleTabChange} 
      />
      
      <HubOverlay 
        isOpen={isHubOverlayOpen} 
        onClose={() => {
          setIsHubOverlayOpen(false);
          setActiveTab("home");
        }} 
      />

      <main className="flex-1 overflow-y-auto">
        {/* Your main content here */}
      </main>
    </div>
  );
}
```

### With Controlled State

You can control the sidebar state from your parent component:

```tsx
const [activeTab, setActiveTab] = useState("home");

<AiToolsSidebar 
  activeTab={activeTab} 
  setActiveTab={setActiveTab} 
/>
```

### Standalone (Uncontrolled)

The sidebar can also manage its own state:

```tsx
<AiToolsSidebar />
```

---

## 🎨 Component API

### AiToolsSidebar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `activeTab` | `string` | `"home"` | Currently active tab |
| `setActiveTab` | `(tab: string) => void` | - | Callback when tab changes |

### Available Tabs

- `"home"` - Home tab with logo
- `"library"` - Library section
- `"story"` - Story/workflow section
- `"hub"` - Hub overlay trigger
- `"apps"` - Apps section
- `"studio"` - Studio section

### HubOverlay Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `isOpen` | `boolean` | Yes | Controls overlay visibility |
| `onClose` | `() => void` | Yes | Callback when overlay closes |

---

## 🎨 Customization

### Changing Colors

The component uses gradient backgrounds. You can modify them in `aitools-sidebar.tsx`:

```tsx
// Hover gradient (lines ~53)
backgroundImage: "linear-gradient(46deg, #181B1F 55.14%, #2E30FE 84.9%, #851FE8 90.5%, #FF06C9 91.99%, #181B1F 111.04%)"

// Active gradient (lines ~70)
backgroundImage: "linear-gradient(48deg, #181B1F 1.15%, #181B1F 9.49%, #282BC5 26.58%, #472BF8 38.31%, #851FE8 53.45%, #FF06C9 88.55%)"
```

### Customizing Navigation Items

Edit the navigation structure in `aitools-sidebar.tsx` to add/remove/modify tabs. Each tab uses the `SidebarBtn` component with icon, label, and active state.

### Modifying Overlay Content

Edit `hub-overlay.tsx` and `help-menu-overlay.tsx` to customize the overlay content and appearance.

### Updating Icons

See `HOW_TO_UPDATE_ICONS.md` for instructions on updating workflow icons from Figma.

---

## 📁 Project Structure

```
your-project/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── aitools-sidebar.tsx
│   ├── hub-overlay.tsx
│   ├── help-menu-overlay.tsx
│   ├── workflow-icons.tsx
│   └── ui/
│       └── button.tsx
└── lib/
    ├── utils.ts
    └── svg-paths.ts
```

---

## 🔧 Troubleshooting

### Animations Not Working

Make sure `framer-motion` is properly installed:
```bash
npm install framer-motion
```

### Icons Not Appearing

1. Verify `lucide-react` is installed
2. Check that `svg-paths.ts` is in the correct location
3. Ensure all SVG files are copied to your project

### Styling Issues

1. Confirm Tailwind CSS is properly configured
2. Check that `globals.css` includes Tailwind directives
3. Verify the content paths in `tailwind.config.ts` include your component files

### TypeScript Errors

1. Ensure `@types/react` and `@types/react-dom` are installed
2. Check that `tsconfig.json` is properly configured
3. Verify all imported types are available

---

## 🎯 Example Integration

Here's a complete example of integrating the sidebar into a Next.js app:

```tsx
// app/page.tsx
"use client";

import { useState } from "react";
import { AiToolsSidebar } from "@/components/aitools-sidebar";
import { HubOverlay } from "@/components/hub-overlay";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [isHubOverlayOpen, setIsHubOverlayOpen] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "hub") {
      setIsHubOverlayOpen(true);
    } else {
      setIsHubOverlayOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-black">
      <AiToolsSidebar 
        activeTab={activeTab} 
        setActiveTab={handleTabChange} 
      />
      
      <HubOverlay 
        isOpen={isHubOverlayOpen} 
        onClose={() => {
          setIsHubOverlayOpen(false);
          setActiveTab("home");
        }} 
      />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <h1 className="text-white text-3xl font-bold mb-4">
            Welcome to Your App
          </h1>
          <p className="text-gray-300">
            Content based on active tab: {activeTab}
          </p>
        </div>
      </main>
    </div>
  );
}
```

---

## 📚 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | ^14.2.5 | React framework |
| `react` | ^18.3.1 | UI library |
| `framer-motion` | latest | Animations |
| `lucide-react` | ^0.441.0 | Icon library |
| `tailwindcss` | ^3.4.11 | Styling |
| `class-variance-authority` | ^0.7.0 | Component variants |
| `clsx` | ^2.1.1 | Conditional classes |
| `tailwind-merge` | ^2.5.2 | Merge Tailwind classes |
| `typescript` | ^5.5.4 | Type safety |

---

## 🤝 Contributing

Feel free to customize and extend this component for your needs. If you make improvements, consider sharing them back!

---

## 📄 License

MIT License - Feel free to use in personal and commercial projects.

---

## 🙋 Support

If you encounter any issues:

1. Check that all dependencies are installed
2. Verify file paths match your project structure
3. Ensure Tailwind CSS is properly configured
4. Check the browser console for errors

---

## 🎉 What's Next?

After installation, you can:

1. Customize the gradient colors to match your brand
2. Add more navigation items
3. Create additional overlays for different sections
4. Integrate with your routing system
5. Add authentication to the user profile section

Enjoy your new sidebar! 🚀

