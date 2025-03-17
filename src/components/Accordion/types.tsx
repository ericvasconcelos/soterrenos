import { ReactNode } from 'react';

type IInfo = {
  title: string;
  description: string;
};

export interface IAccordion {
  infos: IInfo[];
}

export interface IChildren {
  children: ReactNode;
}
