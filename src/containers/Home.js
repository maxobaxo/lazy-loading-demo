import React from 'react';
import LazyImage from 'Components/LazyImage';

const Home = () => {
  
  return (
    <>
      <h1>Lazy Loading Image Demo</h1>
      <p>This image is lazy, but the Jordans are legit.</p>
      <LazyImage
        src="https://forge-homework.s3.amazonaws.com/fullsize.jpg"
        tempSrc="https://forge-homework.s3.amazonaws.com/thumb.jpg"
        alt="Nike Air Jordans"
      />
    </>
  );
}

export default Home;