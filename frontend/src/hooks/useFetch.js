import { useState, useEffect } from "react";

const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [needsAuth, setNeedsAuth] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, { method: method }, { mode: "cors" });
        if (!response.ok) {
          if (response.status === 401) {
            setNeedsAuth(true);
            return;
          }
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, error, loading, needsAuth };
};

export default useFetch;
