import LanguageSwitcher from "./LanguageSwitcher";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  const title = import.meta.env.VITE_APP_TITLE;
  const useTheme = import.meta.env.VITE_APP_USE_THEME === "true";
  const useI18n = import.meta.env.VITE_APP_USE_I18N === "true";
  return (
    <div className="navbar bg-primary text-primary-content fixed top-0">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{title}</a>
      </div>
      <div className="navbar-end">
        {useI18n && <LanguageSwitcher />}
        {useTheme && <ThemeButton />}
      </div>
    </div>
  );
};

export default Navbar;
