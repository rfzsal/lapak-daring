import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Hero = (props) => {
  const { image } = props;

  const hero = (() => {
    if (image) {
      return (
        <>
          <div
            className="hidden md:block bg-cover bg-no-repeat h-96"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div
            className="block bg-gray-100 md:hidden bg-no-repeat h-96"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPositionX: -280,
              backgroundPositionY: 15
            }}
          />
        </>
      );
    } else {
      return <div className="bg-gray-100 h-96" />;
    }
  })();

  return <Link to="/products">{hero}</Link>;
};

Hero.propTypes = {
  image: PropTypes.string
};

export default Hero;
