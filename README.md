# SaaS Startup Landing Page

A premium, conversion‑focused SaaS landing page template with auth screens and a responsive dashboard. Built with React + Vite + Tailwind CSS. Includes local‑only routing (no backend).

## Highlights
- High‑end SaaS marketing UI inspired by Stripe/Vercel/Linear aesthetics
- Full landing page sections: hero, trusted logos, integrations, features, showcase, how it works, pricing, testimonials, FAQ, CTA, footer
- Auth screens: Sign In / Sign Up (template only)
- Dashboard UI: responsive layout with sidebar, stats, and activity (template only)
- Componentized architecture for fast customization
- SEO meta tags + Open Graph + Twitter cards
- Custom icons + Framer Motion animations
- Local‑only routing with a lightweight router (no backend required)

## Demo Link 
- https://saa-s-startup-landing-page.vercel.app/

## Routes
- `/` Home (landing page)
- `/signin` Sign in (template only)
- `/signup` Sign up (template only)
- `/dashboard` Demo dashboard (template only)
- `404` Not found

## Tech Stack
- React (Vite)
- Tailwind CSS
- Framer Motion
- Lucide Icons + React Icons

## Local‑Only / No Backend
This project is a **front‑end template**. There is **no backend** or real authentication. The sign‑in/sign‑up forms accept dummy data and redirect to a demo dashboard for presentation purposes.

## Getting Started
1. Install dependencies
   - `npm install`
2. Run the dev server
   - `npm run dev`
3. Build for production
   - `npm run build`

## Folder Structure
- `src/components/sections` – Landing page sections
- `src/components/layouts` – Layout shells (site, auth, dashboard)
- `src/components/ui` – Reusable UI components
- `src/pages` – App pages (Home, Sign In/Up, Dashboard, 404)
- `src/router` – Lightweight local router
- `src/data` – Content data for sections
- `public` – Static assets, favicon set, OG image

## Customization
- Edit copy and data in `src/data/content.js`.
- Swap section order in `src/pages/Home.jsx`.
- Update colors and typography in `tailwind.config.cjs`.
- Update global styles in `src/index.css`.

## Assets
- Dashboard/analytics mockups are SVGs in `public/images/`.
- Avatars are SVG placeholders in `public/avatars/`.
- Social image: `public/images/og-image.png`.

## Notes
- This is a **template**. Replace dummy links, emails, and phone numbers with real content.
- If you want real routing, replace the custom router with `react-router-dom`.
- This is ready to be sold as a digital product.
