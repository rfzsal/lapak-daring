import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ProductCard from '../../components/ProductCard';

const Products = (props) => {
  const { title, nProducts, showAll } = props;

  let products = [];
  for (let product = 1; product <= nProducts; product++) {
    products.push(<ProductCard />);
  }

  return (
    <>
      {showAll ? (
        <div className="flex items-center space-x-5 mb-3">
          <p className="font-semibold text-xl">{title}</p>
          <Link className="text-pink-600 hover:text-pink-800" to="/products">
            Lihat Semua
          </Link>
        </div>
      ) : (
        <p className="font-semibold text-xl mb-3">{title}</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {products}
      </div>
    </>
  );
};

Products.propTypes = {
  title: PropTypes.string,
  nProducts: PropTypes.number,
  showAll: PropTypes.bool
};

Products.defaultProps = {
  title: 'Produk Terlaris',
  nProducts: 6,
  showAll: true
};

export default Products;
