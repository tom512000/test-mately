import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
    { ignores: ["dist"] },
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: { jsx: true },
                sourceType: "module",
            },
        },
        settings: { react: { version: "18.3" } },
        plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,
            ...reactHooks.configs.recommended.rules,

            indent: ["error", 4],
            quotes: ["error", "double"],
            semi: ["error", "always"],
            "jsx-quotes": ["error", "prefer-double"],

            "react/jsx-no-target-blank": "off",
            "react/jsx-indent": ["error", 4],
            "react/jsx-indent-props": ["error", 4],
            "react/self-closing-comp": "error",
            "react/jsx-boolean-value": ["error", "never"],

            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],

            "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "eol-last": ["error", "always"],
            "no-trailing-spaces": "error",
        },
    },
];
