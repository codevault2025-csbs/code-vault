# Overview

This is a full-stack web application built with React and Express.js, featuring a modern UI component library (shadcn/ui) and PostgreSQL database integration. The application appears to be set up as a foundation for building web applications with user authentication and management capabilities. It follows a monorepo structure with shared code between client and server, and includes comprehensive tooling for development, building, and deployment.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation resolvers

## Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for server bundling

## Data Storage Solutions
- **Primary Database**: PostgreSQL hosted on Neon (serverless)
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Migrations**: Drizzle Kit for database schema management
- **Session Storage**: PostgreSQL-based session persistence
- **Development Fallback**: In-memory storage implementation for development/testing

## Authentication and Authorization
- **Session-based Authentication**: Express sessions with PostgreSQL storage
- **User Schema**: Basic user model with username/password fields
- **Password Security**: Ready for bcrypt or similar password hashing implementation
- **Type Safety**: Zod schemas for request validation and TypeScript interfaces

## Development and Build Process
- **Monorepo Structure**: Shared code between client/server in `/shared` directory
- **Path Aliases**: Configured TypeScript paths for clean imports (@/, @shared/)
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Production Build**: Vite builds client, esbuild bundles server
- **Type Checking**: TypeScript strict mode enabled across all packages

## External Dependencies
- **Database**: Neon PostgreSQL (requires DATABASE_URL environment variable)
- **UI Components**: Radix UI primitives for accessible component foundation
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts integration (Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter)
- **Development Tools**: Replit-specific plugins for enhanced development experience
- **Date Handling**: date-fns for date manipulation and formatting
- **Carousel**: Embla Carousel for interactive image/content carousels