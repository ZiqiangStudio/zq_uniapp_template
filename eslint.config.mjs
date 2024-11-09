import { config } from '@zqstudio/configs/eslint';
export default [
  {
    globals: {
      uni: 'readonly',
    },
  },
  ...config({
    ts: true,
    ignores: ['node_modules/**', 'dist/**', '**/*.d.ts'],
  }),
];
