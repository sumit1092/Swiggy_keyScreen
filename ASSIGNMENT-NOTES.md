# Assignment Notes

## Why this screen

Swiggy Dineout is a strong assignment choice because it combines:

- a premium marketing-style hero section,
- search and filter interactions,
- collection cards,
- repeated restaurant card components,
- desktop-to-mobile responsiveness.

It is realistic to complete within 24 hours while still showcasing frontend craftsmanship.

## Technology choices

- **Next.js**: Fast setup, App Router structure, and optimized image handling.
- **TypeScript**: Safer props and scalable component contracts.
- **Tailwind CSS**: Rapid iteration for pixel-accurate UI and responsive states.

## Project structure

- `src/app/` keeps routing and layout concerns isolated.
- `src/components/` groups reusable feature components by responsibility.
- `src/services/restaurant.service.ts` centralizes Axios API integration.
- `src/data/` centralizes static restaurant, category, and offer content.
- `src/types/` keeps interfaces reusable and maintainable.

## Challenges faced

- Matching the feel of the original Dineout page while using stable public media references.
- Preserving strong visual hierarchy across mobile, tablet, and desktop sizes.
- Designing restaurant cards that feel rich while staying reusable.

## Improvements over the original inspiration

- Cleaner component boundaries for easier maintenance.
- Simplified sections to keep the interface fast and readable.
- Consistent spacing, CTA hierarchy, and accessible contrast choices.

## Maintainability and performance

- Reusable typed components reduce duplication.
- `next/image` improves loading behavior for visual-heavy cards.
- Axios service fallback data keeps the UI available if the recipe API fails.
- Static data separation makes future API integration straightforward.
- Responsive utility classes ensure cross-device consistency.
