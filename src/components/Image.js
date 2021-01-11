import React, { useState, useEffect } from 'react';

const LazyLoadImage = ({ src, tempSrc, errSrc, alt }) => {
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

  return <img src={imgSrc} alt={alt} />
}

export default LazyLoadImage;