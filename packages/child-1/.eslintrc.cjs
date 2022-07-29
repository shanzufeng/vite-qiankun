module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    'plugin:prettier/recommended', // 添加 prettier 插件
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "parser": "vue-eslint-parser",
  "plugins": [
    "vue",
    "@typescript-eslint"
  ],
  rules: {
    "vue/multi-word-component-names": 0,
    "@typescript-eslint/no-explicit-any": 0, // 可以使用any
    "no-undef": 0,
    "@typescript-eslint/ban-ts-comment": 0
  },
}
