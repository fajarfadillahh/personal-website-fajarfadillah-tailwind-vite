module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "767px",
      lg: "968px",
      xl: "1120px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#212529",
      grey: "#6c757d",
      white: "#ffffff",
      body: "#fafafa",
      red: "#ff477e",
      yellow: "#f6d365",
    },
    fontFamily: {
      body: ["Rubik", "sans-serif"],
    },
    fontWeight: {
      reguler: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      title: "140%",
      text: "170%",
    },
    transitionDuration: {
      400: "400ms",
    },
    extend: {},
  },
  plugins: [],
};
