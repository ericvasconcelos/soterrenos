import { Text } from '@/components';

import { IMatchNotFound } from './types';

export const MatchNotFound = ({ title, subtitle }: IMatchNotFound) => (
  <div className="mx-auto max-w-lg my-20">
    <img
      src="/home/icons/match-not-found.svg"
      alt=""
      width={170}
      height={150}
      className="block w-full max-w-xs h-auto mb-8 mx-auto"
    />

    <Text size="xl" color="gray-800" weight="medium" align="center">
      {title}
    </Text>

    {subtitle && (
      <Text align="center" className="mt-2">
        {subtitle}
      </Text>
    )}
  </div>
);
