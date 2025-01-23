import { FaRegUser } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { IoLanguage, IoMenu } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

import { useMemo } from "react";
import { lngList } from "../constant/lng";
import { themes } from "../constant/themes";

const useGlobalTheme = import.meta.env.VITE_APP_USE_THEME === "true";
const useGlobalI18n = import.meta.env.VITE_APP_USE_I18N === "true";

interface NavbarBurgerProps {
  username: string;
  isAuth: boolean;
  language: string;
  setTheme: (theme: string) => void;
  changeLanguage: (lng: string) => void;
  logout: () => void;
}
const NavbarBurger: React.FC<NavbarBurgerProps> = ({
  username,
  isAuth,
  language,
  setTheme,
  changeLanguage,
  logout,
}) => {
  const Language = useMemo(() => {
    return lngList.find((lng) => lng.code === language)?.name || "Language";
  }, [language]);

  return (
    <div className="drawer drawer-end ">
      <input id="drawer-burger" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="drawer-burger"
          className="drawer-button btn btn-outline btn-sm text-base-200"
        >
          <IoMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="drawer-burger"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4 ">
          {/* Sidebar content here */}
          <li className={`${isAuth ? "block" : "hidden"}`}>
            <details open>
              <summary>
                <FaRegUser className="w-5 h-5" />
                <section className="text-xl pl-4">{username}</section>
              </summary>
              <ul>
                <li onClick={logout}>
                  <a className="text-lg">
                    <MdLogout className="w-5 h-5" />
                    Logout
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li className={`${useGlobalTheme ? "block" : "hidden"}`}>
            <details open>
              <summary>
                <IoIosColorPalette className="w-5 h-5" />
                <section className="text-xl pl-4">Theme</section>
              </summary>
              <ul>
                {themes.map((t) => (
                  <li key={t}>
                    <input
                      onClick={() => setTheme(t)}
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller btn btn-block btn-ghost justify-start text-lg"
                      aria-label={t}
                    />
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li className={`${useGlobalI18n ? "block" : "hidden"}`}>
            <details open>
              <summary>
                <IoLanguage className="w-5 h-5" />
                <section className="text-xl pl-4 ">{Language}</section>
              </summary>
              <ul>
                {lngList.map((lng) => (
                  <li>
                    <input
                      onClick={() => changeLanguage(lng.code)}
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller btn btn-block btn-ghost justify-start text-lg"
                      aria-label={lng.name}
                    />
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarBurger;
