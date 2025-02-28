type ILandSize = {
  front: number;
  back: number;
  left: number;
  right: number;
};

export const getTotalArea = (landSize: ILandSize): number =>
  ((landSize.front + landSize.back) * ((landSize.left + landSize.right) / 2)) /
  2;
