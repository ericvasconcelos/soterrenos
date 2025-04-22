import { useRef } from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from '@/auth/AuthProvider';

import { Footer } from '../Footer';
import { Header } from '../Header';

export const Page = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <AuthProvider>
      <Header />
      <main ref={mainRef} className="bg-white">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer closeOnClick position="bottom-right" theme="light" />
    </AuthProvider>
  );
};
