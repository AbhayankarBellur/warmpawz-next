# Warmpawz Landing Page

A modern, responsive landing page for Warmpawz - your trusted pet care partner. Built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful gradient backgrounds with opaque image overlays
- 📱 Fully responsive design for mobile, tablet, and desktop
- 🎬 Smooth GSAP animations and transitions
- 🔄 Loading screen with sessionStorage-based skip logic
- 🧭 Sticky navbar with scroll-based hide/show behavior
- 🐾 Interactive service showcase with mobile phone frame
- 💼 Comprehensive pages: Services, About, Careers, Blog, Policies
- ⚡ Optimized with Next.js Image component
- 🎭 Client/Server component architecture

## Tech Stack

- **Framework:** Next.js 16.1.6 with App Router
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animations:** GSAP with ScrollTrigger, Framer Motion
- **Forms:** EmailJS for contact functionality
- **Icons:** Lucide React
- **Font:** Baloo 2 (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (home)/            # Landing page
│   ├── about/             # About us page
│   ├── blog/              # Blog listing
│   ├── careers/           # Careers page
│   ├── policies/          # Policies page
│   ├── services/          # Services showcase
│   ├── user-walkthrough/  # Pet parent onboarding
│   └── vendor-onboarding/ # Service provider onboarding
├── components/            # React components
│   ├── home/             # Landing page components
│   ├── layout/           # Navbar, Footer, ClientLayout
│   ├── services/         # Services components
│   ├── shared/           # Reusable components
│   └── ui/               # UI primitives
├── config/               # Constants and configuration
├── data/                 # Blog articles and static data
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets (images, videos)
```

## Key Features

### Background System
- Fixed gradient layers with customizable blog image overlays
- Consistent z-index hierarchy across all pages
- Enhanced gradient colors for better visibility

### Animation System
- Desktop hover animations for interactive sections
- Mobile scroll-triggered animations using GSAP ScrollTrigger
- Smooth navbar transitions

### Loading Experience
- Custom loading screen with pawprint animation
- Session-based skip logic (shows once per session)
- ClientLayout wrapper for controlled navbar mounting

## Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Add your environment variables here
# Example: NEXT_PUBLIC_API_URL=https://api.example.com
```

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm start` - Start production server  
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a private project for Warmpawz. For questions or issues, please contact the development team.

## License

Proprietary - All rights reserved by Warmpawz © 2025
