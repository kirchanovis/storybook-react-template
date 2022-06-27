import React from 'react';
import PinInput from 'react-pin-input';
import PropTypes from 'prop-types';

// import './style.scss'

export const Pin = ({ ...props }) => {
    return (
        <PinInput
            {...props}
        />
    );
};

Pin.propTypes = {
    secret: PropTypes.bool,
    length: PropTypes.number,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['numeric', 'alphanumeric',]),
    onChange: PropTypes.func,
};