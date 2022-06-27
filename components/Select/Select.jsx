import React from 'react';
import { Select as SelectOriginal } from 'antd';
import PropTypes from 'prop-types';

import 'antd/dist/antd.css';
import './style.scss'

export const Select = ({ ...props }) => {
    return (
        <SelectOriginal
            className="custom-select"
            {...props}
        />
    );
};

Select.propTypes = {
    options: PropTypes.array,
    defaultValue: PropTypes.string,
    open: PropTypes.bool,
    showSearch: PropTypes.bool,
    loading: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'middle ', 'small']),
    mode: PropTypes.oneOf(['multiple', 'tags']),
    status: PropTypes.oneOf(['error', 'warning']),
    onSearch: PropTypes.func,
};