/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'purple': '#dba4eb',
      spacing: {
        '2x': '20px',
        '3x': '30px',
            },
      borderRadius: {
          '4xl': '40px',
             }
      }
    },
  },
  plugins: ["nativewind/babel"],
}

