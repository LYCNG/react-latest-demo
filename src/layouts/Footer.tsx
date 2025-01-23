import { useTranslation } from "react-i18next";
import { framework } from "../constant/navs";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 flex justify-around">
      <nav>
        <h6 className="text-slate-400 h-7 uppercase">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="text-slate-400 h-7 uppercase">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="text-slate-400 h-7 uppercase">
          {" "}
          {t("footer.framework")}
        </h6>
        {framework.map((nav) => (
          <a
            key={nav.title}
            className="link link-hover"
            href={nav.path}
            target="_blank"
          >
            {nav.title}
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
