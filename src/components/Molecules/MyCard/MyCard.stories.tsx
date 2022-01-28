import React from 'react';
import one from '../../Atoms/Image/1.png';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyCard from './MyCard';

export default {
  title: 'Molecule/MyCard',
  component: MyCard,
} as ComponentMeta<typeof MyCard>;

export const Resting: ComponentStory<typeof MyCard> = () =>  <MyCard src={one} alt='book one' name='Masters of Scale' author='Reid Hoffman' duration='13 minute read' />;
