import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Image from './Image';

export default {
  title: 'Atoms/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

export const BannerImage: ComponentStory<typeof Image> = () => <Image ></Image>;

