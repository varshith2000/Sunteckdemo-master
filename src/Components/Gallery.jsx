import React from 'react';
import '../App.css';
import gallery1 from '../Images/gallery1.jpg';
import gallery2 from '../Images/gallery2.jpg';

const Gallery = () => {
  return(
      <>
        <div className='gallery-container'>
            <h2>SUNTECK WORLD GALLERY</h2>
            <div className='gallery-row1'>
                <img className='gallery-img' src={gallery1}/>
                <img className='gallery-img' src={gallery1}/>
                <img className='gallery-img' src={gallery1}/>
            </div>
            <div className='gallery-row1'>
                <img className='gallery-img' src={gallery2}/>
                <img className='gallery-img' src={gallery2}/>
                <img className='gallery-img' src={gallery2}/>
            </div>
        </div>
      </>
  );
};

export default Gallery;
