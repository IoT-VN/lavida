# Code Standards - La Vida Landing Page

## Overview
This document defines the coding standards and best practices for the La Vida landing page implementation. All developers must adhere to these standards to ensure code quality, maintainability, and consistency across the project.

## General Principles

### 1. YAGNI (You Aren't Gonna Need It)
- Only implement features that are required for the landing page
- Avoid over-engineering and unnecessary abstractions
- Focus on the core functionality needed

### 2. KISS (Keep It Simple, Stupid)
- Prefer simple, straightforward solutions
- Avoid complexity when a simpler approach works
- Code should be easy to understand and maintain

### 3. DRY (Don't Repeat Yourself)
- Eliminate code duplication
- Create reusable components and utilities
- Share common logic and styles

## File Naming Conventions

### JavaScript/TypeScript Files
Use **kebab-case** with descriptive names:
- `components/hero-section.tsx`
- `components/navigation-menu.tsx`
- `utils/image-optimization.ts`
- `hooks/use-scroll-position.ts`

### Component Organization
- Group components by feature/functionality
- Use nested directory structure for complex components
- Keep files under 200 lines when possible

### Asset Files
- Images: Use meaningful, descriptive names
- Fonts: Use consistent naming convention
- Styles: Keep organized and well-documented

## TypeScript Standards

### 1. Strict Mode
- Enable TypeScript strict mode in `tsconfig.json`
- Use explicit types for all function parameters and return values
- Avoid `any` type - use proper typing instead

### 2. Type Definitions
```typescript
// Good: Explicit types
interface User {
  name: string;
  email: string;
}

function validateUser(user: User): boolean {
  return user.name.length > 0 && user.email.includes('@');
}

// Avoid: Using any
function processData(data: any): any {
  // Poor practice - avoid this
}
```

### 3. Function Component Types
```typescript
// Use React.FC type for components
const HeroSection: React.FC = () => {
  return <div>...</div>;
};

// Or inline type
const HeroSection = (): JSX.Element => {
  return <div>...</div>;
};
```

## React Component Standards

### 1. Component Structure
```typescript
// Well-structured component
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = ''
}) => {
  // Implementation
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
```

### 2. Hooks Usage
- Use hooks at the top level of components
- Follow the Rules of Hooks
- Create custom hooks for reusable logic

### 3. Prop Handling
- Always define TypeScript interfaces for props
- Use optional props sparingly and with clear defaults
- Validate props with PropTypes or TypeScript runtime checks

## Styling Standards

### 1. Tailwind CSS Approach
- Use utility classes instead of custom CSS
- Follow mobile-first design patterns
- Responsive classes should be ordered from smallest to largest

```typescript
// Good: Tailwind utility classes
<div className="bg-blue-500 text-white p-4 md:p-6 lg:p-8">

// Avoid: Custom CSS
<div className="custom-button">
```

### 2. Responsive Design
- Mobile-first approach (sm:, md:, lg: breakpoints)
- Use consistent spacing and typography scales
- Test on multiple device sizes

### 3. CSS Architecture
- Use Tailwind's built-in design system
- Override with custom CSS only when necessary
- Organize utility classes by purpose

## Code Organization

### 1. Directory Structure
```
lavida/
├── app/
│   ├── components/          # Page-specific components
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
├── hooks/                # Custom hooks
├── styles/              # Global styles
├── types/               # TypeScript type definitions
└── utils/              # Utility functions
```

### 2. Component Organization
- Group components by functionality
- Create index files for barrel exports
- Keep related components together

### 3. File Size Management
- Keep individual files under 200 lines
- Split large components into smaller components
- Extract logic into custom hooks or utilities

## Error Handling

### 1. Error Boundaries
- Implement error boundaries for component errors
- Provide fallback UI for error states
- Log errors to monitoring service

### 2. API Error Handling
- Try-catch blocks for async operations
- Graceful degradation for failed requests
- User-friendly error messages

### 3. Validation
- Validate user inputs before processing
- Use TypeScript for compile-time validation
- Runtime validation for dynamic data

## Performance Standards

### 1. Image Optimization
- Use Next.js Image component
- Specify proper dimensions and formats
- Implement lazy loading

### 2. Code Splitting
- Let Next.js handle automatic code splitting
- Use dynamic imports for heavy components
- Avoid unnecessary bundle bloat

### 3. Caching
- Utilize Next.js built-in caching
- Implement proper cache headers
- Cache static assets effectively

## Testing Standards

### 1. Unit Testing
- Test all custom hooks
- Test utility functions
- Test component rendering and behavior

### 2. Component Testing
- Test user interactions
- Test responsive behavior
- Test error states

### 3. Integration Testing
- Test component interactions
- Test data flow
- Test API integration

## Code Review Checklist

### Before Review
- [ ] TypeScript strict mode enabled
- [ ] All function parameters typed
- [ ] No `any` types used
- [ ] Component files under 200 lines
- [ ] Proper error handling implemented
- [ ] Performance considerations addressed
- [ ] Responsive design tested

### Quality Metrics
- Code coverage minimum 80%
- No linting errors
- No TypeScript errors
- All tests passing
- Security best practices followed

## Commit Standards

### Commit Message Format
```
feat: add hero section with call-to-action
fix: resolve navigation menu responsiveness issue
docs: update code standards documentation
```

### Branch Strategy
- Main branch for production releases
- Develop branch for ongoing development
- Feature branches for specific features

## Documentation Standards

### Component Documentation
- JSDoc comments for all components
- Props documentation with types
- Usage examples where helpful

### Code Comments
- Explain complex logic
- Document business decisions
- TODO items for future improvements

### README
- Project setup instructions
- Development workflow
- Deployment process

## Accessibility Standards

### 1. ARIA Labels & Focus Management
- Use meaningful ARIA labels for interactive elements
- Provide alternative text for all images
- Ensure keyboard navigation works for all components
- **Focus Trap Requirements**: For mobile menu and modals:
  - Tab key cycles through interactive elements
  - Shift+Tab allows reverse navigation
  - Escape key closes/cancels
  - aria-expanded attribute properly managed
  - Body scroll lock implemented when dialogs are open

### 2. Color Contrast
- Follow WCAG AA standards for text contrast (minimum 4.5:1)
- Use proper color combinations for readability
- Test colors on different background shades
- **Gold Color Standard**: #9a7b0a for text on white backgrounds
- **Color Variants**:
  - accent-400: For decorative elements
  - accent-500: For text elements (better contrast)

### 3. Screen Reader Support
- Structure content with proper heading hierarchy
- Use semantic HTML elements
- Provide skip navigation links
- JSON-LD schema must not contain mock data