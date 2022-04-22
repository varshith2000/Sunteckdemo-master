import React from 'react';
import '../App.css';
import News1 from '../Images/News1.jpg';
import news2 from '../Images/news2.jpg';
const Testimonals = () => {
  return (
    <>
   
      <div className='testimonals-container'>
          <h2>TESTIMONALS AND NEWS ARTICLES</h2>
         <img className='NewsImage' src={News1}/>
         <img className='NewsImage' src={news2}/>
      </div>
    </>
  )
}

export default Testimonals