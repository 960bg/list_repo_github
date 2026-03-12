import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

import globals from 'globals';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import css from '@eslint/css';

import { defineConfig } from 'eslint/config';

export default defineConfig([
  // 1. Базовые рекомендуемые правила ESLint
  js.configs.recommended,

  // 2. Рекомендуемая настройка Prettier (включает плагин и отключает конфликты)
  eslintPluginPrettierRecommended,

  // 3. Дополнительное отключение конфликтующих правил (на всякий случай)
  eslintConfigPrettier,

  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
    rules: {
      // 1. Разрешить пустые строки между операторами (логическими блоками)
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
      // 2. Настройка Prettier: не сжимать пустые строки слишком сильно
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
      // Здесь можно переопределить правила
      'prettier/prettier': 'off',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
    rules: {
      // 1. Разрешить пустые строки между операторами (логическими блоками)
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
      // 2. Настройка Prettier: не сжимать пустые строки слишком сильно
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
      // Здесь можно переопределить правила
      'prettier/prettier': 'off',
    },
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended'],
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
]);
