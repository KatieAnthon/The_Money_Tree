
/** @type {import('expo/metro-config').MetroConfig} */
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname, { isCSSEnabled: true })

// module.exports = withNativeWind(config, { input: './global.css' })