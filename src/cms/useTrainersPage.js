import { useEffect, useState } from "react";
import { getTrainersPage } from "./trainersPage";

export function useTrainersPage() {
  const [trainersPage, setTrainersPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getTrainersPage()
      .then((data) => {
        if (isMounted) {
          setTrainersPage(data);
        }
      })
      .catch((err) => {
        console.error("Failed to load trainers page data:", err);

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
    trainersPage,
    loading,
    error,
  };
}