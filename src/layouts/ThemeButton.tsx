import { useEffect, useState } from "react";
import { themes } from "../constant/themes";

const themeStorage = import.meta.env.VITE_APP_THEME_STORAGE;

const ThemeButton = () => {
  const [theme, setTheme] = useState(() => {
    // 從 localStorage 讀取主題
    return localStorage.getItem(themeStorage) || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(themeStorage, theme); // 將主題存入 localStorage
  }, [theme]);

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1 btn-md text-lg">
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-3 w-3 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-[1] p-2 shadow-2xl text-base-content"
      >
        {themes.map((t) => (
          <li key={t}>
            <input
              onClick={() => setTheme(t)}
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={t}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeButton;
