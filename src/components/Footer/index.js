import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col lg:flex-row bg-gray-800 text-gray-300 space-y-10 lg:space-y-0 lg:space-x-10 px-5 pt-5 pb-10">
        <div className="lg:max-w-lg space-y-3">
          <p className="font-bold text-lg">Tentang Lapak Daring</p>
          <p className="text-gray-500">
            Lapak Daring merupakan marketplace yang menyediakan smartphone
            berbagai merek dengan harga mahal, mulai dari Samsung, Oppo, Xiaomi
            dan banyak lainnya.
          </p>
        </div>

        <div className="space-y-3">
          <p className="font-bold text-lg">Lapak Daring</p>
          <div className="flex flex-col text-gray-500 space-y-3">
            <Link className="hover:text-pink-600" to="/">
              Tentang Lapak Daring
            </Link>
            <Link className="hover:text-pink-600" to="/">
              Blog
            </Link>
            <Link className="hover:text-pink-600" to="/">
              FAQ (Tanya Jawab)
            </Link>
            <Link className="hover:text-pink-600" to="/">
              Kebijakan Privasi
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-bold text-lg">Bantuan</p>
          <div className="flex flex-col text-gray-500 space-y-3">
            <Link className="hover:text-pink-600" to="/">
              Cara membeli produk
            </Link>
            <Link className="hover:text-pink-600" to="/">
              Cara melakukan pembayaran
            </Link>
            <Link className="hover:text-pink-600" to="/">
              Cara membatalkan pesanan
            </Link>
            <Link className="hover:text-pink-600" to="/">
              Produk tidak sesuai pesanan
            </Link>
            <Link className="hover:text-pink-600" to="/">
              Produk tidak sampai tujuan
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-1">
        <p className="text-center text-sm text-gray-500">
          Muhammad Faizal Fazri - 1822490645
        </p>
      </div>
    </footer>
  );
};

export default Footer;
