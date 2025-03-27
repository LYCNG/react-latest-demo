import axios from "axios";

const url = import.meta.env.VITE_APP_BASE_URL;

const axiosApi = axios.create({
  baseURL: url || "http://localhost:3002",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With",
    Authorization: `Bearer ${localStorage.getItem("fs-tech-emp")}`,
  },
});

axiosApi.interceptors.request.use(
  (config) => {
    // 從 localStorage 獲取 Token
    const token = localStorage.getItem(import.meta.env.VITE_APP_TOKEN_STORAGE);
    const empId = localStorage.getItem(import.meta.env.VITE_APP_AUTH_STORAGE);

    if (token) {
      config.headers["f-emp-id"] = `${empId}`;
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // 如果請求錯誤，則返回錯誤訊息
    return Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  (response) => {
    // ✅ 確保 `useQuery` 直接獲取 `response.data`
    return response;
  },
  (error) => {
    console.error("API Response Error Happened:", error);
    if (error.response) {
      const { data } = error.response;

      // 🔴 統一返回 API 錯誤
      return Promise.reject(data);
    }

    return Promise.reject(error);
  }
);

export default axiosApi;
