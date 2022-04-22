import React from 'react';
import '../App.css';
import banner from '../Images/banner.jpg';
import banner2 from '../Images/overviewBanner.jpg';

const Body = () => {
  return (
    <>
      <div className='bd'>
        <div>
          <img className='banner' src={banner} alt='banner' />
        </div>
        {/* overview starts from here */}
        <div className='site-overview'>
          <div className='info'>
            <h2>SUNTECK WORLD OVERVIEW</h2>
            <p>The Largest Township of Western Suburbs<br></br>at Naigaon. A 150 Acre of A World Class<br></br> Lifestyle with Residential, Retail and Conveniences.<br></br> Promises a Lavish Life with 50+<br></br> Amenities. Great Connectivity and Accessibility<br></br> from Rail and Road. The Upcoming Largest<br></br> Mall Between Borivali and Virar<br></br> Sunteck Mall as Part of The Township.  </p>
            <button className='btn-info'>Know More</button>
          </div>
          <img className='banner2' src={banner2} alt='image of multi storey building' />
        </div>
        {/* end */}

        {/* about section starts from here */}
        <div className='site-about'>
           <h2>ABOUT SUNTECK WORLD</h2>
           <p>Sunteck Realty Limited (SRL) is a Mumbai-based real estate development company,catering to the premium ultra-luxury and luxury residential segment.<br></br>  We have a portfolio of 25 projects spread across 30mn sq.ft., with 4 rented assets. We are among the top 10 listed real <br></br> estate companies on BSE and NSE. We enjoy negligible debts and a strong balance sheet. We have Partners and <br></br> Shareholders like Kotak Realty Fund, Ajay Piramal, TIAA CREF - one of the largest US pension fund. Our flagship <br></br> projects in BKC, namely Signature Island, Signia Isles and Signia Pearl, are one of the most luxurious projects of the country,<br></br>hosting elite gentry with the best minds of the business world and film stars of Bollywood.</p>
           <button className='btn-info'>Know More</button>
        </div>

        {/* end */}

      </div>
    </>
  )
};

export default Body;
