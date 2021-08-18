import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link className="font-bold text-2xl text-pink-600 whitespace-nowrap" to="/">
      Lapak Daring
    </Link>
  );
};

export default Logo;
