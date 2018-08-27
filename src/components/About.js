import React from 'react';
import 'animate.css';
import './About.css'

const About = ()=> {
	return (
		<div id='about' className="animated lightSpeedIn delay-1s">
				<img src='./aboutImg.jpg' alt='aboutPic' className='aboutPic' /> 
				<img src='https://www.codewars.com/users/Mehathab4eva/badges/small' alt='codewars' />

				<h2>Full Stack Web Developer.</h2>
				<p>
				A year of experience developing custom, interactive,
				and responsive web applications while completing the U of U Coding Bootcamp. Currently seeking a role as a
				Web Developer in a collaborative, cohesive, innovative environment where I can apply and extend my
				technical and web application development skills.</p>

		</div>
		)
};

export default About;