import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Investor } from './Investor';

export default {
  title: 'App/Home/Organism/Investor',
  component: Investor,
} as ComponentMeta<typeof Investor>;

const Template: ComponentStory<typeof Investor> = (args) => <Investor />;


