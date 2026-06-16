import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, wait a bit for DOM to render, then scroll to element
      const sectionId = hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Otherwise, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
