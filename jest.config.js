module.exports = {
  testMatch: ['**/*.integration.spec.tsx'],
  "moduleNameMapper": {
    "@/(.+)": "<rootDir>/src/$1",
    "\\.(css|less)$": "identity-obj-proxy"
  },
  "testEnvironment": "jsdom",
  'roots': [
    '<rootDir>/src'
  ],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  setupFilesAfterEnv: [
    '<rootDir>/src/tests/integrationSetup.ts'
  ],
}
