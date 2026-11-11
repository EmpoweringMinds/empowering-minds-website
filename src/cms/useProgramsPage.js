import { useEffect, useState } from "react";
import { getProgramsPage } from "./programsPage";

export function useProgramsPage() {
  const [programsPage, setProgramsPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getProgramsPage()
      .then((data) => {
        if (isMounted) {
          setProgramsPage(data);
        }
      })
      .catch((err) => {
        console.error("Failed to load course page data:", err);

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
    programsPage,
    loading,
    error,
  };
}