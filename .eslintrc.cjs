const { eslint } = require('@vladislaw9/eslint');

module.exports = {
  ...eslint.react,
  overrides: [
    ...eslint.react.overrides,
    {
      extends: ['plugin:storybook/recommended', 'plugin:@tanstack/eslint-plugin-query/recommended'],
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      settings: {
        atomPostfix: ''
      },
      parserOptions: {
        tsconfigRootDir: __dirname
      },
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-enum-comparison': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        'no-restricted-syntax': 'off',
        'promise/always-return': 'off',
        'jsx-a11y/label-has-associated-control': 'warn'
      }
    }
  ]
};
