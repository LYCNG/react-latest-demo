import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // 切換語言
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1 btn-md text-lg">
        <IoLanguage />
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
        className="dropdown-content bg-base-300 rounded-box z-[1] p-2 shadow-2xl text-base-content w-32"
      >
        <li>
          <input
            onClick={() => changeLanguage("en")}
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label={"English"}
          />
        </li>
        <li>
          <input
            onClick={() => changeLanguage("zh-tw")}
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label={"繁體中文"}
          />
        </li>
        <li>
          <input
            onClick={() => changeLanguage("jp")}
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label={"日本語"}
          />
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
