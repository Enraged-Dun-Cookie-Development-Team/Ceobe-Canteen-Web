module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  globals: {
    JSX: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:regexp/recommended",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: true,
    },
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "import/no-unresolved": "off",
      },
    },
    {
      files: ["*.js", "*.cjs"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double", { avoidEscape: true }],
    semi: ["error", "always"],
    "@typescript-eslint/no-non-null-assertion": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          { pattern: "react", group: "builtin", position: "before" },
          { pattern: "fs-extra", group: "builtin" },
          { pattern: "lodash", group: "external", position: "before" },
          { pattern: "clsx", group: "external", position: "before" },
          { pattern: "@ui/**", group: "internal" },
        ],
        pathGroupsExcludedImportTypes: [],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
  ignorePatterns: [
    "**/node_modules",
    "**/dist",
    "**/package-lock.json",
    "**/yarn.lock",
    "**/pnpm-lock.yaml",
    "**/bun.lockb",

    "**/output",
    "**/coverage",
    "**/temp",
    "**/.temp",
    "**/tmp",
    "**/.tmp",
    "**/.history",
    "**/.vitepress/cache",
    "**/.nuxt",
    "**/.next",
    "**/.vercel",
    "**/.changeset",
    "**/.idea",
    "**/.cache",
    "**/.output",
    "**/.vite-inspect",

    "**/CHANGELOG*.md",
    "**/*.min.*",
    "**/LICENSE*",
    "**/__snapshots__",
    "**/auto-import?(s).d.ts",
    "**/components.d.ts",
    "src/components/ui/**",
  ],
};
