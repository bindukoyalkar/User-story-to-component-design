import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyButton from './MyButton';

export default {
  title: 'Molecule/MyButton',
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

export const Resting: ComponentStory<typeof MyButton> = () => <MyButton ></MyButton>;
