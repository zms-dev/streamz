module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'google',
    'prettier',
  ],
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.lint.json',
        sourceType: 'module',
        debugLevel: true,
      },
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:jsdoc/recommended',
      ],
      rules: {
        'new-cap': ['off'],
        'require-jsdoc': ['off'],
        'rxjs/no-async-subscribe': 'error',
        'rxjs/no-ignored-observable': 'error',
        'rxjs/no-ignored-subscription': 'error',
        'rxjs/no-nested-subscribe': 'error',
        'rxjs/no-unbound-methods': 'error',
        'rxjs/throw-error': 'error',
        '@angular-eslint/directive-selector': ['error', {
          type: 'attribute',
          prefix: 'streamz',
          style: 'camelCase',
        }],
        '@angular-eslint/component-selector': ['error', {
          type: 'element',
          prefix: 'streamz',
          style: 'kebab-case',
        }],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 'error',
        '@typescript-eslint/unbound-method': 'error',
        "jsdoc/require-jsdoc": ["error", {
          "contexts": [
            "TSInterfaceDeclaration",
            "TSMethodSignature",
            "TSPropertySignature"
          ],
          "require": {
            "ClassDeclaration": true,
            "ClassExpression": true,
            "MethodDefinition": true
          }
        }],
      },
    },
    {
      "files": ["*.ng.html"],
      "extends": ["plugin:@angular-eslint/template/recommended"],
      "rules": {}
    }
  ],
  plugins: [
    '@typescript-eslint',
    'rxjs',
    'prettier',
    '@angular-eslint',
    'jsdoc',
  ],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-arrow-callback': 'error',
    'for-direction': 'off',
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-cond-assign': ['error', 'always'],
    'no-empty': 'warn',
    'quotes': ['error', 'single'],
    'semi': [2, 'always'],
    'no-implied-eval': 'off',
    'require-await': 'off',
    'max-len': ['error', { 'code': 100 }],
  },
};
