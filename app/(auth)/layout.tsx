import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-full bg-green-100">
      {children}
    </main>
  );
};

export default Layout;
