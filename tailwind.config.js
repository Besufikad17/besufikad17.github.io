/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      "5xs": "320px",
      // => @media (min-width: 320px) { for iphone 5 }

      "4xs": "360px",
      // => @media (min-width: 320px) { for Samsung phone }

      "3xs": "380px",
      // => @media (min-width: 380px) { ... }

      "2xs": "420px",
      // => @media (min-width: 380px) { ... }

      xs: "512px",
      // => @media (min-width: 512px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mdx: "800px",
      // => @media (min-width: 800px) { ... }
      mdxx: "850px",
      // => @media (min-width: 850px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1600px",
      // => @media (min-width: 1600px) { ... }

      "4xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      colors: {
        primary: {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#282828',
        },
        secondary: {
          '50': '#fbf8ef',
          '100': '#f3ead2',
          '200': '#ebdbb2',
          '300': '#dab86f',
          '400': '#d1a14e',
          '500': '#c78739',
          '600': '#b06a2f',
          '700': '#92502b',
          '800': '#784028',
          '900': '#633624',
          '950': '#381b10',
        },
        blue: {
          '50': '#f5f8f6',
          '100': '#dfe8e4',
          '200': '#bed1c9',
          '300': '#83a598',
          '400': '#6f9285',
          '500': '#55776b',
          '600': '#435e56',
          '700': '#384d46',
          '800': '#303f3b',
          '900': '#2a3733',
          '950': '#151e1c',
        }
      }
    },
  },
  plugins: [],
}

