module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@zach.codes/react-calendar/dist/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        logo: "#ff420f",
      },

      fontFamily: {
        header: ["Airstrip Four"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
