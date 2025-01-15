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
      <div tabIndex={0} role="button" className="btn m-1 btn-sm">
        Theme
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content border-2 menu bg-primary text-primary-content rounded-box z-[1] w-52  shadow"
      >
        {themes.map((t) => (
          <li key={t}>
            <a onClick={() => setTheme(t)}>{t}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeButton;
