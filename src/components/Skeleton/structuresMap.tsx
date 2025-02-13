import { CSSProperties } from 'react';
import { ISkeletonName } from './types';

export const structuresMap: Record<ISkeletonName, CSSProperties> = {
  text_sm: {
    width: '100%',
    height: '20px',
    borderRadius: '16px',
  },
  text_md: {
    width: '100%',
    height: '24px',
    borderRadius: '4px',
  },
  text_lg: {
    width: '100%',
    height: '32px',
    borderRadius: '4px',
  },
  title: {
    width: '100%',
    height: '62px',
    borderRadius: '4px',
  },
  subtitle: {
    width: '100%',
    height: '40px',
    borderRadius: '4px',
  },
  input: {
    width: '100%',
    height: '56px',
    borderRadius: '8px',
  },
  button: {
    width: '200px',
    height: '40px',
    borderRadius: '8px',
  },
  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: '52px',
  },
};
