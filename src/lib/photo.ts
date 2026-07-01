import fs from "node:fs";
import path from "node:path";

/**
 * Looks for a profile photo in /public at build time and returns its public
 * path (e.g. "/me.jpg"), or null if none exists so the UI can show a fallback.
 * Drop a file named me.jpg / me.png (etc.) into /public to enable it.
 */
export function findProfilePhoto(): string | null {
  const candidates = [
    "me.jpg",
    "me.jpeg",
    "me.png",
    "me.webp",
    "me.avif",
    "profile.jpg",
    "profile.png",
  ];

  for (const file of candidates) {
    const full = path.join(process.cwd(), "public", file);
    if (fs.existsSync(full)) return `/${file}`;
  }

  return null;
}
