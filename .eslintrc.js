require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:import/recommended",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
  ],
  plugins: ["unused-imports", "import"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  ignorePatterns: ["/public/game/*.js"],
  files: ["./src/**/*.{vue,js,jsx,cjs,mjs,ts,tsx,cts,mts}"],
  ignorePatterns: ["node_modules/", "dist/"],
  rules: {
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
          {
            pattern: "vue",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/constants/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "{@/components/**,@/views/**}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "./*",
            group: "sibling",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "always-and-inside-groups",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "comma-dangle": ["error", "never"],
    "vue/no-deprecated-filter": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "prefer-const": "off",
    "vue/no-v-model-argument": "off",
    "vue/no-mutating-props": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-reserved-component-names": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-useless-escape": "off",
    "no-prototype-builtins": "off",
    "no-unreachable": "off",
    "no-empty": "off",
    "vue/no-deprecated-slot-attribute": "off",
    "vue/no-unused-components": ["error"],
    "no-self-assign": "off",
    "no-case-declarations": "off",
    "vue/no-v-for-template-key-on-child": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-this-alias": "off",
    "no-redeclare": "off",
    "vue/require-valid-default-prop": "off",
    "no-dupe-keys": "off",
    "vue/return-in-computed-property": "off",
    "no-empty-pattern": "off",
    "vue/no-dupe-keys": "off",
    "no-fallthrough": "off",
    "vue/require-v-for-key": ["error"],
    "vue/valid-v-for": "off",
    "vue/no-template-key": "off",
    "no-constant-condition": ["error", { checkLoops: false }],
    "vue/no-computed-properties-in-data": "off",
    "valid-typeof": "off",
    "vue/no-useless-template-attributes": "off",
    "vue/no-v-text-v-html-on-component": "off",
    "import/no-unresolved": "error",
    "import/named": "error",
    "import/no-unused-modules": "error",
    "vue/prefer-import-from-vue": "error",
    "import/no-named-as-default": "off",
    "unused-imports/no-unused-imports": "error",
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "import/extensions": ["warn", "ignorePackages", { vue: "always" }],
      },
    },
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".vue", ".js", ".ts", ".json"],
      },
    },
  },
};
