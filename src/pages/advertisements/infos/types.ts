import { IconNames } from '@/components/Icon/types';

export interface IInfoItem {
  icon: {
    name: IconNames;
    size: number;
    strokeWidth: number;
  };
  label: string;
}

export interface IInfoSection {
  key: string;
  title: string;
  items: IInfoItem[];
}

export type DataInfos = Record<string, Record<string, IInfoItem>>;
