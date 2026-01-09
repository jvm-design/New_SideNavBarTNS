# Side Navbar Demo

A beautiful and modern side navigation bar built with Next.js, Tailwind CSS, and shadcn/ui components.

## Features

- 🎨 Beautiful gradient design with smooth animations
- 🌓 Dark theme optimized
- 📱 Fully responsive
- ⚡ Collapsible sidebar
- 🎯 Active state indicators
- 🔔 Badge notifications
- 👤 User profile section
- 🚀 Built with Next.js 14 and TypeScript

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page with demo dashboard
│   └── globals.css      # Global styles
├── components/
│   ├── side-navbar.tsx  # Main sidebar component
│   └── ui/
│       └── button.tsx   # Button component
└── lib/
    └── utils.ts         # Utility functions
```

## Customization

### Modify Navigation Items

Edit the `navItems` array in `components/side-navbar.tsx`:

```typescript
const navItems: NavItem[] = [
  { title: "Dashboard", icon: <LayoutDashboard size={20} />, href: "/" },
  { title: "Projects", icon: <FileText size={20} />, href: "/projects", badge: "12" },
  // Add more items...
];
```

### Change Colors

Modify the color scheme in `tailwind.config.ts` or update the CSS variables in `app/globals.css`.

## License

MIT







