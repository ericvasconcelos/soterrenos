import { ReactNode } from 'react';

type IContainer = {
  children: ReactNode;
  className: string;
};

export const Container = ({ children, className }: IContainer) => (
  <div className={`container mx-auto px-8 ${className}`}>{children}</div>
);
