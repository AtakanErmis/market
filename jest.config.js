// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@hooks/(.*)$": "<rootDir>/hooks/$1",
    "^@constants/(.*)$": "<rootDir>/constants/$1",
    "^@assets/(.*)$": "<rootDir>/assets/$1",
    "^@stores/(.*)$": "<rootDir>/stores/$1",
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@styles/(.*)$": "<rootDir>/styles/$1",
    "^@interfaces/(.*)$": "<rootDir>/interfaces</$1",
    "^@utils/(.*)$": "<rootDir>/utils/$1",
    "^@config/(.*)$": "<rootDir>/config/$1",
    "^@pages/(.*)$": "<rootDir>/pages/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
