module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint',
        'react',
        'jsdoc'
    ],
    'rules': {
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/explicit-function-return-type': 2,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/keyword-spacing': 2,
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/no-parameter-properties': 0,
        '@typescript-eslint/no-shadow': [
            'error'
        ],
        '@typescript-eslint/space-before-function-paren': 2,
        '@typescript-eslint/type-annotation-spacing': 2,
        'array-bracket-spacing': [
            2,
            'always'
        ],
        'arrow-spacing': 2,
        'block-spacing': 2,
        'brace-style': 2,
        'camelcase': 0,
        'comma-dangle': 2,
        'comma-spacing': 2,
        'complexity': [
            2,
            6
        ],
        'constructor-super': 2,
        'eqeqeq': [
            2,
            'smart'
        ],
        'import/default': 0,
        'import/order': [
            'error',
            {
                'groups': [
                    'external',
                    'builtin',
                    'parent',
                    'sibling',
                    'index'
                ],
                'newlines-between': 'never'
            }
        ],
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        'jsdoc/check-param-names': 2,
        'jsdoc/check-tag-names': 2,
        'jsdoc/check-types': 2,
        'jsdoc/newline-after-description': 0,
        'jsdoc/require-description-complete-sentence': 2,
        'jsdoc/require-example': 0,
        'jsdoc/require-hyphen-before-param-description': 2,
        'jsdoc/require-jsdoc': [
            'error',
            {
                'require': {
                    'ClassDeclaration': false,
                    'MethodDefinition': true
                }
            }
        ],
        'jsdoc/require-param': 2,
        'jsdoc/require-param-description': 2,
        'jsdoc/require-param-name': 2,
        'jsdoc/require-param-type': 2,
        'jsdoc/require-returns-description': 0,
        'jsdoc/require-returns-type': 0,
        'key-spacing': 2,
        'keyword-spacing': [
            'error',
            {
                'after': true,
                'before': true
            }
        ],
        'max-classes-per-file': [
            'error',
            1
        ],
        'max-depth': [
            'error',
            2
        ],
        'max-len': [
            'error',
            {
                'code': 140
            }
        ],
        'max-lines': [
            'error',
            {
                'max': 280
            }
        ],
        'max-lines-per-function': [
            'error',
            40
        ],
        'max-params': [
            'error',
            {
                'max': 4
            }
        ],
        'max-statements': [
            'error',
            20
        ],
        'no-alert': 2,
        'no-console': 2,
        'no-const-assign': 2,
        'no-constant-condition': 2,
        'no-dupe-args': 2,
        'no-dupe-class-members': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-duplicate-imports': 2,
        'no-else-return': 2,
        'no-empty': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extra-bind': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-semi': 2,
        'no-fallthrough': 2,
        'no-func-assign': 2,
        'no-lone-blocks': 2,
        'no-lonely-if': 2,
        'no-multi-spaces': 2,
        'no-redeclare': 2,
        'no-return-assign': 2,
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-shadow': 'off',
        'no-shadow-restricted-names': 2,
        'no-this-before-super': 2,
        'no-unmodified-loop-condition': 2,
        'no-unreachable': 2,
        'no-unsafe-negation': 2,
        'no-unused-vars': 0,
        'no-useless-escape': 2,
        'no-useless-return': 2,
        'no-var': 2,
        'no-whitespace-before-property': 2,
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'prefer-arrow-callback': 2,
        'prefer-const': 2,
        'prefer-template': 2,
        'quotes': [
            'error',
            'single'
        ],
        'react/display-name': 0,
        'require-atomic-updates': 2,
        'semi': [
            'error',
            'always'
        ],
        'semi-spacing': 2,
        'sort-imports': [
            'error',
            {
                'ignoreCase': true,
                'ignoreDeclarationSort': true,
                'ignoreMemberSort': true,
                'memberSyntaxSortOrder': [
                    'single',
                    'all',
                    'multiple',
                    'none'
                ]
            }
        ],
        'sort-keys': [
            'error',
            'asc',
            {
                'caseSensitive': true,
                'natural': false
            }
        ],
        'space-before-blocks': 2,
        'space-in-parens': 2,
        'space-infix-ops': 2,
        'use-isnan': 2,
        'yoda': 2
    },
    'settings': {
        'import/resolver': {
            'typescript': {
                'project': './src'
            }
        },
        'react': {
            'pragma': 'React',
            'version': 'detect'
        }
    }
};