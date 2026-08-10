export const GA_MEASUREMENT_ID = "G-QGWKPEYRX9";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fire a GA4 event. Safe to call before/without the gtag script loading. */
export function trackEvent(
  name: string,
  params: Record<string, string | number | boolean> = {}
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
