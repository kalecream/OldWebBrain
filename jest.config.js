module.exports = {
    preset: "ts-jest",
    testEnvironment: "node", 
    moduleFileExtensions: ["ts", "js"],
    testMatch: ["**/*.test.(ts|js)"], 
    collectCoverage: true, 
    collectCoverageFrom: ["src/**/*.{ts,js}"], 
  };
  