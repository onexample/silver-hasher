module.exports = {
    collectCoverage: true,
    coverageDirectory: "./coverage",
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.(ts|js)x?$": "babel-jest",
    },
};
