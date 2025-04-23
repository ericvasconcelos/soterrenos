import { Meta, StoryFn } from '@storybook/react';

import { Text } from '../Text';
import { iconNames } from './iconNames';
import { Icon } from './index';
import { IconNames } from './types';

export const List: StoryFn = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
      gap: '2rem',
      padding: '1rem',
    }}
  >
    {iconNames?.map((name: IconNames) => (
      <div
        key={name}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <Icon name={name} size={32} />
        <Text size="xs" align="center" color="gray-900">
          {name}
        </Text>
      </div>
    ))}
  </div>
);

export default {
  title: 'Theme/Icons',
  component: List,
} as Meta;
