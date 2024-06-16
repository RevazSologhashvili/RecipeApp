/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.htlm",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        //Primary colors
        BrandyRed: "hsl(14,45%,36%)",
        DarkRaspberry: "hsl(332, 51%, 32%)",
        //Neutral Colors
        Snow: "hsl(330, 100%, 98%)",
        Eggshell: "hsl(30, 54%, 90%)",
        WhiteCoffe: "hsl(30, 18%, 87%)",
        WengeBrown: "hsl(30, 10%, 34%)",
        DarkCharcoal: "hsl(24, 5%, 18%)",
      }
    },
  },
  plugins: [],
}

