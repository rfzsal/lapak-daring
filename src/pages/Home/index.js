import React from 'react';

import Button from '../../components/Button';
import Hero from './Hero';
import Brands from './Brands';
import Products from './Products';

import HeroImg from '../../img/7.webp';

const Home = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Hero image={HeroImg} />

      <div className="px-5 mt-10">
        <Products />
      </div>

      <div className="bg-gray-100 h-5 mt-10" />

      <div className="px-5 mt-10">
        <Brands />
      </div>

      <div className="px-5 mt-10">
        <Products title="Produk Pilihan" showAll={false} nProducts={24} />
        <div className="flex justify-center mt-8">
          <Button color="pink" outlined>
            Muat Lebih Banyak
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
