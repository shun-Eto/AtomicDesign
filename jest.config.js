const { defaults } = require("jest-config");
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  },
  moduleNameMapper: {
    "^@client(.*)$": "<rootDir>/src/client/$1"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
};
