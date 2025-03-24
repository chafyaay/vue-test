// jest.config.js (CommonJS syntax)
module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest",
  },
};
