# Zaid's World — Cinematic 3D Experience

This repository hosts **Zaid's World**, a cinematic, motion-rich React experience featuring 3D globes, parallax storytelling, and interactive booking flows. The project is powered by Vite, Tailwind CSS, Framer Motion, and Three.js via React Three Fiber.

## Getting started

```bash
npm install
npm run dev
```

The development server runs on [http://localhost:5173](http://localhost:5173) with hot module replacement.

## Building for production

```bash
npm run build
```

The optimized output is generated in the `dist/` directory. You can preview the production build locally with:

```bash
npm run preview
```

## Tech stack

- **React 18 + Vite** — modern component-driven architecture and fast bundling.
- **Tailwind CSS** — responsive, utility-first styling with custom neon gradients.
- **Framer Motion & GSAP-ready** — smooth scroll-triggered animations and hover interactions.
- **Three.js + @react-three/fiber** — immersive 3D globes, floating imagery, and camera motion.

## Project structure

```
├─ index.html          # Vite entry point
├─ src/
│  ├─ App.jsx          # Layout and section routing
│  ├─ components/      # Navigation and shared UI components
│  ├─ sections/        # Cinematic content sections (Home, Photography, Art, Travel, Contact, Booking)
│  └─ index.css        # Tailwind layers + custom styles
└─ public/             # (optional) static assets
```

## Deployment tips

1. Run `npm run build`.
2. Serve the generated `dist/` directory on your preferred static host (Netlify, Vercel, GitHub Pages, etc.).
3. For GitHub Pages, publish the contents of `dist/` to the `gh-pages` branch or configure your repository to serve from the build output.

Enjoy crafting and extending Zaid’s cinematic world! ✨
