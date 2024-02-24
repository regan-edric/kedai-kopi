/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B6895B",
        putihtulisan: "#FFF",
      },
      flex: {
        about: "1 1 45rem",
        contentabout: "1 1 35rem",
      },
      gridTemplateColumns: {
        autofitmenu: "repeat(auto-fit, minmax(30rem, 1fr))",
      },
      zIndex: {
        full: "9999",
      },
      backgroundColor: {
        hitamTransparan: "rgba(0,0,0,0.5)",
      },
      margin: {
        "15persen": "15%",
      },
    },
  },
  plugins: [],
};
