module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        es2021: true,

        jest: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    extends: [
        // '@react-native-community',
        // 'react-app', /* buggy(askdj23s) */
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        // 'plugin:@typescript-eslint/recommended'/* buggy(askdj23s) */
        // 'prettier-eslint',
        // 'prettier',
        // 'eslint-config-prettier',
        /* --------- */
        // - 'eslint:recommended'
        // - 'plugin:import/errors'
        // - 'plugin:import/warnings'
        // - 'plugin:import/typescript'
        // - 'plugin:jest/all'
        // - 'plugin:react/recommended'
        // - airbnb
        // - 'plugin:@typescript-eslint/eslint-recommended'
        // - 'plugin:@typescript-eslint/recommended'
        // - 'plugin:prettier/recommended'
        // - 'prettier/@typescript-eslint'

        /* --------- */


    ],
    // 'parser': '@typescript-eslint/parser',
    parser: '@typescript-eslint/parser',
    // 'parserOptions": { "project": ["./tsconfig.json"] },

    plugins: ['react' /* buggy(askdj23s) */,
        '@typescript-eslint',
        // "eslint-plugin-prettier",
    ],

    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
            flowVersion: '0.53',
        },
    },
    // overrides: [
    //   {
    //     "files": ["src/**/*.ts"],
    //     // "rules": {
    //     //   "quotes": [2, "single"]
    //     // }
    //   }
    // ],
    // "testMatch":"src/**/*.ts",
    overrides: [
        {
            // 'files': ['*.js', '*.jsx'],
            files: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
        },
    ],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/require-default-props': 'warn',
        // 'react/jsx-props-no-multi-spaces': 'warn',
        'react/no-array-index-key': 'warn',

        'react/forbid-prop-types': 'off',
        'react/jsx-uses-react': 'off',
        // 'react/jsx-boolean-value': 'warn',
        'react/jsx-uses-vars': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'no-constant-condition': 'off',
        'promise/catch-or-return': 'off',
        'promise/always-return': 'off',
        'react/no-access-state-in-setstate': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'react/self-closing-comp': 'off',
        'react/button-has-type': 'off',
        'import/no-useless-path-segments': 'off',
        // 'react/prop-types': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/interactive-supports-focus': 'off',
        'import/newline-after-import': 'off',
        'import/extensions': 'off',
        'import/order': 'off',
        'import/prefer-default-export': 'off',
        'import/first': 'off',
        'react/destructuring-assignment': ['off', 'never'],

        indent: [0, 2],
        'linebreak-style': ['warn', 'unix'],
        'no-var': 'warn',
        'prefer-template': 'off',
        'prefer-arrow-callback': 'warn',
        'no-use-before-define': 'off',
        // "@typescript-eslint/no-use-before-define": ["error"],
        'vars-on-top': 'warn',
        'eol-last': 'warn',
        'no-multiple-empty-lines': 'warn',
        'no-unused-vars': 'off',
        'no-dupe-keys': 'warn',

        'spaced-comment': 'off',
        'no-tabs': 'off',
        'func-names': 'off',
        'arrow-parens': 'off',
        'space-before-function-paren': 'off',
        'quote-props': 'off',
        'no-trailing-spaces': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        'object-shorthand': 'off',
        'max-len': 'off',
        'comma-dangle': 'off',
        'react/no-unused-state': 'off',
        'lines-between-class-members': 'off',
        'no-unused-labels': 'warn',
        'no-console': 'off',

        'prefer-destructuring': [
            'off',
            {
                object: true,
                array: false,
            },
        ],
        // quotes: ['warn', 'single'],
        'prefer-const': 'warn',
        'no-restricted-syntax': 'warn',
        'no-prototype-builtins': 'off',
        'arrow-body-style': 'off',
        eqeqeq: 'off',
        'consistent-return': 'off',
        'space-infix-ops': 'off',
        'operator-assignment': 'warn',
        camelcase: 'off',
        radix: 'off',
        'no-unneeded-ternary': 'warn',
        'operator-linebreak': 'off',
        'no-plusplus': [
            'off',
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        // 'no-plusplus': [
        //     'warn',
        //     {
        //         allowForLoopAfterthoughts: true,
        //     },
        // ],
        // 'no-restricted-globals': 'warn',
        'function-paren-newline': 'off',
        'no-multi-spaces': 'off',
        'object-curly-newline': 'off',
        'no-else-return': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-filename-extension': 'off',
        'object-curly-spacing': 'off',
        'comma-spacing': 'off',
        'key-spacing': 'off',
        'react/jsx-tag-spacing': 'off',
        'padded-blocks': 'off',
        'block-spacing': 'off',
        'global-require': 'warn',
        'react/jsx-wrap-multilines': 'warn',
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'no-restricted-globals': 'warn',
        'react/jsx-key': 'off',
        // 'react/display-name': 'warn',
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-extra-semi': 'warn',
        '@typescript-eslint/ban-types': 'off',
        'react/display-name': 'off',
        // 'prefer-const': 'warn',
        // '@typescript-eslint/no-empty-function': 'warn',
        'react/no-unescaped-entities': 'warn',
        // '@typescript-eslint/no-empty-function': 'warn',
        'react/prop-types': 'warn',
        semi: ['off', 'never'],
    },
}
