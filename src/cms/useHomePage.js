
import { useEffect, useState } from "react";
import { getHomePage } from "./homePage";

export function useHomePage() {
  const [homePage, setHomePage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getHomePage()
      .then((data) => {
        if (isMounted) {
          setHomePage(data);
        }
      })
      .catch((err) => {
        console.error("Failed to load homepage data:", err);

        if (isMounted) {
          setError(err);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    homePage,
    loading,
    error,
  };
}
