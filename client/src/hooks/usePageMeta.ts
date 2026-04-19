import { useEffect } from "react";

/**
 * Sets the document title and scrolls to top on mount.
 * Used on every page for SEO and UX.
 */
export function usePageMeta(title: string) {
  useEffect(() => {
    document.title = `${title} — Rustwood | Aaron Ellis`;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [title]);
}
