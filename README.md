# Raq's Running Blog

A personal running blog built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com), hosted on GitHub Pages.

**Live site:** https://ajrequenez.github.io/raq-running-blog

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/raq-running-blog](http://localhost:3000/raq-running-blog) in your browser.

## Writing Articles

Articles are written in MDX format in `src/app/articles/[slug]/page.mdx`.

Each article needs:
- An `article` export with `title`, `description`, `author`, and `date`
- A `metadata` export for SEO
- A default export wrapping content in `ArticleLayout`

See `src/app/articles/welcome/page.mdx` for an example.

## Deployment

The site automatically deploys to GitHub Pages on push to `main` via GitHub Actions.

To deploy manually:

```bash
npm run build
```

The static site is output to the `out/` directory.

## Customization

- **Your photos:** Replace `src/images/avatar.jpg` and `src/images/portrait.jpg`
- **Site metadata:** Edit `src/app/layout.tsx`
- **Races & Goals:** Edit `src/app/races/page.tsx`
- **Gear:** Edit `src/app/gear/page.tsx`

## Tech Stack

- [Next.js 15](https://nextjs.org) - React framework
- [Tailwind CSS 4](https://tailwindcss.com) - Styling
- [MDX](https://mdxjs.com) - Content authoring
- [GitHub Pages](https://pages.github.com) - Hosting
