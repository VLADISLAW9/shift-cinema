import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@newhighsco/storybook-addon-svgr'
  ],
  framework: '@storybook/react-vite',
  staticDirs: ['../../src/shared/assets'],
  core: {
    builder: '@storybook/builder-vite'
  },

  // eslint-disable-next-line @typescript-eslint/require-await
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve?.alias,
        '@': path.resolve(__dirname, '../../src'),
        '@ui': path.resolve(__dirname, '../../src/shared/ui'),
        '@lib': path.resolve(__dirname, '../../src/shared/lib'),
        '@hooks': path.resolve(__dirname, '../../src/shared/lib/hooks'),
        '@images': path.resolve(__dirname, '../../src/shared/assets/images'),
        '@icons': path.resolve(__dirname, '../../src/shared/assets/icons')
      };

      return mergeConfig(config, {
        plugins: [svgr({ include: '**/*.svg' })]
      });
    }

    return config;
  }
};
export default config;
