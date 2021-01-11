import React from 'react';
import Image from 'Components/Image';

const Home = () => {
  
  return (
    <>
      <p>Hello, World!</p>
      <Image
        src="https://forge-homework.s3.amazonaws.com/fullsize.jpg"
        tempSrc="https://forge-homework.s3.amazonaws.com/thumb.jpg"
        alt="Nike Air Jordans"
      />
    </>
  );
}

export default Home;