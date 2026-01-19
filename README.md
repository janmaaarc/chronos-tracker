# Chronos Tracker

A modern landing page for a time tracking application built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Features

- Responsive design
- Dark/light theme support
- Smooth scroll animations
- Multiple landing page sections:
  - Hero
  - Stats
  - Integrations
  - Features
  - How It Works
  - Testimonials
  - FAQ
  - Pricing
  - Waitlist

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── components/      # React components
│   ├── FAQ.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Integrations.tsx
│   ├── Navbar.tsx
│   ├── Pricing.tsx
│   ├── Stats.tsx
│   ├── Testimonials.tsx
│   └── Waitlist.tsx
├── context/         # React context providers
│   └── ThemeContext.tsx
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```
