const WORKER_URL = "/service-worker.js";

// registerServiceWorker starts the offline shell.
// A browser without service worker support, or a development server, keeps
// working without it.
export function registerServiceWorker(): void {
  if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    void navigator.serviceWorker.register(WORKER_URL).catch(() => undefined);
  });
}
