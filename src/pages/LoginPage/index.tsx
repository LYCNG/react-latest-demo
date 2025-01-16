import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FormType } from "./types";

const LoginPage = () => {
  const title = import.meta.env.VITE_APP_TITLE;
  const [form, setForm] = useState<FormType>({
    account: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  const { t } = useTranslation();

  return (
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-700">
        {title} - {t("loginPage.title")}
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="label">
            <span className="text-base label-text">
              {t("loginPage.account")}
            </span>
          </label>
          <input
            type="text"
            placeholder={t("loginPage.enter.account")}
            onChange={(e) => setForm({ ...form, account: e.target.value })}
            className="w-full input input-bordered"
          />
        </div>
        <div>
          <label className="label">
            <span className="text-base label-text">
              {t("loginPage.password")}
            </span>
          </label>
          <input
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder={t("loginPage.enter.password")}
            className="w-full input input-bordered"
          />
        </div>
        <a
          href="#"
          className="text-xs text-gray-600 hover:underline hover:text-blue-600 hidden"
        >
          Forget Password?
        </a>
        <br />
        <div>
          <button className="btn-neutral btn btn-block">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
