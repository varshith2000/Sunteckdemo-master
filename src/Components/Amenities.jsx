import React from 'react';
import '../App.css';
import bridge from '../Images/bridge.png'
import club from '../Images/club.png';
import cricket from '../Images/cricketPitch.png';
import garden from '../Images/garden.png';
import hall from '../Images/hall.png';
import kidsplay from '../Images/kidsplay.png';
import miniforest from '../Images/mini-forest.jpg';
import lawn from '../Images/partylawn.jpg';
import bench from '../Images/sittingbenche.png';
import court from '../Images/squashcourt.png';
import swimming from '../Images/swimming.png';
import theatre from '../Images/theatre.png'

const Amenities = () => {
  return (
    <>
      <div className='amenities'>
        <h2>SUNTECK WORLD AMENITIES</h2>
        <div className='amenities-features'>
          <div className='feature-row'>
            <div><img className='amenities-feature-icon' src={theatre}/><h3>Amphitheatre</h3></div>
            <div><img className='amenities-feature-icon' src={garden}/><h3>Botanical Garden</h3></div>
            <div><img className='amenities-feature-icon' src={bridge}/><h3>Bridge Walk</h3></div>
            <div><img className='amenities-feature-icon' src={club}/><h3>Clubhouse</h3></div>
          </div>
          <div className='feature-row'>
            <div><img className='amenities-feature-icon' src={cricket}/><h3>Cricket Pitch</h3></div>
            <div><img className='amenities-feature-icon' src={kidsplay}/><h3>Kids' Play Area</h3></div>
            <div><img className='amenities-feature-icon' src={miniforest}/><h3>Mini Forest</h3></div>
            <div><img className='amenities-feature-icon' src={hall}/><h3>Multipurpose Hall</h3></div>
          </div>
          <div className='feature-row'>
            <div><img className='amenities-feature-icon' src={lawn}/><h3>Party Lawn</h3></div>
            <div><img className='amenities-feature-icon' src={bench}/><h3>Seating Court</h3></div>
            <div><img className='amenities-feature-icon' src={court}/><h3>Squash Court</h3></div>
            <div><img className='amenities-feature-icon' src={swimming}/><h3>Swimming Poool</h3></div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Amenities;
