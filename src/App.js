import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from '../src/Components/Body';
import Amenities from '../src/Components/Amenities';
import Location from './Components/Location';
import Contactus from './Components/Contactus';
import Gallery from './Components/Gallery';
import Floorplan from './Components/Floorplan';
import Testimonals from './Components/Testimonals';
import Disclaimer from './Components/Disclaimer';
import Rside from './Components/Rside';

const App = () => {
    return(
      <>
        <div>
            <Header/>
            <Body/>
            <Amenities/>
            <Location/>
            <Contactus/>
            <Gallery/>
            <Floorplan/>
            <Testimonals/>
            <Disclaimer/> 
            <Rside />
        </div>
      </>
    )   
}

export default App;
