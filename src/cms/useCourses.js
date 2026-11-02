
import { useEffect, useState } from "react";
import { getCourses } from "./courses";

export function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getCourses()
      .then((data) => {
        if (isMounted) {
          setCourses(data);
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

  return { courses, loading, error };
}
