module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [
    "<rootDir>/**/*.test.(js|jsx|ts|tsx)",
    "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
  ],
  collectCoverageFrom: [
    "**/src/**/*.(js|jsx|ts|tsx)",
    "!**/node_modules/**",
    "!**/src/routes/*.(js|jsx|ts|tsx)",
    "!**/src/**/exception/**",
    "!src/app.ts",
    "!src/start.ts",
    '!src/**/entity/**',
    '!src/**/repository/**',
  ],
};
