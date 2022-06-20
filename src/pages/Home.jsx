import React from 'react';
import Access from '../components/Home/Access';
import Cards from '../components/Home/Cards';
import Features from '../components/Home/Features';
import Payroll from '../components/Home/Payroll';

const Home = () => {
  return (
    <main>
      <Access />
      <Payroll />
      <Features />
      <Cards />
    </main>
  );
};

export default Home;