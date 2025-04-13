import { ILandSize } from './types';

export const getTotalArea = (landSize?: ILandSize) => {
  if (!landSize)
    return {
      value: 0,
      text: `${Math.round(0)}m²`,
    };

  const averageFrontBack = (landSize.front + landSize.back) / 2;
  const averageLeftRight = (landSize.left + landSize.right) / 2;
  const area = averageFrontBack * averageLeftRight;

  return {
    value: area,
    text: `${Math.round(area)}m²`,
  };
};
