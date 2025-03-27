import { useRef } from 'react';
import { Outlet } from 'react-router';

import { Footer } from '../Footer';
import { Header } from '../Header';

export const Page = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      <main ref={mainRef}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
