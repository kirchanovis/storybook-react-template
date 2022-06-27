import React from 'react';
import { Input as InputOriginal } from 'antd';
import PropTypes from 'prop-types';

// import './style.scss'

export const Input = ({ primary, backgroundColor, size, label, ...props }) => {
    return (
        <InputOriginal
            className="custom-input"
            {...props}
        />
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    addonBefore: PropTypes.string,
    addonAfter: PropTypes.string,
    defaultValue: PropTypes.string,
    bordered: PropTypes.bool,
    allowClear: PropTypes.bool,
};