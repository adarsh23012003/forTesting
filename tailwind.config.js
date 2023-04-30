/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#97A1FF',
        secondary: '#B8B9CB',
        carddes: '#BFC1D1',
        cardhead: '#474747',
        cardtitle: '#B5B6C9',
        cardborder: '#7E8AFE',
        warning: '#BBC0FC',
        search: '#5060FF'
      }
    },
  },
  plugins: [],
}

