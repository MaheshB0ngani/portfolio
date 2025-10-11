# React Portfolio Template (Data-Driven)

A data-driven React + Vite portfolio template inspired by Ryan Fitzgerald's devportfolio. Configure your content in `src/data/resume.js` and `src/data/site.config.js`.

## Quick start

1. Install dependencies
```
npm install
```
2. Run locally
```
npm run dev
```
3. Build
```
npm run build
```
4. Deploy to GitHub Pages (gh-pages branch)
```
npm run deploy
```
Ensure your repo settings: Settings → Pages → Branch: `gh-pages` / Root.

## Customize your content

- `src/data/resume.js`
  - `name`, `title`, `contact`: Top-of-page info and contact email.
  - `socials`: URLs for twitter, github, stackoverflow, and email mailto. Example:
    ```js
    socials: {
      twitter: 'https://x.com/yourhandle',
      github: 'https://github.com/you',
      stackoverflow: 'https://stackoverflow.com/users/<id>/<slug>',
      email: 'mailto:you@example.com'
    }
    ```
  - `skills`: Three columns, arrays of strings.
  - `experience`: Array of roles `{ company, period, role, bullets[] }`.
  - `projects`: Each with `{ title, description, links: { source, demo }, tags: [] }`.
  - `education`: `{ degree, school, years }`.

- `src/data/site.config.js`
  - Control which sections show and their order:
    ```js
    sections: [
      { id: 'about', label: 'About', enabled: true },
      { id: 'projects', label: 'Projects', enabled: true },
      { id: 'experience', label: 'Experience', enabled: true },
      { id: 'education', label: 'Education', enabled: true },
      { id: 'contact', label: 'Contact', enabled: true },
    ]
    ```

## Project images (optional)
- Place images in `public/` and reference them using `import.meta.env.BASE_URL` so they work on GitHub Pages:
  ```jsx
  <img src={`${import.meta.env.BASE_URL}my-project.png`} alt="project" />
  ```
- The Projects component includes a commented image block you can re-enable.

## Styling
- Tailwind CSS is compiled at build time via PostCSS. Avoid using the CDN in production.
- Custom utilities live in `src/index.css` (e.g., card-interactive, timeline, hero styles).

## Deploy elsewhere
- Any static host works: upload the `dist/` folder.
- For custom domains on GitHub Pages, add a `CNAME` file in `public/`.

## Troubleshooting
- If navigation looks off or icons are large, ensure the built CSS is loaded. Hard refresh (Ctrl+F5).
- Pages must publish from `gh-pages` branch with the Vite `base` set to your repo name in `vite.config.js`.

## License
This template is provided as-is. Replace the sample content with your own.
