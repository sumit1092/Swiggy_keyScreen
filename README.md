# Swiggy Dineout Clone

This project recreates the Swiggy Dineout discovery experience with Next.js, TypeScript, Tailwind CSS, and Axios.

## Stack

- Next.js App Router with the `src/app` directory
- TypeScript for typed restaurants, offers, categories, and dishes
- Tailwind CSS v4 for responsive styling
- Axios for the recipe API configured through `.env`
- `next/image` for Swiggy and recipe imagery

## Project Structure

- `src/app/` - app routes, root layout, global styles, and restaurant detail route
- `src/components/` - grouped UI sections such as layout, search, filters, banners, categories, restaurants, skeletons, and primitives
- `src/data/` - static Swiggy-inspired restaurant, offer, and category content
- `src/services/` - Axios API calls for dishes
- `src/types/` - shared TypeScript contracts
- `src/hooks/` - client-side search and filter state
- `src/utils/` - formatting and rating helpers

## Environment

Create `.env` in the project root:

```bash
RECIPES_API_URL=https://dummyjson.com/recipes?utm_source=chatgpt.com
```

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.
