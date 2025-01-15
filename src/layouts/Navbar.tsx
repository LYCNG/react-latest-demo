import ThemeButton from "./ThemeButton";

const Navbar = () => {
  const title = import.meta.env.VITE_APP_TITLE;
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{title}</a>
      </div>

      <div className="navbar-end">
        <ThemeButton />
      </div>
    </div>
  );
};

export default Navbar;
