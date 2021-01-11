import React from 'react';
import Image from 'Components/Image';
import Thumb from 'Assets/thumb.jpg';

const Home = () => {
  return (
    <>
      <p>Hello, World!</p>
      <Image src={Thumb} alt="shoes-thumbnail" />
    </>
  );
}

export default Home;