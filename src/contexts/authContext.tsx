import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api";
import { ToastConfig } from "../constant/toastConfig";

export type AuthUserType = {
  empId: string;
  empName: string;
  isAuth: boolean;
};

type AuthContextType = {
  user: AuthUserType;
  login: (account: string, password: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const store_key = import.meta.env.VITE_APP_AUTH_STORAGE;
const token_key = import.meta.env.VITE_APP_TOKEN_STORAGE;

const AuthUserProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<AuthUserType>({
    empId: "",
    empName: "",
    isAuth: false,
  });

  const logout = () => {
    localStorage.removeItem(token_key);
    localStorage.removeItem(store_key);
    setUser({ empId: "", empName: "", isAuth: false });
    return navigate("/login");
  };

  useEffect(() => {
    const userState =
      localStorage.getItem(store_key) || sessionStorage.getItem(store_key);
    const token = localStorage.getItem(token_key);

    if (userState) {
      const state = JSON.parse(userState);
      setUser(state);
      return;
    }
    if (!userState || !token) {
      logout();
    }
  }, [navigate]);

  const login = async (account: string, password: string) => {
    try {
      const res = await api.post("api/user/login", {
        account: account,
        password: password,
      });
      const result = await res.data;
      if (result.success) {
        toast.success(result.message, ToastConfig(2000));
        const { token, user } = result.data!;
        localStorage.setItem("fs-tech-emp", user.empId);
        localStorage.setItem(token_key, token);
        setUser({ ...user, isAuth: true });
        navigate("/");
        return;
      } else {
        throw new Error(result.message);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message, ToastConfig(3000));
      } else if (typeof err === "object" && err !== null && "response" in err) {
        const axiosError = err as { response: { data: { message: string } } };
        toast.error(axiosError.response.data.message, ToastConfig(3000));
      } else {
        toast.error("An unknown error occurred", ToastConfig(3000));
      }
    }
  };
  const validateToken = () => {
    const token = localStorage.getItem(token_key);
    if (!token) {
      // 沒有 token，跳轉到登入畫面
      return logout();
    }
  };

  useEffect(() => {
    validateToken();
  }, [location.pathname]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthUserProvider;
