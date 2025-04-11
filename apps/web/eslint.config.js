import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";

export default [
    {
        ignores: ["dist/**", "sample/**"],
    },
    eslint.configs.recommended,
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: "module",
                project: "./tsconfig.json",
            },
            globals: {
                URL: "readonly",
                process: "readonly",
                describe: "readonly",
                it: "readonly",
                expect: "readonly",
                beforeEach: "readonly",
                afterAll: "readonly",
            },
        },
        plugins: {
            "@typescript-eslint": tseslint,
            "prettier": prettier,
            "import": importPlugin,
        },
        settings: {
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                },
            },
        },
        rules: {
            // Prettier 연동
            "prettier/prettier": "error",

            // TypeScript 규칙
            "@typescript-eslint/explicit-function-return-type": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                    varsIgnorePattern: "^_",
                    args: "none",
                },
            ],
            "no-unused-vars": "off",
            "@typescript-eslint/no-floating-promises": "error",
            "@typescript-eslint/no-misused-promises": "error",
            "@typescript-eslint/consistent-type-imports": "error",
            "@typescript-eslint/no-shadow": "error",

            // 코드 클린업
            "no-param-reassign": "error",

            // Import 관련 규칙
            "sort-imports": "off",
            "import/order": [
                "error",
                {
                    "groups": [
                        "builtin",
                        "external",
                        "internal",
                        "parent",
                        "sibling",
                        "index",
                        "object",
                        "type",
                    ],
                    "newlines-between": "always",
                    "alphabetize": {
                        order: "asc",
                        caseInsensitive: true,
                    },
                },
            ],
            "import/no-cycle": "error",
            "import/no-useless-path-segments": "error",
        },
    },
];
