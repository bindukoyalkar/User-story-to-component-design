import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  BasicModal from './BasicModal';

export default {
  title: 'Organism/BasicModal',
  component: BasicModal,
} as ComponentMeta<typeof BasicModal>;

export const BannerBasicModal: ComponentStory<typeof BasicModal> = () => <BasicModal ></BasicModal>;

