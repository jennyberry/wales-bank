/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      green: {
        60: "#CAFF33",
        65: "#D1FF4C",
        70: "#D8FF66",
        80: "#E5FF99"
      },
      gray: {
        10:"#191919",
        11: "#1C1C1C",
        15: "#262626",
        20: "#333333",
        30: "#4C4C4D",
        60: "#98989A",
        70: "#B3B3B3"
      }

    },
  },
  plugins: [],
};
