import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Example } from './Example';

export default {
  title: 'Atoms/Example',
  component: Example,
} as ComponentMeta<typeof Example>;

export const ExampleTemplate: ComponentStory<typeof Example> = (args) => (
  <Example {...args} />
);

ExampleTemplate.storyName = 'Example';
