import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

export default meta;

const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Primary Button', variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { children: 'Secondary Button', variant: 'secondary' };
