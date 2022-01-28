import React from 'react';
import one from '../../Atoms/Image/1.png'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BookDetail from './BookDetail';

export default {
  title: 'Organism/BookDetail',
  component: BookDetail,
} as ComponentMeta<typeof BookDetail>;

export const Resting: ComponentStory<typeof BookDetail> = () =><BookDetail src={one} alt='the grid' name='The Grid' author='Matt Watkinson' description='The Decision-Making Tool for Every Business (Including Yours)' duration='15-mins' />
;
