import React, { useState, useEffect } from 'react';
import PrintModal from './Modals/PrintModal';

const CustomerHeader = () => {
	const [openModal, setOpenModal] = useState(false);
	const toggle = () => {
		setOpenModal(!openModal);
	};
	return (
		<>
			<PrintModal openModal={openModal} toggle={toggle} />
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
						src={require('../assets/images/dawaam/Group 163.png')}
						alt=''
					/>
					<h3
						className='card-title'
						style={{
							textDecoration: 'none',
						}}
					>
						Customer List
					</h3>
				</div>
				<div className='col-md-3 pointer'>
					<img
						onClick={toggle}
						src={require('../assets/images/dawaam/print-svgrepo-com 1.png')}
						alt=''
					/>
				</div>
			</div>
		</>
	);
};

export default CustomerHeader;
