/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      fontVina: ["Vina Sans", "sans-serif"],
      fontManrope: ["Manrope", "sans-serif"],
      grotesk: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#1dd100",
        secondary1: "#ffffff",
        nu10: "#1dd10066",
        nu20: "#1dd1001a",
        nu30: "#ffbf0f",
        nu40: "#021120",
        nu50: "#f78c9c",
        nu60: "#f7f8f8",
        nu70: "#0307120d",
        nu80: "#030712",
      },
      screens: {
        xs: "380px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1296px",
        "3xl": "1600px",
        "4xl": "1700px",
        "5xl": "1940px",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  // plugins: plugins,
};
