module.exports = {
  preset: "react-native",
  collectCoverage: true,
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-navigation)"
  ],
  moduleNameMapper: {
    "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
    "^[@./a-zA-Z0-9$_-]+\\.(png|gif)$": "RelativeImageStub"
  },
  collectCoverageFrom: [
      "src/**/*.{ts,tsx}"
  ],
    testMatch: [
      "<rootDir>__tests__/**/?(*.)(spec|test).js?(x)"
  ],
  setupFilesAfterEnv: [
    "<rootDir>__tests__/setupTests.js"
  ],
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/node_modules/"
  ],
  unmockedModulePathPatterns: [
    "<rootDir>/node_modules/react"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js",
    "\\.(css|less)$": "<rootDir>/assetsTransformer.js"
  }
};