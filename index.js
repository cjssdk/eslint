/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

// public
module.exports = {
    env: {
        commonjs: true,
        node: true
    },

    globals: {
        DEVELOP: false
    },

    rules: {
        // Possible Errors
        // These rules relate to possible syntax or logic errors in JavaScript code
        'for-direction': 'error',
        'getter-return': 'error',
        'no-compare-neg-zero': 'warn',
        'no-cond-assign': 'error',
        'no-console': 'off',
        'no-constant-condition': ['error', {checkLoops: true}],
        'no-control-regex': 'off',
        'no-debugger': 'off',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': 'off',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': ['error', 'both'],
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-obj-calls': 'error',
        'no-prototype-builtins': 'off',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'use-isnan': 'error',
        'valid-jsdoc': [
            'error',
            {
                prefer: {
                    returns: 'return'
                },
                preferType: {
                    String: 'string',
                    Number: 'number',
                    Boolean: 'boolean',
                    Function: 'function',
                    Undefined: 'undefined',
                    Null: 'null',
                    array: 'Array',
                    object: 'Object'
                },
                requireReturn: false,
                requireParamDescription: true,
                requireReturnDescription: true,
                requireReturnType: true
            }
        ],
        'valid-typeof': ['error', {requireStringLiterals: true}],

        // Best Practices
        // These rules relate to better ways of doing things to help you avoid problems
        'accessor-pairs': ['error', {getWithoutSet: false, setWithoutGet: true}],
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        complexity: ['error', 32],
        'consistent-return': 'error',
        curly: ['error', 'all'],
        'default-case': 'off',
        'dot-location': ['error', 'property'],
        'dot-notation': 'off',
        eqeqeq: 'error',
        'guard-for-in': 'off',
        'max-classes-per-file': ['error', 1],
        'no-alert': 'warn',
        'no-caller': 'warn',
        'no-case-declarations': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'warn',
        'no-empty-function': ['error', {allow: []}],
        'no-empty-pattern': 'error',
        'no-eq-null': 'off',
        'no-eval': 'error',
        'no-extend-native': ['error', {exceptions: []}],
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': ['error', {allow: ['!!', '+']}],
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off',
        'no-multi-spaces': 'off',
        'no-multi-str': 'off',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'off',
        'no-proto': 'off',
        'no-redeclare': 'error',
        'no-restricted-properties': 'off',
        'no-return-assign': 'error',
        'no-script-url': 'warn',
        'no-self-assign': ['error', {props: true}],
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'warn',
        'no-unused-expressions': ['error', {allowShortCircuit: true}],
        'no-unused-labels': 'off',
        'no-useless-call': 'error',
        'no-useless-concat': 'warn',
        'no-useless-escape': 'warn',
        'no-useless-return': 'warn',
        'no-void': 'warn',
        'no-warning-comments': ['warn', {terms: ['todo', 'fixme'], location: 'start'}],
        'no-with': 'error',
        'prefer-promise-reject-errors': 'off',
        radix: 'warn',
        'vars-on-top': 'error',
        'wrap-iife': ['error', 'inside'],
        yoda: 'error',

        // Strict Mode
        // These rules relate to strict mode directives
        strict: ['error', 'global'],

        // Variables
        // These rules relate to variable declarations
        'init-declarations': 'off',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': 'off',
        'no-shadow': ['error', {builtinGlobals: true, hoist: 'all', allow: ['error']}],
        'no-shadow-restricted-names': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'off',
        'no-unused-vars': ['error', {vars: 'all', args: 'after-used'}],
        'no-use-before-define': ['error', {functions: true, classes: true}],

        // Node.js and CommonJS
        // These rules relate to code running in Node.js, or in browsers with CommonJS
        'callback-return': 'off',
        'global-require': 'off',
        'handle-callback-err': ['warn', 'error'],
        'no-buffer-constructor': 'error',
        'no-mixed-requires': 'off',
        'no-new-require': 'warn',
        'no-path-concat': 'error',
        'no-process-env': 'off',
        'no-process-exit': 'warn',
        'no-restricted-modules': 'off',
        'no-sync': 'off',

        // Stylistic Issues
        // These rules relate to style guidelines, and are therefore quite subjective
        'array-bracket-newline': ['error', {multiline: true}],
        'array-bracket-spacing': ['error', 'never'],
        'array-element-newline': ['error', 'consistent'],
        'block-spacing': ['error', 'always'],
        'brace-style': ['warn', '1tbs', {allowSingleLine: true}],
        camelcase: ['error', {properties: 'always'}],
        'capitalized-comments': 'off',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', {before: false, after: true}],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'consistent-this': ['error', 'self'],
        'eol-last': 'warn',
        'func-call-spacing': ['error', 'never'],
        'func-names': 'off',
        'func-style': 'off',
        'function-paren-newline': ['error', 'consistent'],
        'id-blacklist': 'off',
        'id-length': ['warn', {min: 2, max: 32, properties: 'never', exceptions: []}],
        'id-match': 'off',
        indent: ['error', 4, {SwitchCase: 1, VariableDeclarator: 1}],
        'jsx-quotes': 'off',
        'key-spacing': [
            'warn',
            {
                singleLine: {
                    beforeColon: false, afterColon: true, mode: 'strict'
                },
                multiLine: {
                    beforeColon: false, afterColon: true, mode: 'minimum'
                }
            }
        ],
        'keyword-spacing': ['error', {before: true, after: true, overrides: {}}],
        'line-comment-position': ['error', {position: 'above'}],
        'linebreak-style': ['error', 'unix'],
        'lines-around-comment': 'off',
        'max-depth': ['error', 16],
        'max-len': [
            'error',
            {
                code: 150, tabWidth: 4, ignoreUrls: true
            }
        ],
        'max-lines': ['error', {max: 1000, skipBlankLines: true, skipComments: true}],
        'max-lines-per-function': ['error', {max: 128, skipBlankLines: true, skipComments: true}],
        'max-nested-callbacks': ['error', 5],
        'max-params': ['error', 6],
        'max-statements': ['warn', 64, {ignoreTopLevelFunctions: false}],
        'max-statements-per-line': ['warn', {max: 5}],
        'multiline-ternary': 'off',
        'new-cap': 'error',
        'new-parens': 'error',
        'newline-per-chained-call': ['error', {ignoreChainWithDepth: 8}],
        'no-array-constructor': 'error',
        'no-bitwise': 'warn',
        'no-continue': 'warn',
        'no-inline-comments': 'off',
        'no-lonely-if': 'warn',
        'no-mixed-operators': 'warn',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'off',
        'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 0, maxBOF: 0}],
        'no-negated-condition': 'warn',
        'no-nested-ternary': 'warn',
        'no-new-object': 'error',
        'no-plusplus': 'off',
        'no-restricted-syntax': 'off',
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': ['error', {skipBlankLines: true}],
        'no-underscore-dangle': ['error', {allowAfterThis: false, allow: []}],
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': 'off',
        'object-curly-newline': ['error', {consistent: true}],
        'object-curly-spacing': ['error', 'never'],
        'object-property-newline': 'off',
        'one-var': ['error', 'always'],
        'one-var-declaration-per-line': ['error', 'initializations'],
        'operator-assignment': 'off',
        'operator-linebreak': 'off',
        'padded-blocks': 'off',
        'padding-line-between-statements': [
            'error',
            {blankLine: 'always', prev: '*', next: ['directive', 'return', 'export', 'cjs-export', 'try', 'function']},
            {blankLine: 'always', prev: ['directive', 'export', 'cjs-export', 'try', 'function'], next: '*'},
            {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
            {blankLine: 'any',    prev: 'directive', next: 'directive'}
        ],
        'quote-props': ['error', 'as-needed'],
        quotes: ['error', 'single', 'avoid-escape'],
        'require-jsdoc': 'off',
        semi: ['error', 'always'],
        'semi-spacing': ['error', {before: false, after: true}],
        'semi-style': ['error', 'last'],
        'sort-vars': 'off',
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', {anonymous: 'always', named: 'always'}],
        'space-in-parens': 'off',
        'space-infix-ops': 'error',
        'space-unary-ops': ['warn', {words: true, nonwords: false}],
        'spaced-comment': 'off',
        'switch-colon-spacing': ['error', {after: true, before: false}],
        'unicode-bom': ['error', 'never'],
        'wrap-regex': 'warn'
    }
};
