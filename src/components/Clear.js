import React from 'react';
import './Clear.css';

function Clear(props) {
	return (
		<div 
			className='clear'
			onClick={() => props.clearInput()}>
			{props.children}
		</div>
	)
}

export default Clear;