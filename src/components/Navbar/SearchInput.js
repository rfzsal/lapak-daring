import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = (props) => {
  const { smOnly } = props;

  const placeholders = [
    'Realme Narzo',
    'Redmi 9T',
    'Poco M3',
    'Samsung Galaxy A12'
  ];

  const placeholder = (() => {
    const randomIndex = Math.floor(Math.random() * 4);

    return `Cari ${placeholders[randomIndex]}`;
  })();

  return smOnly ? (
    <input
      className="block lg:hidden border border-gray-300 text-sm outline-none focus:ring-1 focus:ring-pink-600 rounded-md w-full px-3 py-2"
      type="search"
      placeholder={placeholder}
    />
  ) : (
    <input
      className="hidden lg:block border border-gray-300 text-sm outline-none focus:ring-1 focus:ring-pink-600 rounded-md w-full px-3 py-2"
      type="search"
      placeholder={placeholder}
    />
  );
};

SearchInput.propTypes = {
  smOnly: PropTypes.bool
};

export default SearchInput;
