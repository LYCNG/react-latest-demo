import React, { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api";
import { ToastConfig } from "../constant/toastConfig";

export type AuthUserType = {
  userId: string;
  username: string;
  isAuth: boolean;
  [key: string]: unknown;
};

const initUser: AuthUserType = {
  userId: "",
  username: "",
  isAuth: false,
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
  const { t } = useTranslation();

  const location = useLocation();
  const [user, setUser] = useState<AuthUserType>(initUser);

  const logout = () => {
    localStorage.removeItem(token_key);
    localStorage.removeItem(store_key);
    setUser(initUser);
    return navigate("/login");
  };
  const login = async (account: string, password: string) => {
    try {
      const res = await api.post("/api/auth/login", {
        account: account,
        password: password,
      });
      console.log(res);
      if (res.status !== 200) {
        throw new Error("Login failed");
      } else {
        const result = res.data;
        toast.success(t("loginStatus.success"), ToastConfig(2000));
        const data = result.data;
        localStorage.setItem("fs-tech-emp", data.empId);
        localStorage.setItem(token_key, data.token);
        localStorage.setItem(store_key, JSON.stringify(data));
        setUser({
          userId: data.empId,
          username: data.empName,
          isAuth: true,
          department: data.department,
          ...data,
        });
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(t("loginStatus.failed"), ToastConfig(3000));
      } else if (typeof err === "object" && err !== null && "response" in err) {
        const axiosError = err as { response: { data: { message: string } } };
        toast.error(axiosError.response.data.message, ToastConfig(3000));
      } else {
        toast.error("An unknown error occurred", ToastConfig(3000));
      }
    }
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
  }, [location.pathname]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthUserProvider;
