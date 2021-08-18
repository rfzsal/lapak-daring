import React from 'react';
import { Link } from 'react-router-dom';

const Navlink = (props) => {
  const { ...attributes } = props;

  return (
    <div
      {...attributes}
      className="hidden lg:block absolute text-gray-500 text-sm space-x-3"
    >
      <p className="inline-block">Pencarian Populer :</p>
      <Link className="hover:text-pink-600" to="/products">
        Realme Narzo
      </Link>
      <Link className="hover:text-pink-600" to="/products">
        Redmi 9T
      </Link>
      <Link className="hover:text-pink-600" to="/products">
        Poco M3
      </Link>
      <Link className="hover:text-pink-600" to="/products">
        Samsung Galaxy A12
      </Link>
    </div>
  );
};

export default Navlink;
