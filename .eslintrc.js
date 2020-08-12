module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2020": true,
        "jest/globals": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 11
    },
    "plugins": [
        "jest"
    ],
    "rules": {
        "jest/no-duplicate-hooks": "error"
    }
};
