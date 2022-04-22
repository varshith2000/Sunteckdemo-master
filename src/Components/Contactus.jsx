import React, { Component } from 'react';
import '../App.css';

class Contactus extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			mobile: '',
			email: ''
		}
	}
	render() {
		return (
			<>
				<div className='contactus'>
					<div className='contactusInfo'>
						<h3>For Any Querry</h3>
						<span>CONTACT US AT</span>
						<h3>Sunteck World,</h3>
						<h3>Sunteck world, Naigaon East, Mumbai, Maharashtra 401208,</h3>
						<h3>Phone : +91 9702020907,</h3>
					</div>
					<div className='contactusform'>
							<h2>Please Enter Your Details Below</h2>
							<div className='inputArea'>
								<input type='text' name='Name' placeholder='Enter Your Name' className='inputName' />
								<input type='phone' name='Mobile' placeholder='Enter Your Mobile Number' className='inputMobile' />
								<input type='email' name='Email' placeholder='Enter Your Email' className='inputEmail' />
								<button type='submit' className='submit-btn'>Submit</button>
							</div>
					</div>
				</div>
			</>
		)
	}
}

export default Contactus;
