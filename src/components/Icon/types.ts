import { iconNames } from './iconNames';

export type IconNames = (typeof iconNames)[number];

export interface IIcon {
  name: IconNames;
  color?: string;
  size?: number;
  strokeWidth?: number;
}
