# Mahesh Bongani — Portfolio (React + Vite + Tailwind)

This is a minimal portfolio site scaffold using React, Vite and Tailwind CSS.

Quick start (Windows PowerShell):

1. Install dependencies

   npm install

2. Run dev server

   npm run dev

3. Build for production

   npm run build

4. Preview production build

   npm run preview

Notes:
- Customize content in `src/data/resume.js` and components in `src/components`.
- This repo includes Tailwind config and PostCSS setup.

Deploy to GitHub Pages
- Ensure your repository name is `portfolio` or update `vite.config.js` base accordingly.
- Install gh-pages dev dependency (included in package.json).
- Run the deploy script to publish the `dist` folder to `gh-pages` branch:

   npm run deploy

After publishing, your site will be available at https://<your-github-username>.github.io/portfolio/

Customizations
- Replace `public/avatar-placeholder.svg` and `public/project-placeholder.png` with your own images.
- Replace `public/resume.txt` with `resume.pdf` for a downloadable resume.
