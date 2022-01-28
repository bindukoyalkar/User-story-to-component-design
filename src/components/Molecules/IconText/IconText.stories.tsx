import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconText from './IconText';

export default {
  title: 'Molecule/IconText',
  component: IconText,
} as ComponentMeta<typeof IconText>;

export const Resting: ComponentStory<typeof IconText> = () => <IconText ></IconText>;
