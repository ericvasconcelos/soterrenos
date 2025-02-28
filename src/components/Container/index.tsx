import { ReactNode } from 'react';

type IContainer = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: IContainer) => (
  <div
    className={`max-w-full lg:max-w-[64rem] xl:max-w-[80rem] 2xl:max-w-[96rem] mx-auto px-8 ${className}`}
  >
    {children}
  </div>
);
