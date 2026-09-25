import { useEffect, useState } from "react";
import { getTrainers } from "./trainers";

export function useTrainers() {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getTrainers()
      .then((data) => {
        if (isMounted) {
          setTrainers(data);
        }
      })
      .catch((err) => {
        console.error("Failed to load trainers:", err);

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
    trainers,
    loading,
    error,
  };
}