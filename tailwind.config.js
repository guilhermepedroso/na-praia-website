module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      text: "#000000",
      brand300: "#C54380",
      accent300: "#F0C671",
      white: "#fff",
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1100px",
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
  plugins: [],
};
