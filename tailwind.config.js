module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      text: "#000000",
      gray: "#777777",
      brand300: "#C54380",
      accent300: "#F0C671",
      white: "#fff",
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1200px",
        xl: "1200px",
      },
    },
    fontFamily: {
      main: "PraieiraUI",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
