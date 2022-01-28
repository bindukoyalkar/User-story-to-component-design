import React from 'react';
import HeadsetIcon from '@mui/icons-material/Headset';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconText from './IconText';

export default {
  title: 'Molecule/IconText',
  component: IconText,
} as ComponentMeta<typeof IconText>;

export const Resting: ComponentStory<typeof IconText> = () => <IconText variant='caption' info='Audio available' ><HeadsetIcon /></IconText>
;
