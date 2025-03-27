/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "lofi",
      "dracula",
      "business",
      "coffee",
      "winter",
      "halloween",
      "night",
      "forest",
      "dim",
      "dark",
      "valentine",
    ],
  },
};
