import { useTranslation } from "react-i18next";

import { useAuth } from "../hooks/useAuth";

import { useTheme } from "../hooks/useTheme";
import AvatarMenu from "./AvatarMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import NavbarBurger from "./NavbarBurger";
import ThemeButton from "./ThemeButton";

const useGlobalTheme = import.meta.env.VITE_APP_USE_THEME === "true";
const useGlobalI18n = import.meta.env.VITE_APP_USE_I18N === "true";

const Navbar = () => {
  const title = import.meta.env.VITE_APP_TITLE;
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // 切換語言
  };

  const { user, logout } = useAuth();
  const { setTheme } = useTheme();

  return (
    <div className="navbar bg-primary text-primary-content fixed top-0 justify-center">
      <div className="md:flex-1 ">
        <a className="btn btn-ghost text-xl">
          {" "}
          {/* <img src={""} alt="logo" className="w-10 h-10 mr-2" /> */}
          {title}
        </a>
      </div>

      <div className="hidden navbar-end  md:flex">
        {user.isAuth && (
          <AvatarMenu username={user.username} onLogout={logout} />
        )}

        {useGlobalI18n && <LanguageSwitcher />}
        {useGlobalTheme && <ThemeButton />}
      </div>
      <div className="md:hidden ">
        <NavbarBurger
          username={user.username}
          isAuth={user.isAuth}
          language={i18n.language}
          setTheme={setTheme}
          changeLanguage={changeLanguage}
          logout={logout}
        />
      </div>
    </div>
  );
};

export default Navbar;
