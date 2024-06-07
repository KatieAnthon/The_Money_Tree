/** @type {import('tailwindcss').Config} */
// const nativewind = require("nativewind/tailwind/css")


module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        purple: {
          default: '#dba4eb',
          light: '#f5d0fe',
          dark: '#62a839',
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



// {
//   "name": "themoneytree",
//   "version": "1.0.0",
//   "scripts": {
//     "start": "expo start --dev-client",
//     "android": "expo run:android",
//     "ios": "expo run:ios",
//     "web": "expo start --web",
//     "test": "jest"
//   },
//   "dependencies": {
//     "@expo-google-fonts/comfortaa": "^0.2.3",
//     "@expo/metro-runtime": "~3.2.1",
//     "@react-native/metro-config": "^0.74.83",
//     "@testing-library/react": "^15.0.7",
//     "@types/react": "~18.2.79",
//     "amqplib": "^0.10.3",
//     "emoji-mart": "^5.6.0",
//     "expo": "~51.0.8",
//     "expo-dev-client": "~4.0.14",
//     "expo-document-picker": "^12.0.1",
//     "expo-router": "^3.5.14",
//     "expo-secure-store": "^13.0.1",
//     "expo-status-bar": "~1.12.1",
//     "jest-expo": "~51.0.2",
//     "react": "18.2.0",
//     "react-dom": "18.2.0",
//     "react-native": "0.74.1",
//     "react-native-auth0": "^3.2.1",
//     "react-native-flatlist": "^0.0.0",
//     "react-native-pie-chart": "^3.0.2",
//     "react-native-reanimated": "~3.11.0",
//     "react-native-web": "~0.19.10",
//     "react-test-renderer": "^18.2.0",
//     "setimmediate": "^1.0.5",
//     "typescript": "~5.3.3",
//     "uuid": "^9.0.0"
//   },
//   "devDependencies": {
//     "@babel/core": "^7.20.0",
//     "@babel/plugin-transform-async-generator-functions": "^7.21.0",
//     "@babel/plugin-transform-class-properties": "^7.21.0",
//     "@babel/plugin-transform-logical-assignment-operators": "^7.21.0",
//     "@babel/plugin-transform-nullish-coalescing-operator": "^7.21.0",
//     "@babel/plugin-transform-numeric-separator": "^7.21.0",
//     "@babel/plugin-transform-object-rest-spread": "^7.21.0",
//     "@babel/plugin-transform-optional-catch-binding": "^7.21.0",
//     "@babel/plugin-transform-optional-chaining": "^7.21.0",
//     "@types/react-native": "^0.73.0",
//     "autoprefixer": "^10.4.19",
//     "babel-preset-expo": "^11.0.7",
//     "jest": "^29.7.0",
//     "jest-expo": "^51.0.2",
//     "metro": "^0.80.9",
//     "nativewind": "^2.0.11",
//     "postcss": "^8.4.38",
//     "querystring": "^0.2.1",
//     "tailwindcss": "^3.3.2"
//   },
//   "jest": {
//     "verbose": true,
//     "preset": "jest-expo",
//     "testEnvironment": "jsdom",
//     "transformIgnorePatterns": [
//       "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@tailwind)"
//     ],
//     "setupFiles": [
//       "./jest.setup.js"
//     ]
//   },
//   "private": true
// }
