import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LazyLoadImage = ({ src, tempSrc, alt, className }) => {
  const [loadStatus, setLoadStatus] = useState("idle");
  
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.addEventListener("load", function() {
      setLoadStatus("success");
    });
    img.addEventListener("error", function() {
      setLoadStatus("failure");
    })
  }, [src, tempSrc]);

  return (
    <div className={`lazy-load-img ${className}`}>
      <img src={tempSrc} alt={alt} className={'thumb'} />
      <img src={src} alt={alt} className={`full${loadStatus === 'success' ? ' loaded' : ''}`} />
    </div>
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