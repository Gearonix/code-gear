import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'libs/ui/vite.config.ts'
      }
    }
  },
  viteFinal: (config) => {
    return mergeConfig(config, {
      define: {
        'process.env': process.env
      }
    })
  }
}

export default config
