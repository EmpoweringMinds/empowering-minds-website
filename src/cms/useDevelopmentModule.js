
import { useEffect, useState } from "react";
import { getDevelopmentModule } from "./developmentModule";

export function useDevelopmentModule() {
  const [developmentModule, setDevelopmentModule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getDevelopmentModule()
      .then((data) => {
        if (isMounted) {
          setDevelopmentModule(data);
        }
      })
      .catch((err) => {
        console.error("Failed to load courses:", err);

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

  return { developmentModule, loading, error };
}
