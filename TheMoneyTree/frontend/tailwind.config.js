/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", 
  "./components/**/*.{js,ts,jsx,tsx}", 
  "./pages/**/*.{js,ts,jsx,tsx}",
],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        purple: '#dba4eb', // Remove the curly braces and colon
        dark: '#76199e',
        'soft-dark': '#2A2A2F', // Wrap the key in quotes if it contains a hyphen
        green: '#32a852',
        white: '#f5f7f6',
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
  plugins: [require("nativewind/babel")],
}



///*eslint-env node*/
// const path = require('path');

// module.exports = {
//   content: [
//     path.join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
//     path.join(__dirname, './components/**/*.{js,ts,jsx,tsx}'),
//   ],
//   theme: {
//     extend: {
//       colors: {
//         purple: '#dba4eb', // Remove the curly braces and colon
//         dark: '#1C1C1E',
//         'soft-dark': '#2A2A2F', // Wrap the key in quotes if it contains a hyphen
//       },
//       spacing: {
//         '2x': '20px',
//         '3x': '30px',
//       },
//       borderRadius: {
//         '4xl': '40px',
//       },
//     },
//   },
//   plugins: [require("nativewind/babel")], // Use require instead of string
// };