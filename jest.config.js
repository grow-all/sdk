module.exports = {
  "collectCoverage": true,
  "collectCoverageFrom": [
    "src/**/*.ts"
  ],
  "coverageReporters": [
    "lcov",
    "text-summary"
  ],
  "transform": {
    "^.+\\.ts$": "ts-jest"
  },
  "testRegex": "/test/.+\\.spec\\.ts$",
  "moduleDirectories": [
    "node_modules",
    "<rootDir>",
    "<rootDir>/src/*"
  ],
  "testEnvironment": "jsdom",
  "moduleFileExtensions": [
    "ts",
    "js",
    "json"
  ],
  "setupFiles": [
  ],
  "testEnvironmentOptions": {
    "resources": "usable", // 允许 jsonp 请求
    "proxy": "http://127.0.0.1:3000",
  }
}