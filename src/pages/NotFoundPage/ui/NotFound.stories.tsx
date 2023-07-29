import { StoryFn, Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import NotFound from './NotFound';

export default {
  title: 'pages/NotFound',
  component: NotFound,
} as Meta<typeof NotFound>;

const Template: StoryFn<typeof NotFound> = (args: {}) => (
  <NotFound {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
