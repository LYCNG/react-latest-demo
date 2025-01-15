import { useState } from "react";
import { FormType } from "./types";

const LoginPage = () => {
  const [form, setForm] = useState<FormType>({
    account: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-700">
        DaisyUI
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="label">
            <span className="text-base label-text">Account</span>
          </label>
          <input
            type="text"
            placeholder="Enter Account"
            onChange={(e) => setForm({ ...form, account: e.target.value })}
            className="w-full input input-bordered"
          />
        </div>
        <div>
          <label className="label">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Enter Password"
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
