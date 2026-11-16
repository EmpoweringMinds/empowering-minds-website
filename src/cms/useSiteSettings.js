
import { useEffect, useState } from "react";
import { getSiteSettings } from "./siteSettings";

export function useSiteSettings() {
  const [siteSettings, setSiteSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getSiteSettings()
      .then((data) => {
        if (isMounted) {
          setSiteSettings(data);
        }
      })
      .catch((err) => {
        console.error("Failed to load site settings:", err);

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
    siteSettings,
    loading,
    error,
  };
}
