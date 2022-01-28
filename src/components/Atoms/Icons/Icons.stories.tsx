import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icons from './Icons';
export default{
    title:'Atoms/Icon',
    component:Icons ,
} as ComponentMeta<typeof Icons>;

export const Search: ComponentStory<typeof Icons> = (args) => (
<Icons {...args}>
    </Icons>
  );


