# AquaDrop – Landing éco-luxe

Premium landing page SPA pour AquaDrop, pastilles de gel douche à dissoudre dans un flacon mousseur en rPET.

## Scripts

- `npm run dev` – lance le serveur de développement Vite.
- `npm run build` – génère la build de production dans `dist/`.
- `npm run preview` – prévisualise la build de production.
- `npm run lint` – exécute ESLint.

## Tech stack

- React + TypeScript (Vite)
- Tailwind CSS (thème eco-luxe personnalisé)
- Framer Motion (animations respectant `prefers-reduced-motion`)
- ESLint + Prettier

## Design tokens

Les couleurs, typographies et rayons sont définis dans `tailwind.config.js`. Modifiez `theme.extend.colors` ou `fontFamily` pour ajuster la palette/typo.

## Déploiement GitHub Pages

Un workflow GitHub Actions (`.github/workflows/pages.yml`) construit et publie automatiquement le site sur GitHub Pages lors des pushs sur `main`.
