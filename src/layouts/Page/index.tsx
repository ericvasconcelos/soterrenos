import { lazy, Suspense, useRef } from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from '@/auth/AuthProvider';

import { Header } from '../Header';

const Footer = lazy(() =>
  import('../Footer').then((module) => ({ default: module.Footer }))
);

export const Page = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <AuthProvider>
      <Header />
      <main ref={mainRef} className="bg-white">
        <Outlet />
      </main>

      <Suspense>
        <Footer />
      </Suspense>

      <ToastContainer closeOnClick position="bottom-right" theme="light" />
    </AuthProvider>
  );
};
