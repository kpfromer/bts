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
        bts: {
          400: "#ff5527",
          500: "#ff420f",
          600: "#e63b0e",
        },
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
