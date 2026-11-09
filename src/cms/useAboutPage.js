import { useEffect, useState } from "react";
import { getAboutPage } from "./aboutPage";

export function useAboutPage() {
  const [aboutPage, setAboutPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getAboutPage()
      .then((data) => {
        if (isMounted) {
          setAboutPage(data);
        }
      })
      .catch((err) => {
        console.error("Failed to load about page data:", err);

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
    aboutPage,
    loading,
    error,
  };
}