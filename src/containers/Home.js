import React from 'react';
import Image from 'Components/Image';

const Home = () => {
  
  return (
    <>
      <h1>Lazy Loading Image Demo</h1>
      <p>This image is lazy, but these Jordans are legit.</p>
      <Image
        src="https://forge-homework.s3.amazonaws.com/fullsize.jpg"
        tempSrc="https://forge-homework.s3.amazonaws.com/thumb.jpg"
        alt="Nike Air Jordans"
      />
    </>
  );
}

export default Home;