/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app*.{js,jsx,ts,tsx}",
    "./pages/**/**/*.{js,jsx,ts,tsx}",
    "./components/**/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        purple: {
          default: '#dba4eb',
          light: '#f5d0fe',
          dark: '#612057',
        },
        'midnight': {
          default:'#9866ea',
          light:'#58055a',
          dark: '#3c0764',
        },
        pink: {
        default: '#ea66cd',
        light: '#f77ce3',
        dark: '#bb2aa4',
        },

        fuchsia: {
          default: '#c026d3',
          light: '#f0abfc',
          dark: '#4a044e'
        },
        'dark': '#76199e',
        'soft-dark': '#2A2A2F', 
        'green': '#32a852',
        'white': '#f5f7f6',
      },
      spacing: {
        '2x': '20px',
        '3x': '30px',
      },
      borderRadius: {
        '4xl': '40px',
      },
    },
  },
  plugins: [],
}
