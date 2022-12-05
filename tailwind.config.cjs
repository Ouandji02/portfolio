/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    backgroundSize: {
      cover: "cover",
    },
    screens: {
      xs:"420px",
      xs2: "560px",
      sm: "640px",
      md: "768px",
      md2: "796px",
      mdsm: "930px",
      lgsm: "1000px",
      lg: "1024px",
      xl: "1280px",
      sx: "468px",
      minixs: "328px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
