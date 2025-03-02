type ILandSize = {
  front: number;
  back: number;
  left: number;
  right: number;
};

export const getTotalArea = (landSize: ILandSize) => {
  const area =
    ((landSize.front + landSize.back) *
      ((landSize.left + landSize.right) / 2)) /
    2;

  return {
    value: area,
    text: `${area.toFixed(0)}m²`,
  };
};
