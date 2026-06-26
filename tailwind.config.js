/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      // ---- Tech theme palette (dark navy/slate + teal) ----
      brown: "#0A1826", // navy panel surface (subhero / contact)
      lightBrown: "#13293B", // raised input / card surface
      darkBrown: "#06121C", // deep navy base (body bg)
      black: "#0D1B28", // navbar panel
      white: "#E8F0F6", // cool off-white text tint
      cyan: "#1FCFCF", // PRIMARY accent - bright teal
      lightCyan: "#5CE5E5", // lighter teal
      darkCyan: "#0E8F8F", // darker teal
      orange: "#4C8DFF", // SECONDARY accent - electric blue
      lightOrange: "#7BAEFF", // lighter blue
      darkOrange: "#2E63D6", // darker blue
      grey: "#7B8794", // slate grey
      lightGrey: "#94A3B8", // light slate text
      darkGrey: "#1E2C3A", // dark slate
    },
    extend: {
      boxShadow: {
        // Teal glow shadows (soft, diffused)
        cyanShadow: "0px 0px 20px 0px rgba(31, 207, 207, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(31, 207, 207, 0.22)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(31, 207, 207, 0.45)",
        orangeBigShadow: "10px 10px 1000px 500px rgba(76, 141, 255, 0.22)",
        orangeMediumShadow: "10px 10px 200px 150px rgba(76, 141, 255, 0.4)",
      },
      fontFamily: {
        body: ['"Inter"', "sans-serif"],
        special: ['"Space Grotesk"', "sans-serif"],
      },
    },
    plugins: [],
  },
};
