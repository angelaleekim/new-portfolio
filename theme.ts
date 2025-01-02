'use client';

import { MantineThemeOverride } from '@mantine/core';

// Create a custom Mantine theme
export const theme: MantineThemeOverride = {
  colors: {
    pink: [
      '#fff5f8',
      '#ffe3ee',
      '#ffcce0',
      '#ffb2d3',
      '#ff8fbf',
      '#f66eab',
      '#e35598',
      '#d43b85',
      '#b12f6e',
      '#8f2559',
    ],
    purple: [
      '#f6f0ff',
      '#e6d9ff',
      '#d2bfff',
      '#ba99ff',
      '#a472f6',
      '#8c54e3',
      '#7442d4',
      '#5d31b1',
      '#48278f',
      '#371e72',
    ],
  },
  primaryColor: 'pink', // Set pink as the primary color
  components: {
    Button: {
      defaultProps: {
        radius: 'xl', // Default radius
        size: 'md', // Default size
        variant: 'default',
      },
      styles: (theme: any, params: any) => ({
        root: {
          backgroundColor: params.color === 'pink' ? theme.colors.pink[5] : undefined,
          '&:hover': {
            backgroundColor: params.color === 'pink' ? theme.colors.pink[6] : undefined,
          },
        },
      }),
    },
  },
};
