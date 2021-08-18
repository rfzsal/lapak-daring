import React from 'react';

import Logo from './Logo';
import SearchInput from './SearchInput';
import Suggestions from './Suggestions';
import Button from '../Button';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-sm px-5 pt-3 pb-3 lg:pb-9 z-50">
      <div className="flex items-center justify-between space-x-5 mb-3 lg:mb-0">
        <Logo />

        <SearchInput />

        <div className="flex items-center space-x-3">
          <Button to="/login" color="pink" textSize="sm" outlined>
            Masuk
          </Button>
          <Button to="/register" color="pink" textSize="sm">
            Daftar
          </Button>
        </div>
      </div>

      <SearchInput smOnly />

      <Suggestions style={{ position: 'absolute', top: 55, left: 190 }} />
    </nav>
  );
};

export default Navbar;
