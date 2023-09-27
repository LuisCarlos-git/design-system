import { Button } from '@quasar/ui';

import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'components/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Teste',
  },
};
