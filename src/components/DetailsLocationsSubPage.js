import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const DetailsLocationsSubPage = () => {
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
            <div className='col-md-3'>
				<Link to='/locations' className='btn btn-danger'>
					{' '}
					Back{' '}
				</Link>
			</div>
        </div>
    );
};

export default DetailsLocationsSubPage;
