import { config } from '@zqstudio/configs/eslint';
export default [
  {
    globals: {
      uni: 'readonly',
    },
  },
  ...config({
    ignores: ['node_modules/**', 'dist/**'],
  }),
];
