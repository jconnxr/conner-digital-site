/**
 * Canonical site origin (https + host, no trailing slash).
 * Set NEXT_PUBLIC_SITE_URL in Vercel so sitemap, robots, OG, and JSON-LD match your live domain (www vs apex).
 *
 * TODO(john): confirm the canonical domain — three are currently in play and
 * production is pointed at a dead one.
 *   - Production NEXT_PUBLIC_SITE_URL is "https://www.jnjmanagementsolutions.com"
 *     (the pre-rebrand partnership domain). It does NOT resolve. Every canonical
 *     tag, og:url, JSON-LD url, sitemap entry and the robots.txt sitemap line on
 *     the live site currently point there. Fix in Vercel → Settings → Environment
 *     Variables; the code cannot override it.
 *   - The site actually serving this repo is https://www.connerdigitalsolutions.com
 *   - The fallback below is www.connerdigital.com, which is a SEPARATE live Wix
 *     site, not this one.
 * Once you decide, set the env var AND update the fallback to match.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  return "https://www.connerdigital.com";
}
