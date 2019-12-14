import React from 'react';
import PropTypes from 'prop-types';

import './spinner.less';

import SpinnerSvg from '../static/spinner.svg';

const Spinner = ({ className }) => <SpinnerSvg className={`Spinner ${className}`}/>;

Spinner.propTypes = {
  className: PropTypes.string
};

Spinner.defaultProps = {
  className: ''
};

export default Spinner;
