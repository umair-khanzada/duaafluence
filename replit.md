# duaafluence - Rapid MVP Development Agency

## Overview

duaafluence is a modern landing page application for a tech agency specializing in rapid MVP development. The application showcases the company's services, portfolio, development process, and provides a contact form for potential clients. Built with a focus on conversion optimization and professional presentation, it targets entrepreneurs, small business owners, and early-stage founders looking to transform their ideas into working applications quickly.

The tech stack consists of a React-based frontend with TypeScript, shadcn/ui components, and Tailwind CSS for styling, backed by an Express.js server. The application uses an in-memory storage system for contact form submissions with the architecture prepared for PostgreSQL database integration via Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Single-page application (SPA) using wouter for lightweight client-side routing
- Component-based architecture with reusable UI primitives from shadcn/ui

**Styling Strategy**
- Tailwind CSS with custom configuration following the "New York" style from shadcn/ui
- CSS variables for theming (supports light/dark mode infrastructure)
- Custom design system with Electric Blue (#007BFF) primary color, Dark Gray (#1F1F1F) secondary, and Aqua/Mint Green (#00C896) accent
- Bold & Energetic design style with vibrant gradients, animations, and modern SaaS aesthetics
- Typography using Inter font family via Google Fonts with bold weights (font-black/900) for headlines
- Responsive design with mobile-first approach

**Custom Gradient Utilities**
- `.gradient-primary`: Blue to aqua gradient background for CTAs and accents
- `.gradient-primary-reverse`: Reverse gradient (aqua to blue)
- `.gradient-vibrant`: Purple-pink multi-color gradient for special elements
- `.gradient-text`: Gradient text effect applied to headlines and emphasis text
- `.glow-primary` / `.glow-accent`: Glow shadow effects for depth and energy

**Design Characteristics (October 2025 Redesign)**
- Vibrant gradient orbs in backgrounds with blur effects
- Colorful service icons with unique gradients (blue-cyan, purple-pink, green-emerald, orange-red)
- Bold hover interactions: scale transforms, translations, and color transitions
- Gradient stats display in hero section
- Numbered process step badges with gradient backgrounds
- Gradient overlays on portfolio cards
- All CTAs feature gradient backgrounds with glow effects

**State Management**
- TanStack Query (React Query) for server state management and data fetching
- Local component state with React hooks for UI interactions
- Form state managed through react-hook-form with Zod validation

**Component Structure**
The application is organized into functional sections as separate components:
- HeroSection: Full-height hero with CTA buttons and device mockups
- WhoWeAre: Company introduction with team imagery
- Services: 4-column grid showcasing core offerings (MVP, Web, Mobile, UI/UX)
- Process: 5-step development workflow visualization
- Portfolio: 3-column project showcase with case studies
- WhyChooseUs: 2-column benefit checklist
- ContactSection: Contact form with real-time validation
- Footer: Navigation and social links

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- RESTful API design pattern
- Middleware for JSON body parsing and request logging
- Custom logging system with timestamp formatting

**API Endpoints**
- `POST /api/contact`: Submit contact form data (validates with Zod schema)
- `GET /api/contact`: Retrieve all contact submissions (prepared for admin use)

**Development vs Production**
- Development: Vite middleware integration for HMR and asset serving
- Production: Pre-built static assets served from dist/public
- Conditional Replit-specific plugins for development environment

### Data Layer

**Current Implementation**
- In-memory storage using Map data structures
- IStorage interface defining storage contract for easy swapping
- MemStorage class implementing the interface with randomUUID for ID generation

**Database Schema (Prepared for PostgreSQL)**
- `users` table: id (UUID), username, password
- `contact_submissions` table: id (UUID), name, email, project_idea, submitted_at (timestamp)
- Drizzle ORM configured with PostgreSQL dialect
- Schema definitions using drizzle-zod for runtime validation
- Migration system ready via drizzle-kit

**Design Decision**: The in-memory storage allows rapid development and testing without database setup. The IStorage interface abstraction means switching to the prepared PostgreSQL implementation requires only changing the storage instance initialization, not refactoring API routes.

### Form Validation & Type Safety

**Validation Strategy**
- Zod schemas defined in shared/schema.ts for type safety across client and server
- Runtime validation on both frontend (react-hook-form resolvers) and backend (API routes)
- Type inference from Zod schemas ensures consistency between validation rules and TypeScript types

**Benefits**: Catching validation errors early, preventing type mismatches between client and server, single source of truth for data structures.

### Asset Management

**Static Assets**
- Generated images stored in attached_assets/generated_images/
- Vite alias configuration (@assets) for clean import paths
- Assets bundled and optimized during build process

## External Dependencies

### UI Component Library
- **shadcn/ui**: Headless component collection built on Radix UI primitives
- **Radix UI**: Accessible, unstyled component primitives (dialog, popover, select, etc.)
- Provides keyboard navigation, ARIA attributes, and focus management out of the box

### Database & ORM
- **Drizzle ORM**: TypeScript ORM configured for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **drizzle-kit**: Schema migration and management tooling
- **drizzle-zod**: Integration for generating Zod schemas from Drizzle tables

### Styling & Design System
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Utility for managing component variants
- **clsx & tailwind-merge**: Conditional className merging
- Custom CSS variables for theming via Tailwind config

### Form Handling
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration adapters for validation libraries
- **Zod**: TypeScript-first schema validation

### Routing & State
- **wouter**: Minimalist routing library (1-2KB alternative to React Router)
- **@tanstack/react-query**: Server state management, caching, and synchronization

### Development Tools
- **TypeScript**: Type safety across the entire codebase
- **Vite**: Fast build tool with HMR
- **esbuild**: Production server bundling
- **tsx**: TypeScript execution for development server
- **@replit/vite-plugin-***: Replit-specific development enhancements (error overlay, dev banner, cartographer)

### Design Guidelines Reference
The project includes a comprehensive design_guidelines.md file specifying:
- Reference-based design approach inspired by Stripe, Linear, and Vercel
- Specific spacing primitives using Tailwind units (4, 6, 8, 12, 16, 20, 24)
- Multi-column layout strategies for each section
- Typography scale and weight specifications
- Brand messaging pillars: Speed, Trust, Experience, Innovation, Affordability