import React from 'react';
import 'animate.css';
import './CareerCard.css';



const CareerCard = ({workplace, postion, duration, workLocation })=> {
	return (
			<div className='careerCard'>
			<h3>{postion}</h3>
			<h3>{workplace}</h3>
			<h3>{duration}</h3>
			<h3>{workLocation}</h3>

			</div>
		);
};

export default CareerCard;
