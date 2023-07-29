import { StoryFn, Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { LangSwitcher } from '..';

export default {
  title: 'widgets/LangSwitcher',
  component: LangSwitcher,
} as Meta<typeof LangSwitcher>;

const Template: StoryFn<typeof LangSwitcher> = (args) => (
  <LangSwitcher {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
