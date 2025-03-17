import { ReactNode, useRef } from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';

export const Page = ({ children }: { children?: ReactNode }) => {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      <main ref={mainRef}>{children}</main>
      <Footer />
    </>
  );
};
