/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        cursor: "cursor .6s linear infinite alternate",
        type: "type 1.8s ease-out .8s 1 normal both",
        "type-reverse": "type 1.8s ease-out 0s infinite alternate-reverse both",
        type: 'type 2.7s ease-out .8s infinite alternate both',
        wave:"wave 1.5s linear both",
        menu : "menu 0.3s linear both",
        zoom:"zoom 0.8s linear both"
      },
      keyframes: {
        type: {
          "0%": { width: "0ch" },
          "5%, 10%": { width: "1ch" },
          "15%, 20%": { width: "2ch" },
          "25%, 30%": { width: "3ch" },
          "35%, 40%": { width: "4ch" },
          "45%, 50%": { width: "5ch" },
          "55%, 60%": { width: "6ch" },
          "65%, 70%": { width: "7ch" },
          "75%, 80%": { width: "8ch" },
          "85%, 90%": { width: "9ch" },
          "95%": { width: "10ch" },
        },
        wave:{
          "0%,5%":{ opacity:0,  transform: 'translateY(100ch)'},
          "5%,25%":{ opacity:0.25,  transform: 'translateY(75ch)'},
          "25%, 50%":{ opacity:0.5,  transform: 'translateY(50ch)'},
          "50%,75%":{ opacity:0.75,  transform: 'translateY(25ch)'},
          "75%,100%":{ opacity:1,  transform: 'translateY(0ch)'},
        },
        menu:{
          "0%,5%":{ opacity:0,  transform: 'translateY(-100ch)'},
          "5%,25%":{ opacity:0.25,  transform: 'translateY(-75ch)'},
          "25%, 50%":{ opacity:0.5,  transform: 'translateY(-50ch)'},
          "50%,75%":{ opacity:0.75,  transform: 'translateY(-25ch)'},
          "75%,100%":{ opacity:1,  transform: 'translateY(0ch)'},
        },
        zoom:{
          "0%,25%":{  transform: 'scale-0'},
          "25%, 50%":{  transform: 'scale-50'},
          "50%,75%":{   transform: 'scale-100'},
          "75%,100%":{   transform: 'scale-125'},
        }
      },
    },
    backgroundSize: {
      cover: "cover",
    },
    screens: {
      xs: "420px",
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
