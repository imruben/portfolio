# Rubén Peñaranda — Portfolio

A clean, minimal personal portfolio for a backend developer specialized in
**Golang & PHP**, built with [Astro](https://astro.build) and Tailwind CSS v4.

It's a single page with Hero, About, Skills, Experience, Projects, and Contact
sections. Project cards are pulled live from GitHub at build time, and the
contact form posts to Formspree.

## 🚀 Project structure

```text
src/
├── data/            # Editable content (site.ts, skills.ts, experience.ts)
├── lib/github.ts    # Build-time fetch of top public repos
├── layouts/         # BaseLayout (head/SEO/header/footer)
├── components/      # Hero, About, Skills, Experience, Projects, Contact, …
├── styles/          # global.css (Tailwind + theme tokens)
└── pages/index.astro
```

Almost all copy lives in `src/data/*.ts` — edit those to update content without
touching markup.

## ⚙️ Setup

1. **Install dependencies**

   ```sh
   pnpm install
   ```

2. **Add your résumé (optional)** — drop a PDF at `public/resume.pdf`. The
   "Download CV" buttons link to `/resume.pdf`.

3. **Enable the contact form (optional)** — create a free form at
   [Formspree](https://formspree.io), then:

   ```sh
   cp .env.example .env
   # set PUBLIC_FORMSPREE_ID=your_form_id   (the part after /f/ in the endpoint)
   ```

   Without this, the contact section falls back to a direct "Email me" button.

4. **Set your domain** for SEO — update `url` in `src/data/site.ts` once deployed
   (used for canonical and Open Graph tags).

## 🧞 Commands

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `pnpm install`  | Install dependencies                         |
| `pnpm dev`      | Start local dev server at `localhost:4321`   |
| `pnpm build`    | Build the production site to `./dist/`       |
| `pnpm preview`  | Preview the build locally before deploying   |

> Per project convention, run the dev server in the background:
> `pnpm astro dev --background` (manage with `astro dev status|logs|stop`).

## 🐳 Deploy with Docker / Dokploy

The included multi-stage `Dockerfile` builds the static site with Node/pnpm and
serves it with nginx on port **80**.

Locally:

```sh
docker build -t portfolio .
docker run -p 8080:80 portfolio       # → http://localhost:8080
```

**Dokploy:** create an *Application*, point it at this repo, choose the
**Dockerfile** build type, and set the exposed port to **80**. To enable the
contact form, add a build argument `PUBLIC_FORMSPREE_ID=<your_id>` (it's inlined
at build time; without it the site falls back to a mailto link).

> Tip: `me.jpg` is ~7 MB — consider compressing it (e.g. to WebP) before
> deploying for a faster hero load.
