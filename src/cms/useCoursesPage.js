import { useEffect, useState } from "react";
import { getCoursesPage } from "./coursesPage";

export function useCoursesPage() {
  const [coursesPage, setCoursesPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getCoursesPage()
      .then((data) => {
        if (isMounted) {
          setCoursesPage(data);
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
    coursesPage,
    loading,
    error,
  };
}