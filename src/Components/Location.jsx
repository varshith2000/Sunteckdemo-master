import React from 'react';
import '../App.css';
import checkmark from '../Images/checked.png';

const Location = () => {
  return (
    <>
      <div className='Location'>
        <h2>Location & Map</h2>
        <div className='location-features'>
          <div className='features-list'>
            <ul>
              <li><img className='checkicon' src={checkmark} /><span>Naigaon Station</span></li>
              <li><img className='checkicon' src={checkmark} /><span>School</span></li>
              <li><img className='checkicon' src={checkmark} /><span>Mall</span></li>
              <li><img className='checkicon' src={checkmark} /><span>Hospital</span></li>
              <li><img className='checkicon' src={checkmark} /><span>Highway</span></li>
              <li><img className='checkicon' src={checkmark} /><span>Airport</span></li>
            </ul>
            <ul>
              <li><strong>5 mins</strong></li>
              <li><strong>Inside</strong></li>
              <li><strong>3 mins</strong></li>
              <li><strong>5 mins</strong></li>
              <li><strong>12 mins</strong></li>
              <li><strong>30 mins</strong></li>
            </ul>
          </div>
        </div>
        <div className='location-map'>
            
        </div>
      </div>
    </>
  );
};

export default Location;
