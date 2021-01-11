import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LazyLoadImage = ({ src, tempSrc, errSrc, alt, className }) => {
  const [imgSrc, setSrc] = useState(tempSrc);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.addEventListener("load", function() {
      setSrc(src);
    });
    img.addEventListener("error", function() {
      setSrc(errSrd || tempSrc);
    })
  }, [src, tempSrc]);

  return (
    <img src={imgSrc} alt={alt} className={`lazy-load-img ${className}`} />
  );
}

LazyLoadImage.propTypes = {
  src: PropTypes.string.isRequired,
  tempSrc: PropTypes.string.isRequired,
  errSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
}

LazyLoadImage.defaultProps = {
  className: '',
}

export default LazyLoadImage;