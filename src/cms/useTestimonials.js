import { useEffect, useState } from "react";
import { getTestimonials } from "./testimonials";

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getTestimonials()
      .then((data) => {
        if (isMounted) {
          setTestimonials(data);
        }
      })
      .catch((err) => {
        console.error("Failed to load tesrimonials:", err);

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
    testimonials,
    loading,
    error,
  };
}