import React from 'react';
import PropTypes from 'prop-types';

import './about-contact-item.less';

const AboutContactItem = ({ url, imgAlt, imgSrc }) => (
  <div className="AboutContactItem">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={imgSrc} alt={imgAlt} className="AboutContactItem-logoIcon"/>
    </a>
  </div>
);

AboutContactItem.propTypes = {
  url: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
};

export default AboutContactItem;
