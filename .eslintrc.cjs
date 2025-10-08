module.exports = {
  extends: ['plugin:vue/vue3-recommended'],
  plugins: ['@custom/style-order-guard'],
  rules: {
    '@custom/style-order-guard/enforce-css-import-order': 'error',
  },
}
