import { useEffect, useState } from "react";
import { getContactPage } from "./contactPage";

export function useContactPage() {
  const [contactPage, setContactPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getContactPage()
      .then((data) => {
        if (isMounted) {
          setContactPage(data);
        }
      })
      .catch((err) => {
        console.error("Failed to load Contact page data:", err);

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
    contactPage,
    loading,
    error,
  };
}