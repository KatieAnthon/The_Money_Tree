module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["@babel/preset-react", { jsxImportSource: "nativewind" }],
      "babel-preset-expo",
      "nativewind/babel"
    ],
    plugins: 
    [
      "react-native-reanimated/plugin"
    ]
  };
};

//
