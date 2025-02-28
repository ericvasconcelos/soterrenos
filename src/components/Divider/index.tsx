import { IDivider } from './types';

export const Divider = ({ space = 'lg' }: IDivider) => {
  const spaces = {
    sm: 'my-2',
    md: 'my-4',
    lg: 'my-6',
    xl: 'my-8',
    '2xl': 'my-10',
    '3xl': 'my-12',
  };

  return <hr className={`border-gray-300 ${spaces[space]}`} />;
};
