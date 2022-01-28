import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import BookDetail from './BookDetail';

export default {
  title: 'Organism/BookDetail',
  component: BookDetail,
} as ComponentMeta<typeof BookDetail>;

export const Resting: ComponentStory<typeof BookDetail> = () => <BookDetail ></BookDetail>;
