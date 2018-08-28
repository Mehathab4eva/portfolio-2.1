import React from 'react';
import 'animate.css';
import './CareerCard.css';



const CareerCard = ({workplace, position, duration, workLocation })=> {
	return (
			<div className='careerCard'>
			<h3>{position}</h3>
			<h3>{workplace}</h3>
			<h3>{duration}</h3>
			<h3>{workLocation}</h3>

			</div>
		);
};

export default CareerCard;
