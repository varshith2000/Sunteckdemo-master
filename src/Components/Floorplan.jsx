import React from 'react'
import '../App.css';
import floorplan from '../Images/floorplan1.jpg';
const Floorplan = () => {
  return (
    <>
    <div className='floorplan'>
    <h2>SUNTECK FLOOR PLAN</h2>
      <div className='floorplan-container'>
          <div><img className='floorplan-img' src={floorplan}/></div>
          <div><img className='floorplan-img' src={floorplan}/></div>
          <div><img className='floorplan-img' src={floorplan}/></div>
      </div>
    </div>
    </>
  )
}

export default Floorplan