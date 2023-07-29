import { StoryFn, Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { Sidebar } from './Sidebar';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
