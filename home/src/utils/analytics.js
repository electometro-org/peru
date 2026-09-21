// src/utils/analytics.js
// Usage analytics for the Decide.pe homepage via the self-hosted Rybbit instance (https://rybbit.com).
//
// The homepage shares the decide.pe origin (and therefore localStorage) with the electometro app,
// so it honours the same opt-out the app writes: analytics load only when enabled AND the visitor
// has not opted out. Rybbit tracks navigation itself (SPA route changes included), so there is no
// manual pageview call. Home and app report to the same Rybbit site; a data-tag separates the two.

const analyticsEnabled = import.meta.env.VITE_RYBBIT_ENABLED === "true";
const host = String(import.meta.env.VITE_RYBBIT_HOST || "").replace(/\/+$/, "");
const siteId = import.meta.env.VITE_RYBBIT_SITE_ID;

// Rybbit checks this key once, when its script loads, and then stays silent. Shared with the app.
const OPT_OUT_KEY = "disable-rybbit";

let scriptRequested = false;

function isConfigured() {
  return analyticsEnabled && !!host && !!siteId && typeof document !== "undefined";
}

// Opt-out consent, shared with the electometro app on the same origin. Default true (opt-out model).
function hasAnalyticsConsent() {
  try {
    const consent = localStorage.getItem("analyticsConsent");
    return consent === null ? true : consent === "true";
  } catch (err) {
    console.warn("Failed to check analytics consent:", err);
    return true; // Default to true if localStorage fails
  }
}

function isActive() {
  return isConfigured() && hasAnalyticsConsent();
}

function rybbit() {
  return typeof window !== "undefined" ? window.rybbit : undefined;
}

function loadScript() {
  if (!isActive() || scriptRequested) return;
  scriptRequested = true;

  try {
    localStorage.removeItem(OPT_OUT_KEY);
  } catch { /* ignore storage errors */ }

  const el = document.createElement("script");
  el.src = `${host}/api/script.js?siteId=${encodeURIComponent(siteId)}`;
  el.async = true;
  // Same Rybbit site as the app: tag homepage traffic so the two can be segmented apart.
  el.setAttribute("data-tag", "home");
  el.onerror = () => {
    console.warn("Rybbit script failed to load (blocked or host unreachable)");
    scriptRequested = false;
  };
  document.head.appendChild(el);
}

// Load on startup when allowed
if (isConfigured()) {
  loadScript();
} else if (analyticsEnabled) {
  console.warn("Rybbit analytics enabled but VITE_RYBBIT_HOST or VITE_RYBBIT_SITE_ID is missing");
}

// Record the visitor's analytics preference. Kept API-compatible with the electometro app's
// utils/analytics so a shared consent UI behaves the same on both properties (same origin).
export function setAnalyticsConsent(consent) {
  try {
    localStorage.setItem("analyticsConsent", consent ? "true" : "false");
  } catch (err) {
    console.warn("Failed to save analytics consent:", err);
  }

  if (consent) {
    loadScript();
    return;
  }

  // Withdrawal: make Rybbit stay silent on the next load. A script that is already running keeps
  // its automatic tracking until the page reloads.
  try {
    rybbit()?.clearUserId?.();
    localStorage.setItem(OPT_OUT_KEY, "1");
  } catch { /* ignore storage errors */ }
}

// Current opt-out status (true unless the visitor has opted out on this origin).
export function getAnalyticsConsent() {
  return hasAnalyticsConsent();
}
