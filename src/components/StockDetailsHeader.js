import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StockDetailsHeader = () => {
	return (
		<div className='row align-items-center'>
			<div className='col-md-3'>
				<h3
					className='card-title'
					style={{
						textDecoration: 'none',
					}}
				>
					Average Refill Time
				</h3>
				<p
					className='card-title p-color'
					style={{
						textDecoration: 'none',
					}}
				>
					*** minutes
				</p>
			</div>
			<div className='col-md-6'>
				<img
					src={require('../assets/images/dawaam/Group 171.png')}
					alt=''
				/>
				<h3
					className='card-title'
					style={{
						textDecoration: 'none',
					}}
				>
					Stock Details
				</h3>
			</div>
			<div className='col-md-3'>
				<Link to='/dashboard' className='btn btn-danger'>
					{' '}
					Back{' '}
				</Link>
			</div>
		</div>
	);
};

export default StockDetailsHeader;
