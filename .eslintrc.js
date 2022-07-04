module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:eslint-comments/recommended',
  ],
  plugins: [
    'more',
    'react-hooks',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'import/no-unresolved': [
      'error',
      { ignore: ['.svg'] },
    ],
    'import/prefer-default-export': [0],
    'import/no-webpack-loader-syntax': [0],
    'import/extensions': [2, {
      js: 'never',
      tsx: 'never',
      tx: 'never',
    }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    'jsx-a11y/click-events-have-key-events': [1],
    'jsx-a11y/anchor-is-valid': [1],
    'jsx-a11y/label-has-associated-control': [0],
    'jsx-a11y/label-has-for': [0],

    'max-len': [2, { code: 120, ignoreTemplateLiterals: true, ignoreStrings: true }],
    'max-lines': [2, { max: 200, skipBlankLines: true, skipComments: true }],

    quotes: ['error', 'single'],
    semi: ['warn', 'never'],
    indent: ['error', 2, { ignoredNodes: ['TemplateLiteral'] }],
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],

    'no-unused-vars': 'off',
    'no-console': 1,
    'no-debugger': 1,
    'no-magic-numbers': [2, { ignore: [-1, 0, 1, 2, 1000, 60, 24] }],
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0 }],
    'no-empty-pattern': [0],
    'no-implicit-globals': [2],

    'more/no-void-map': 2,
    'more/no-c-like-loops': 2,
    'more/force-native-methods': 2,
    'more/no-filter-instead-of-find': 2,
    'more/no-numeric-endings-for-variables': 2,
    'more/no-duplicated-chains': 2,

    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': [0],
    'react/destructuring-assignment': [1],
    'react/jsx-one-expression-per-line': [2],
    'react/jsx-max-props-per-line': [2, {
      maximum: 1, when: 'always',
    }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }],
    'react/function-component-definition': [2, {
      namedComponents: ['arrow-function', 'function-declaration'],
      unnamedComponents: ['arrow-function'],
    }],
  },
}
