import { ReactNode, useRef } from 'react';

import { Header } from '../Header';

export const Page = ({ children }: { children?: ReactNode }) => {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      <main ref={mainRef}>{children}</main>
    </>
  );
};
