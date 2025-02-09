import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    'argsIgnorePattern': '^_',
                },
            ],
            'arrow-body-style': 'warn',
            'arrow-parens': 'warn',
            'arrow-spacing': 'warn',
            'brace-style': [
                'warn',
                '1tbs',
                {
                    'allowSingleLine': true,
                },
            ],
            'camelcase': [
                'warn',
                {
                    'ignoreDestructuring': true,
                    'allow': [
                        '^[A-Z_]+$',
                    ],
                },
            ],
            'comma-dangle': [
                'warn',
                'always-multiline',
            ],
            'computed-property-spacing': 'warn',
            'eol-last': 'warn',
            'function-paren-newline': [
                'warn',
                'multiline-arguments',
            ],
            'indent': [
                'warn',
                4,
                {
                    'SwitchCase': 1,
                    'MemberExpression': 1,
                },
            ],
            'key-spacing': 'warn',
            'keyword-spacing': 'warn',
            'linebreak-style': [
                'warn',
                'unix',
            ],
            'max-len': [
                'warn',
                {
                    'code': 120,
                    'ignoreStrings': true,
                    'ignoreTemplateLiterals': true,
                },
            ],
            'no-case-declarations': 'off',
            'no-confusing-arrow': 'warn',
            'no-constant-condition': 'error',
            'no-console': [
                'warn',
                {
                    'allow': [
                        'warn',
                        'error',
                    ],
                },
            ],
            'space-in-parens': [
                'warn',
                'never',
            ],
            'no-multi-spaces': 'warn',
            'no-multiple-empty-lines': [
                'warn',
                {
                    'max': 2,
                    'maxBOF': 0,
                    'maxEOF': 0,
                },
            ],
            'no-param-reassign': 'warn',
            'no-irregular-whitespace': 'warn',
            'no-trailing-spaces': 'warn',
            'no-unexpected-multiline': 'warn',
            'no-unreachable': 'error',
            'no-unused-vars': 'off',
            'object-curly-newline': [
                'warn',
                {
                    'minProperties': 3,
                    'consistent': true,
                },
            ],
            'object-curly-spacing': [
                'warn',
                'always',
            ],
            'object-property-newline': [
                'warn',
                {
                    'allowAllPropertiesOnSameLine': true,
                },
            ],
            'operator-linebreak': [
                'warn',
                'before',
                {
                    'overrides': {
                        '=': 'after',
                    },
                },
            ],
            'quotes': [
                'warn',
                'single',
            ],
            'react/display-name': 'warn',
            'react/prop-types': 'off',
            'semi': 'warn',
            'space-infix-ops': 'warn',
        },
    },
];

export default eslintConfig;
