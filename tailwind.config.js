/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bg1: "#292F36",
      bg2: "#1A1E23",
      brand1: "#D7A700",
      brand2: "#D9B600",
      gray: "#273444",
      white: "#fff",
      html: "#E54F26",
      css: "#0C73B8",
      js: "#E7A020",
      react: "#28A9E0",
    },
    fontFamily: {
      ubuntuMedium: ["Ubuntu-Medium", "sans-serif"],
      ubuntuRegular: ["Ubuntu-Regular", "sans-serif"],
      ubuntuLight: ["Ubuntu-LIght", "sans-serif"],
      ibmRegular: ["IBMPlexMono-Regular", "sans-serif"],
      ibmMedium: ["IBMPlexMono-Medium", "sans-serif"],
    },

    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontSize: {
        64: "4rem",
      },
    },
  },
  plugins: [],
};
