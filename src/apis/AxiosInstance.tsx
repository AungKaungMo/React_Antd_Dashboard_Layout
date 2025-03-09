import Axios from "axios";

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

axios.interceptors.request.use((config) => {
  const user = localStorage.getItem("pm_user");
  if (!config.headers["Content-Type"]) {
    config.headers["Content-Type"] = "application/json";
  }

  if (user) {
    const parseUser = JSON.parse(user);
    config.headers.Authorization = `Bearer ${parseUser.token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Dispatch a custom event when a 401 error occurs
      window.dispatchEvent(new Event('UNAUTHORIZED'));
    }
    return Promise.reject(error);
  }
);
