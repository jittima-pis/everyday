# Project Structure

## Overview

This is a **separate, independent project** for the Everyday Sustainable Fashion Marketplace, completely isolated from the documentation/component library project.

## Location

```
/Users/jittima.p/Desktop/AI Design system/shadcn-new/
├── ai-design-system-starter/    ← Documentation & Component Library
└── everyday-marketplace/          ← **NEW: Marketplace Website** ✨
```

## Folder Structure

```
everyday-marketplace/
├── app/
│   ├── layout.tsx                # Root layout with Inter font
│   ├── page.tsx                  # Homepage (marketplace landing page)
│   ├── globals.css               # Global styles + CSS variables
│   └── favicon.ico               # Site icon
│
├── components/
│   └── ui/                       # shadcn-style UI components
│       ├── button.tsx            # Button (default, outline, ghost)
│       ├── card.tsx              # Card with header, content, footer
│       ├── input.tsx             # Input field
│       ├── avatar.tsx            # Avatar with image/fallback
│       └── badge.tsx             # Badge component
│
├── lib/
│   ├── design-tokens.ts          # Complete design tokens from Figma
│   └── utils.ts                  # cn() utility function
│
├── public/                       # Static assets (images, fonts)
│
├── node_modules/                 # Dependencies
│
├── package.json                  # Project dependencies & scripts
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── postcss.config.mjs            # PostCSS configuration
├── next.config.ts                # Next.js configuration
├── .gitignore                    # Git ignore rules
│
├── README.md                     # Project documentation
└── PROJECT-STRUCTURE.md          # This file
```

## Key Files

### Design System Files

1. **`lib/design-tokens.ts`**
   - All colors from Figma Primary mode (brown/warm theme)
   - Typography scale (14px - 60px)
   - Spacing scale
   - Border radius values
   - Layout configurations
   - Figma variable references

2. **`app/globals.css`**
   - CSS custom properties (CSS variables)
   - Base styles
   - Utility classes
   - Design token mappings

3. **`tailwind.config.ts`**
   - Tailwind theme extensions
   - Color mappings to CSS variables
   - Container configuration
   - Typography settings

### Page Files

1. **`app/page.tsx`**
   - Homepage/landing page
   - Navigation header
   - Hero section
   - Product grid (8 products)
   - Footer
   - Fully responsive

2. **`app/layout.tsx`**
   - Root HTML layout
   - Inter font loading
   - Metadata (SEO)
   - Global CSS import

### Component Files

All in `components/ui/`:
- `button.tsx` - Primary, outline, ghost variants
- `card.tsx` - Container with header, content, footer
- `input.tsx` - Text/search input field
- `avatar.tsx` - Profile/logo avatar
- `badge.tsx` - Labels and tags

### Configuration Files

- `package.json` - Dependencies and npm scripts
- `tsconfig.json` - TypeScript compiler options
- `tailwind.config.ts` - Tailwind CSS theme
- `next.config.ts` - Next.js settings

## Dependencies

### Core
- **Next.js** 16.1.6 - React framework
- **React** 19.2.4 - UI library
- **TypeScript** 5.9.3 - Type safety

### Styling
- **Tailwind CSS** 4.1.18 - Utility-first CSS
- **@tailwindcss/typography** 0.5.19 - Typography plugin
- **class-variance-authority** 0.7.1 - Component variants
- **clsx** 2.1.1 - Class name utility
- **tailwind-merge** 3.4.0 - Merge Tailwind classes

### UI/Icons
- **lucide-react** 0.563.0 - Icon library

## Scripts

```json
{
  "dev": "next dev",        // Start development server
  "build": "next build",    // Build for production
  "start": "next start",    // Start production server
  "lint": "next lint"       // Run ESLint
}
```

## Development Server

```bash
cd everyday-marketplace
npm run dev
```

Server runs at: **http://localhost:3000**

## Design Tokens Source

From Figma:
- **File**: nook@shadcn_ui components with variables & Tailwind classes
- **File Key**: sdA9LFFgl6VNgmrHKdIMf9
- **Node ID**: 5014:3 (Desktop - 1)
- **Mode**: Primary (5248:0)
- **Theme**: Brown/Warm Earth Tones

## Color Palette

### Backgrounds
- `#FCF9F6` - Very light warm beige (page background)
- `#F0E4D9` - Light warm beige (header)
- `#E4CDB7` - Light brown (accents)

### Text
- `#3E332E` - Dark brown (headings, primary text)
- `#815E46` - Medium brown (secondary text)
- `#543E2E` - Dark accent brown (prices)

### Interactive
- `#3E332E` - Primary buttons, links
- `#FAFAFA` - Text on dark backgrounds

## Responsive Breakpoints

- **xs**: < 640px (mobile)
- **sm**: 640px (tablet)
- **md**: 768px (small desktop)
- **lg**: 1024px (desktop)
- **xl**: 1280px (large desktop)
- **2xl**: 1440px (max container width)

## Features

✅ Pixel-perfect Figma implementation
✅ Design tokens from Figma variables
✅ Fully responsive (mobile → desktop)
✅ Accessible components (ARIA)
✅ Type-safe with TypeScript
✅ Fast with Next.js 16
✅ Modern styling with Tailwind CSS 4

## Separation from Documentation Project

This marketplace is **completely separate** from the documentation/component library project:

- ✅ Independent `node_modules`
- ✅ Separate `package.json`
- ✅ Own development server
- ✅ Different port or domain
- ✅ Clean folder structure
- ✅ No shared dependencies

The documentation project (`ai-design-system-starter`) contains:
- Component documentation
- Design token showcase
- Mode switcher demos
- 56+ component examples

The marketplace project (`everyday-marketplace`) contains:
- Actual marketplace website
- Homepage implementation from Figma
- Product listing
- E-commerce features
