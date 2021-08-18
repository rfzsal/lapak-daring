import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { children, color, outlined, textSize, to } = props;

  const classSize = (() => {
    switch (textSize) {
      case 'sm':
        return 'text-sm';
      default:
        return 'text-base';
    }
  })();

  const classBgColor = (() => {
    if (outlined) return 'bg-white';

    switch (color) {
      case 'pink':
        return 'bg-pink-600';
      default:
        return 'bg-blue-600';
    }
  })();

  const classBorderColor = (() => {
    switch (color) {
      case 'pink':
        return 'border border-pink-600';
      default:
        return 'border border-blue-600';
    }
  })();

  const classTextColor = (() => {
    if (!outlined) return 'text-white';

    switch (color) {
      case 'pink':
        return 'text-pink-600';
      default:
        return 'text-blue-600';
    }
  })();

  const className = `${classBgColor} ${classBorderColor} font-semibold ${classTextColor} ${classSize} rounded-md px-3 py-2`;

  return to ? (
    <Link className={className} to={to}>
      {children}
    </Link>
  ) : (
    <Link className={className} to="/">
      {children}
    </Link>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  outlined: PropTypes.bool,
  textSize: PropTypes.string,
  to: PropTypes.string
};

export default Button;
