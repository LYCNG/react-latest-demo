import { gridThemes } from "../constant/gridTheme";
import { useGridTheme } from "../hooks/useGridTheme";

interface AgThemeSelectorProps {
  onDark?: boolean;
}

const AgThemeSelector: React.FC<AgThemeSelectorProps> = ({ onDark = true }) => {
  const { theme, changeTheme, dark, setDark } = useGridTheme();

  return (
    <div className="flex flex-row gap-2 items-center p-2">
      <select
        className="select select-bordered select-sm w-full max-w-xs"
        onChange={(e) => changeTheme(e.currentTarget.value)}
        style={{ marginRight: 16 }}
        value={theme.id}
      >
        {gridThemes.map((option, i) => (
          <option key={i} value={option?.id}>
            {option?.id || "(unchanged)"}
          </option>
        ))}
      </select>
      <label
        className={`flex cursor-pointer gap-2  ${onDark ? "block" : "hidden"} `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <input
          type="checkbox"
          checked={dark}
          className="toggle theme-controller"
          onChange={(e) => setDark(e.target.checked)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  );
};

export default AgThemeSelector;
