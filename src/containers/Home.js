import React from 'react';
// Import our LazyImage component using the alias 'Components' defined in our webpack config.
import LazyImage from 'Components/LazyImage';

const Home = () => {
  
  return (
    <>
      <h1>Lazy Loading Image Demo</h1>
      <p>This image is lazy, but the Jordans are legit.</p>
      <LazyImage
        src="https://forge-homework.s3.amazonaws.com/fullsize.jpg" // Pass URL for fullsize image using props.src.
        tempSrc="https://forge-homework.s3.amazonaws.com/thumb.jpg" // Pass URL for thumbnail image using props.tempSrc.
        alt="Nike Air Jordans" // Alt text for the image (accessibility matters on the web).
      />
    </>
  );
}

export default Home;