import React, { Component } from 'react';
import '../App.css';
import { useState } from 'react';
import { db } from '../config.js'

function Rside() {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");

  
  let handleSubmit = async (e) => {
    e.preventDefault();

    db.collection('contacts').add({
      name:name,
      mobileNumber:mobileNumber,
      email: email,
    })
    .then(() => {
      alert('Soon you will be contacted');
    })
    .catch(error  => {
      alert(error.message);
    });

    setName("");
    setMobileNumber("");
    setEmail("");
  };
	
		return (
			<form onSubmit={handleSubmit}>
				<div className='rside'>
					<div className='contactusInf'>
						<h3>For Any Querry</h3>
						<span>CONTACT US AT</span>
						<h3>Sunteck World,</h3>
						<h3>Sunteck world, Naigaon East, </h3> 
                        <h3>Mumbai, Maharashtra 401208,</h3>
						<h3>Phone : +91 9702020907,</h3>
					</div>
					<div className='contactusfrm'>
							<h2 className='endb'>Enter Your Details Below</h2>
							<div className='inputArea'>
								<input type='text' value={name} name='Name' placeholder='Enter Your Name' className='inputName'  onChange={(e) => setName(e.target.value)}/>
								<input type='phone' value={mobileNumber} name='Mobile' placeholder='Enter Your Mobile Number' className='inputMobile' onChange={(e) => setMobileNumber(e.target.value)}/>
								<input type='email' value={email} name='Email' placeholder='Enter Your Email' className='inputEmail' onChange={(e) => setEmail(e.target.value)}/>
								<button type='submit' className='submit-btn'>Submit</button>
							</div>
					</div>
				</div>
			</form>
		)
	
}

export default Rside;