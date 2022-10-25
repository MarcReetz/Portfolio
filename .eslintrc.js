module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  env: {
    browser: true,
    es2021: true,
    "amd": true,
    "node": true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off"
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: [
        '@typescript-eslint',
      ],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      rules: {
        "no-unused-vars": "warn",
        "react/react-in-jsx-scope": "off",
      },
    },
  ],
};
/*module.exports = {
  env: {
    browser: true,
    es2021: true,
    "amd": true,
    "node": true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx",".ts",".tsx"] }], //should add ".ts" if typescript project
  },
  "overrides": [
    {
      "files": ["*.js"],
      "rules": {
        "react/prop-types": "off",
        "@typescript-eslint/...": "off"
      },
    }
  ]
};*/
