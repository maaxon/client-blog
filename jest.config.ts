const JestConfig = {
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": "ts-jest",
  },
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/cypress/"],
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/src/$1",
  },
};

export default JestConfig;