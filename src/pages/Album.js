import React from 'react';
import { useLocation } from 'react-router-dom';

const Album = () => {

  const { state: album } = useLocation();
  return (
    <>
      <button onClick={() => console.log(album)}>hi</button>
    </>
  )
}

export default Album;
