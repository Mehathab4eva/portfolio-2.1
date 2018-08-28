import React, { Component } from 'react';
import 'animate.css';
import CareerCard from './CareerCard';
class Career extends Component {

constructor() {
	super()
	this.state = {
		work : [
				{
					workplace: 'Care Medical LLC',
					position: 'Blockchain Mining Manager',
					duration: 'Mar 2017 - Current',
					workLocation: 'Price, UT',
					imgURL: "./cmLogo.png"
				},
				{
					workplace: 'Data Care LLC',
					position: 'Assistant Manager',
					duration: 'Sept 2015 - Mar 2017',
					workLocation: 'Salt Lake City, UT',
					imgURL: "./dcLogo.png"
				},
				{
					workplace: 'Data Care (India)',
					position: 'Lead Billing Specialist',
					duration: 'June 2013 - Sept 2015',
					workLocation: 'Andhra Pradesh, India',
					imgURL:'./dcLogo.png'
				}
				],
		edu: [
		
				{
						position 	: 'Coding Bootcamp',
						workplace	: 'University of Utah',
						duration	: "Sept 2017 – Apr 2018",
						imgURL		: './images/ULogo.png' 
					},
					{
						position 	: 'MS Information Systems',
						workplace	: 'Stevens Henager College',
						duration	: "Sept 2015 – Nov 2016",
						imgURL		: './images/shcLogo.JPG'
					},
					{
						position 	: 'BSc Math Phy Comp',
						workplace 	: 'Andhra University',
						duration	: "June 2006 – Apr 2009",
						imgURL		: './images/ALogo.JPG'
					}

		
		]
	}


}

render() {
	return (

			<div>
				
				<div className="animated slideInLeft" id='careerContainer'>

				<h2>WORK</h2>

			{
				this.state.work.map((work, i) =>
				{
					return (
							<CareerCard 
								key={i}
								workplace={work.workplace}
								position={work.position}
								duration={work.duration}
								workLocation={work.workLocation}
								imgURL={work.imgURL}
								 />
								
						)
				})	
			}

			</div>

			<div className="animated slideInRight" id='eduContainer'>

				

			{
				this.state.edu.map((edu, i) =>
				{
					return (
							<CareerCard 
								key={i}
								workplace={edu.workplace}
								position={edu.position}
								duration={edu.duration}
								workLocation={edu.workLocation}
								imgURL={edu.imgURL}
								 />
								
						)
				})	
			}

			<h2>EDU</h2>

			</div>
			</div>
		);
}

};





export default Career;