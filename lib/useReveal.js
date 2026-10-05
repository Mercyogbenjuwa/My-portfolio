import { useEffect } from "react";

// Marks [data-reveal] elements visible as they scroll in; re-scans when the route changes.
export default function useReveal(routeKey) {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll("[data-reveal]:not(.is-visible)"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [routeKey]);
}
