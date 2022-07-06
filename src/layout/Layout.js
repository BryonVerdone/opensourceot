import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Layout = () => {
  return (
    <section>
      <Navbar className='blue' />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Layout;
