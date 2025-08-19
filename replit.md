# Overview

This is a full-stack React application for Catlarry, a 50+ year old family-run business specializing in manufacturing premium stainless steel products for the hospitality industry. The application serves as a product catalog and e-commerce platform showcasing chafers, buffet accessories, hollowware, trays, and other hospitality equipment with various finishes including PVD coating, Teflon coating, silver plating, and nickel plating.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui design system for accessibility and consistency
- **Styling**: Tailwind CSS with custom theming support via theme.json configuration
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **API Design**: RESTful API with endpoints for products, reviews, and user management
- **Authentication**: Passport.js with local strategy using in-memory session storage
- **Data Storage**: In-memory storage for products and reviews (initialized from static data)
- **Security**: Crypto module for password hashing with scrypt algorithm

## Component Structure
- **Atomic Design**: Modular UI components in `/components/ui/` following shadcn/ui patterns
- **Page Components**: Feature-specific pages in `/pages/` for routing
- **Custom Hooks**: Reusable logic in `/hooks/` for data fetching and state management
- **Utility Functions**: Helper functions in `/lib/` for common operations

## Data Management
- **Product Catalog**: Static product data with categories including risers, cereal range, goose holloware, and chafers
- **Review System**: User-generated reviews with rating and comment functionality
- **User Management**: Basic authentication with user profiles and session management

## Development Workflow
- **Type Safety**: Comprehensive TypeScript configuration with strict mode enabled
- **Build Process**: Separate client and server builds with ESM module support
- **Development**: Hot module replacement with Vite for rapid iteration

# External Dependencies

- **UI Framework**: Radix UI primitives for accessible component foundation
- **Styling**: Tailwind CSS with PostCSS for processing
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date formatting and manipulation
- **Form Management**: React Hook Form with Hookform resolvers for validation
- **Animations**: Framer Motion for smooth UI transitions
- **Development**: tsx for TypeScript execution and esbuild for production bundling
- **Database Tooling**: Drizzle Kit for potential database schema management (currently using in-memory storage)

The application is designed for scalability with a clear separation between frontend and backend concerns, making it easy to migrate from in-memory storage to a persistent database solution when needed.