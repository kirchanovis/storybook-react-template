import React from 'react';
import { Button as ButtonOriginal } from 'antd';
import PropTypes from 'prop-types';
import './style.scss';
import 'antd/dist/antd.css';

export const Button = ({ label, ...props }) => {
  return (
    <ButtonOriginal
      className="custom-button"
      {...props}
    >
      {label}
    </ButtonOriginal>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  danger: PropTypes.number,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'middle ', 'small']),
  type: PropTypes.oneOf(['primary', 'dashed', 'text', 'link']),
  onClick: PropTypes.func,
  icon: PropTypes.elementType,
};