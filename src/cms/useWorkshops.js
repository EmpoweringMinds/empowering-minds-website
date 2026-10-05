import { useEffect, useState } from "react";
import { getWorkshops } from "./workshops";

export function useWorkshops() {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getWorkshops()
      .then((data) => {
        if (isMounted) {
          setWorkshops(data);
        }
      })
      .catch((err) => {
        console.error("Failed to load workshops:", err);

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
    workshops,
    loading,
    error,
  };
}