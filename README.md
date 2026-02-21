# Everyday - Sustainable Fashion Marketplace

A beautiful, responsive marketplace for pre-loved fashion items built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## 🎨 Design

This project implements the exact design from Figma:
- **File**: nook@shadcn_ui components with variables & Tailwind classes
- **File Key**: `sdA9LFFgl6VNgmrHKdIMf9`
- **Node ID**: `5014:3` (Desktop - 1)
- **Design Mode**: Primary (5248:0) - Brown/Warm Earth Tones

## ✨ Features

- 🎨 **Pixel-perfect Figma implementation** - Exact colors, spacing, and typography from Figma
- 🎯 **Design tokens from Figma variables** - All colors and styles synced with design
- 📱 **Fully responsive** - Mobile-first design (320px to 1440px+)
- ⚡ **Fast & Modern** - Built on Next.js 16 with App Router
- 🎭 **Accessible components** - ARIA-compliant UI components
- 🧩 **Reusable components** - Modular Button, Card, Input, Avatar, Badge components
- 🌍 **Sustainable theme** - Warm brown/beige color palette for eco-conscious brand

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the marketplace.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
everyday-marketplace/
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Homepage (marketplace)
│   └── globals.css         # Global styles + design tokens
├── components/
│   └── ui/                 # UI components
│       ├── button.tsx      # Button component
│       ├── card.tsx        # Card component
│       ├── input.tsx       # Input component
│       ├── avatar.tsx      # Avatar component
│       └── badge.tsx       # Badge component
├── lib/
│   ├── design-tokens.ts    # Design tokens from Figma
│   └── utils.ts            # Utility functions (cn)
└── public/                 # Static assets
```

## 🎨 Design Tokens

All design tokens are defined in `lib/design-tokens.ts` and match the Figma design:

### Colors

```typescript
// Background colors
background: {
  primary: '#FCF9F6',    // Very light warm beige
  secondary: '#F0E4D9',  // Light warm beige/cream
  tertiary: '#E4CDB7',   // Light brown
}

// Text colors
foreground: {
  primary: '#3E332E',    // Dark brown - main text
  secondary: '#815E46',  // Medium brown - secondary text
  tertiary: '#543E2E',   // Dark accent brown
}
```

### Typography

- **Font Family**: Inter (Google Fonts)
- **Sizes**: 14px, 16px, 18px, 20px, 36px, 60px
- **Weights**: Regular (400), Medium (500), Semi Bold (600), Bold (700)

### Spacing

- **Container**: 1360px max-width with 40px padding
- **Grid Gap**: 32px
- **Sections**: 64px padding
- **Cards**: 24px padding

## 🧩 Components

### Button

```tsx
<Button variant="default">Default Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>
```

### Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Product Title</CardTitle>
  </CardHeader>
  <CardContent>Product details...</CardContent>
</Card>
```

### Input

```tsx
<Input type="search" placeholder="Search..." />
```

### Avatar

```tsx
<Avatar>
  <AvatarImage src="/logo.png" />
  <AvatarFallback>E</AvatarFallback>
</Avatar>
```

### Badge

```tsx
<Badge variant="secondary">Tag</Badge>
```

## 📱 Responsive Design

The marketplace is fully responsive with breakpoints:

- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## 🎯 Features Implemented

### Navigation Header
- Logo with brand name "Everyday"
- Search bar (desktop + mobile)
- Shopping cart icon
- User profile icon
- Mobile hamburger menu

### Hero Section
- Badge: "Sustainable Fashion, Beautifully Curated"
- Main heading: "Give your pre-loved pieces a new story"
- Description paragraph
- Two CTA buttons: "Start Sharing" and "Browse Items"
- Hero image placeholder

### Product Grid
- Section title: "Pre-loved Treasures"
- Description
- 8 product cards in responsive grid (1/2/3/4 columns)
- Each card has: image, title, price (฿800), "Add to cart" button
- "Load More" button

### Footer
- 4 columns: Brand, Shop, Support, Community
- Brand description
- Navigation links
- Copyright notice
- Legal links (Privacy Policy, Terms of Service)

## 🔧 Tech Stack

- **Framework**: Next.js 16.1.6
- **React**: 19.2.4
- **TypeScript**: 5.9.3
- **Styling**: Tailwind CSS 4.1.18
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📝 Design System

This marketplace uses a warm, earthy color palette perfect for sustainable fashion:

- **Primary**: Dark brown (#3E332E) - buttons, headings
- **Background**: Warm beige (#FCF9F6, #F0E4D9)
- **Accents**: Light brown (#E4CDB7)
- **Text**: Brown shades for hierarchy

All colors are sourced from Figma variables (Mode: Primary 5248:0).

## 🌍 Sustainability Theme

The warm brown and beige colors create a natural, eco-conscious aesthetic perfect for a sustainable fashion marketplace.

## 📄 License

MIT

## 🙏 Credits

- Design: Figma - nook@shadcn_ui components
- Built with: Next.js, React, Tailwind CSS
- Icons: Lucide React
- Fonts: Inter by Google Fonts
# everyday
