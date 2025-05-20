import { useState, useEffect, useContext } from "react";
import UserContext from "../helper/UserContext";
import blog_api from "../helper/blog_api";
import { useNavigate } from "react-router-dom";
const useFetch = (url = "", method = "GET") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [needsAuth, setNeedsAuth] = useState(null);
  const [auth, setAuth] = useContext(UserContext);
  const navigate = useNavigate();
  url = blog_api + url;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (!token) setNeedsAuth(true);
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
            setAuth(false);
            localStorage.removeItem("token");
            setTimeout(() => {
              return navigate("/login");
            }, 5000);
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
