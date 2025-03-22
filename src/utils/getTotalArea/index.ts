import { ILandSize } from './types';

export const getTotalArea = (landSize: ILandSize) => {
  const averageFrontBack = (landSize.front + landSize.back) / 2;
  const averageLeftRight = (landSize.left + landSize.right) / 2;
  const area = averageFrontBack * averageLeftRight;

  return {
    value: area,
    text: `${Math.round(area)}m²`,
  };
};
