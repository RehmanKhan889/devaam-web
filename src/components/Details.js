import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Details = () => {
	return (
		<div className='row justify-content-center align-items-center'>
			<div className='col-md-4'>
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
			<div className='col-md-4'>
				<img
					src={require('../assets/images/dawaam/green-machine.png')}
					alt=''
				/>
				<h3
					className='card-title'
					style={{
						textDecoration: 'none',
					}}
				>
					Advance Machine Details
				</h3>
			</div>
			{/* <div className='col-md-3'>
				<Link to='/machines' className='btn btn-danger'>
					{' '}
					Back{' '}
				</Link>
			</div> */}
		</div>
	);
};

export default Details;
