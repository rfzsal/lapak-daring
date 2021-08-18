import React from 'react';
import { Link } from 'react-router-dom';

const Brands = () => {
  return (
    <>
      <div className="flex items-center space-x-5 mb-3">
        <p className="font-semibold text-xl">Merek Populer</p>
        <Link className="text-pink-600 hover:text-pink-800" to="/products">
          Lihat Semua
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Link to="/products">
          <div className="flex items-center justify-center bg-blue-200 rounded-md h-24">
            <p className="text-lg">Samsung</p>
          </div>
        </Link>
        <Link to="/products">
          <div className="flex items-center justify-center bg-red-200 rounded-md h-24">
            <p className="text-lg">Huawei</p>
          </div>
        </Link>
        <Link to="/products">
          <div className="flex items-center justify-center bg-yellow-200 rounded-md h-24">
            <p className="text-lg">Xiaomi</p>
          </div>
        </Link>
        <Link to="/products">
          <div className="flex items-center justify-center bg-green-200 rounded-md h-24">
            <p className="text-lg">Oppo</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Brands;
