import React, { useState, useEffect } from 'react';

const PercentageHeader = () => {
	return (
		<div className='row align-items-center'>
			<div className='col-md-3'>
				<img
					src={require('../assets/images/dawaam/arrow up gradient.png')}
					alt=''
				/>
				<p
					className='card-title'
					style={{
						textDecoration: 'none',
					}}
				>
					Select each section from above to view specific details
				</p>
			</div>
			<div className='col-md-6'>
				<h3
					className='card-title'
					style={{
						textDecoration: 'none',
					}}
				>
					Customer Usage Data
				</h3>
			</div>
			<div className='col-md-3'>
				<img
					src={require('../assets/images/dawaam/Group 163.png')}
					alt=''
				/>
			</div>
		</div>
	);
};

export default PercentageHeader;
