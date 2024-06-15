import type { Preview } from '@storybook/react';

import { RouteDecorator } from '@/shared/config/storybook/RouteDecorator';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator';
import { TanStackQueryDecorator } from '@/shared/config/storybook/TanStackQueryDecorator';

const preview: Preview = {
  decorators: [
    (Story) => StyleDecorator(Story),
    (Story) => RouteDecorator(Story),
    (Story) => TanStackQueryDecorator(Story)
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
