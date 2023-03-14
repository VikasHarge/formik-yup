/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'pink': '#EA5959',
      'grey' : '#525252',
      'darkGrey' : "#5A5A5A",
      'black' : '#000000',
      'borderGrey' : '#D8D8D8',
      'red' : '#FF0000',
      'lightPink' : '#F3F3F3',
      'white' : '#ffff',
      'lightBlue' : '#c1dced'
 
    },
    fontSize: {
      'pm': ['31px', {
        fontWeight: '700',
      }],
      'sd1': ['22px', {
        fontWeight: '700',
      }],
      'sd2': ['22px', {
        fontWeight: '400',
      }],
      'th': ['18px', {
        fontWeight: '400',
      }],
    },
    fontFamily: {
      lato : ['Lato', 'sans-serif'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      borderRadius: {
        'pm': '8px',
        'sd': '2rem',
      },
      boxShadow: {
        'pm': '0px 10px 10px rgba(0, 0, 0, 0.25)',
      },
      padding : {
        '2x' : '2px',
        '4x' : '4px',
        '6x' : '6px',
        '8x' : '8px',
        '10x' : '10px',
        '12x' : '12px',
        '14x' : '14px',
        '16x' : '16px',
      },
    },
  },
  plugins: [],
}
