module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: require.resolve("@typescript-eslint/parser"),
      parserOptions: {
        sourceType: "module"
      },
      plugins: ["@typescript-eslint", "react", "import"],
      rules: {
        "import/no-unresolved": "off",
        "no-dupe-class-members": 0,
        "node/no-unsupported-features/es-syntax": 0,
        "spaced-comment": [
          2,
          "always",
          { line: { markers: ["/"] }, block: { balanced: true } }
        ],
        "no-unused-vars": 0,
        "@typescript-eslint/no-unused-vars": [2, { args: "none" }],
        "no-array-constructor": 0,
        "@typescript-eslint/no-array-constructor": 2,
        "@typescript-eslint/adjacent-overload-signatures": 2,
        "@typescript-eslint/no-namespace": [2, { allowDeclarations: true }],
        "@typescript-eslint/prefer-namespace-keyword": 2,
        "@typescript-eslint/no-var-requires": 2,
        "no-console": "off",
        "react/jsx-no-target-blank": "error",
        "react/jsx-uses-react": [1],
        "react/prop-types": 0,

        // 以下の設定は将来的に有効化してください
        "no-dupe-else-if": 0,
        "no-import-assign": 0,
        "no-setter-return": 0,
        "jest/no-conditional-expect": 0,
        "jest/no-commented-out-tests": 0,
        "jest/expect-expect": 0
      },
      globals: {
        console: false,
        process: false,
        Buffer: false,
        setTimeout: false,
        Promise: false,
        __dirname: false,
        Reflect: false,
        FileReader: false,
        ArrayBuffer: false,
        FormData: false,
        document: false,
        window: false,
        localStorage: false,
        location: false,
        URLSearchParams: false,
        ENV: true
      },
      env: {
        browser: true,
        es2020: true,
        node: true
      },
      settings: {
        "import/resolver": {
          node: {
            extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
          },
          webpack: {
            config: "./webpack/client/webpack.config.base.js",
            extensions: [".js", ".jsx", ".ts", ".tsx", ".mjs"]
          }
        },
        node: {
          tryExtensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".node"]
        },
        react: {
          version: "detect"
        }
      }
    }
  ]
};
