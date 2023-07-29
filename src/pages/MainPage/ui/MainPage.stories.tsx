import { StoryFn, Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import MainPage from './MainPage';

export default {
  title: 'pages/MainPage',
  component: MainPage,
} as Meta<typeof MainPage>;

const Template: StoryFn<typeof MainPage> = (args: {}) => (
  <MainPage {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
