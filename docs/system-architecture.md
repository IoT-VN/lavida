# System Architecture - La Vida Landing Page

## Overview
The La Vida landing page is built using a modern web architecture focused on performance, scalability, and maintainability. The system follows Next.js 15's App Router pattern with server-side rendering for optimal SEO and performance.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                           La Vida Landing Page                       │
├───────────────────────────────────────────────────────────────────��─┤
│                                                                     │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐      │
│  │   Vercel Edge   │  │   Next.js 15    │  │   Tailwind CSS  │      │
│  │     Functions   │  │   App Router    │  │     Styling     │      │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘      │
│           │                   │                   │                 │
│           └───────────────────┼───────────────────┘                 │
│                                │                                   │
│                   ┌─────────────────┐                              │
│                   │   TypeScript    │                              │
│                   │    Strict Mode  │                              │
│                   └─────────────────┘                              │
│                                                                     │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐      │
│  │   Static Assets│  │   Components   │  │   Configuration │      │
│  │     Images     │  │   (React)     │  │    (next.config)│      │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘      │
│                                                                     │
│  ┌─────────────────┐  ┌─────────────────┐                           │
│  │   Analytics     │  │    Monitoring  │                           │
│  │   (Vercel)     │  │   (Built-in)    │                           │
│  └─────────────────┘  └─────────────────┘                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Technical Components

### 1. Frontend Architecture
- **Framework**: Next.js 15 with App Router
- **Rendering**: Server-side rendering (SSR) for SEO optimization
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS for utility-first styling
- **Components**: React functional components with hooks

### 2. Hosting & Deployment
- **Platform**: Vercel
- **Edge Functions**: Serverless functions for dynamic content
- **Static Hosting**: For static assets and pages
- **CDN**: Global CDN distribution
- **CI/CD**: Automatic deployment on git push

### 3. Performance Architecture
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic based on routes
- **Bundle Analysis**: Webpack optimization
- **Caching**: Static and dynamic caching strategies

### 4. Development Workflow
```
Development → Build → Test → Deploy → Monitor
    ↓           ↓        ↓       ↓       ↓
  npm run    next     npm    Vercel   Vercel
  dev build  start    test   deploy   analytics
```

## Directory Structure

```
lavida/
├── app/                    # App Router directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── components/        # React components
├── public/                # Static assets
│   ├── images/           # Images and media
│   └── fonts/            # Custom fonts
├── styles/               # Tailwind configuration
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Key Patterns

### 1. Component Architecture
- **Layout Components**: Header, Footer, Navigation
- **Page Components**: Hero, Features, Contact
- **Reusable Components**: Buttons, Cards, Forms
- **Utility Components**: Loading states, Error boundaries

### 2. Styling Approach
- **Utility-First**: Tailwind CSS classes
- **Responsive Design**: Mobile-first approach
- **Consistent Tokens**: Design system in CSS variables
- **CSS Modules**: Scoped component styles

### 3. Performance Patterns
- **Lazy Loading**: Images and components
- **Prefetching**: Next.js automatic prefetching
- **Optimization**: Built-in Next.js optimizations
- **Monitoring**: Vercel analytics and insights

## Security Considerations

- **XSS Protection**: React's built-in protections
- **HTTPS Enforcement**: Vercel SSL certificates
- **Dependency Updates**: Regular npm update checks
- **Environment Variables**: Secure configuration management
- **Content Security Policy (CSP)**: Re-enabled CSP headers with proper allowlists for enhanced security
  - Custom inline scripts allowed for critical functionality
  - External resources restricted to trusted domains
  - Eval and inline styles disabled for security
- **JSON-LD Schema Validation**: Removed mock review data to ensure accurate structured data representation

## Scalability Approach

- **Horizontal Scaling**: Vercel auto-scaling
- **Static Optimization**: Build-time optimizations
- **Caching Strategy**: Multi-layer caching
- **CDN Distribution**: Global content delivery

## Monitoring & Analytics

- **Performance**: Vercel analytics
- **Uptime**: Vercel status monitoring
- **Error Tracking**: Built-in error reporting
- **Usage Metrics**: Page views and user behavior

## Future Extensions

- **Internationalization**: i18n support
- **Dark Mode**: Theme switching
- **PWA Support**: Progressive web app features
- **E-commerce Integration**: Product showcase and checkout