
import { useEffect } from "react";
import {
  useLocation,
  useNavigationType,
} from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Don't interfere with tab changes or browser history.
    if (navigationType !== "PUSH") return;

    // Handle anchor navigation, e.g. #form
    if (hash) {
      const targetId = hash.slice(1);

      requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      });

      return;
    }

    // New page navigation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

  }, [pathname, hash, navigationType]);

  return null;
}
