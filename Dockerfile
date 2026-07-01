# syntax=docker/dockerfile:1

# ---- Build stage: compile the static Astro site ----
# Debian-based (not alpine) so Astro's sharp image optimization works out of the box.
FROM node:22-slim AS build
WORKDIR /app

# pnpm via corepack (lockfile is pnpm v10)
RUN corepack enable && corepack prepare pnpm@10 --activate

# Install deps first for better layer caching
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# Build the site. PUBLIC_* vars are inlined at build time, so the Formspree
# id must be passed as a build arg (optional — falls back to a mailto link).
COPY . .
ARG PUBLIC_FORMSPREE_ID=""
ENV PUBLIC_FORMSPREE_ID=$PUBLIC_FORMSPREE_ID
RUN pnpm build

# ---- Runtime stage: serve the static output with nginx ----
FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Simple healthcheck so orchestrators (Dokploy) know the app is up
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
