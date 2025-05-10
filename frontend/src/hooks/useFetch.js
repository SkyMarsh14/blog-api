import { useState, useEffect, useContext } from "react";
import UserContext from "../helper/UserContext";
import blog_api from "../helper/blog_api";
const useFetch = (url = "", method = "GET") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [needsAuth, setNeedsAuth] = useState(null);
  const [auth, setAuth] = useContext(UserContext);
  url = blog_api + url;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const options = {
          method: method,
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          mode: "cors",
        };
        const response = await fetch(url, options);
        if (!response.ok) {
          if (response.status === 401) {
            setNeedsAuth(true);
            setAuth(false);
            localStorage.removeItem("token");
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
