module.exports = {
  preset: "ts-jest", 
  testEnvironment: "node", 
  testMatch:  ["<rootDir>/**/*.test.(js|jsx|ts|tsx)",
  "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
]};