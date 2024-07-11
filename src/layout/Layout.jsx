import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function Layout() {
  return (
    <div className='py-4 px-0 flex flex-col min-h-screen'>
      <Header />
      <Outlet />

    </div>
  );
}

export default Layout;