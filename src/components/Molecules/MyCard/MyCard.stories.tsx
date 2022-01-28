import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyCard from './MyCard';

export default {
  title: 'Molecule/MyCard',
  component: MyCard,
} as ComponentMeta<typeof MyCard>;

export const Resting: ComponentStory<typeof MyCard> = () => <MyCard ></MyCard>;
