import React from 'react';
import './HeaderBlock.css';
import {Link} from 'react-router-dom';

import 'animate.css';

const HeaderBlock = ()=> {
	return (
		<div id="home">
				<h1 className="animated pulse">Mehathab Shaik</h1>
				<nav>
						<Link to='/' className="animated bounceInDown">Home</Link>
						<Link to='/about' className="animated bounceInDown">About</Link>
						<Link to='/projects' className="animated bounceInDown">Projects</Link>
						<Link to='/career' className="animated bounceInDown">Career</Link>
						<Link to='/contactMe' className="animated bounceInDown">Contact</Link>
						

				</nav>
		</div>


		);
}

export default HeaderBlock;