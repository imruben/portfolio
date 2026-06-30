export interface Repo {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  updatedAt: string;
}

// Brand colors for the small language dot on each project card.
const LANGUAGE_COLORS: Record<string, string> = {
  Go: "#00ADD8",
  PHP: "#4F5D95",
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  "C#": "#178600",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Shell: "#89E051",
  Python: "#3572A5",
  Dockerfile: "#384D54",
  Makefile: "#427819",
  Vue: "#41B883",
  Astro: "#FF5A03",
};

export function languageColor(lang: string | null): string {
  return (lang && LANGUAGE_COLORS[lang]) || "#94A3B8";
}

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

/**
 * Fetches a user's public repos at build time and returns the top `limit`
 * non-fork, non-archived repos ranked by stars, then most-recently pushed.
 * Returns an empty array on any failure so the build never breaks.
 */
export async function fetchTopRepos(
  username: string,
  limit = 6,
): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "portfolio-build",
        },
      },
    );

    if (!res.ok) {
      console.warn(`[github] Could not fetch repos for ${username}: ${res.status}`);
      return [];
    }

    const data = (await res.json()) as GitHubRepo[];

    return data
      .filter((r) => !r.fork && !r.archived)
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          Date.parse(b.pushed_at) - Date.parse(a.pushed_at),
      )
      .slice(0, limit)
      .map((r) => ({
        name: r.name,
        description: r.description,
        url: r.html_url,
        homepage: r.homepage,
        language: r.language,
        stars: r.stargazers_count,
        forks: r.forks_count,
        topics: r.topics ?? [],
        updatedAt: r.pushed_at,
      }));
  } catch (err) {
    console.warn(`[github] Error fetching repos for ${username}:`, err);
    return [];
  }
}
