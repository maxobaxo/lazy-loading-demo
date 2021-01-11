import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LazyLoadImage = ({ src, tempSrc, alt, className }) => {
  // Utilize a state value to reference the loading status of the full size image.
  /**
   * Currently, we are using a simple isLoaded boolean to manage the loading state of 
   * the lazy loaded image, but if we needed to indicate more information to the end 
   * user about the image's loading status/outcome, I would suggest using a string value
   * to indicate the loading status (e.g. 'loading', 'success', 'failure'), which would 
   * allow us to change the way the image renders for any of those states.
   * 
   * Right now there's no indication that the full size image is actually loading (e.g. a throbber), nor is there an
   * indication to the user should the full size image fail to load.
  */
  const [isLoaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Utilize the web API for HTMLImageElement, allowing the component to tap into the
    // element's built-in event handlers.
    const img = new Image(); 
    // Set this image's src, so we know WHICH image in the DOM to which we add an event listener.
    img.src = src; 
    // On the HTMLImageElement's "load" event...
    img.addEventListener("load", function() {
      // ...update component's state to indicate the image has loaded.
      setLoaded(true);
    });
    // If the image fails to load, log some info to the console; the error event handler is also built-in.
    img.addEventListener("error", function() {
      console.warn(`Failed to load image at ${src}`);
    });
  }, [src, tempSrc]); // Run our useEffect after initialMount (and should the props for src/tempSrc ever change).

  return (
    // Wrap both absolutely position img elements with a
    // relatively positioned parent so they can layer on top of one another.
    <div className={`lazy-load-img ${className}`}>
      <img src={tempSrc} alt={alt} className={"thumb"} />
      {/* When our state value is successfully updated, add the 'loaded' class to our full size image, 
      to update its appearance, making it appear as though the thumbnail became more refined. */}
      <img src={src} alt={alt} className={`full${isLoaded ? " loaded" : ""}`} />
    </div>
  );
}

// Define data types for each of our props.
LazyLoadImage.propTypes = {
  src: PropTypes.string.isRequired,
  tempSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
}

// Add a className prop, defaulting to '', so that developers can modify a given instance of this component.
LazyLoadImage.defaultProps = {
  className: '',
}

export default LazyLoadImage;