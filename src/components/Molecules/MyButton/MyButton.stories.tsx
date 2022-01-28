import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyButton from './MyButton';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
export default {
  title: 'Molecule/MyButton',
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

export const Resting: ComponentStory<typeof MyButton> = () => <MyButton variant='text' info="Entrepreneurship"><FontAwesomeIcon icon={faRocket}/></MyButton>;
