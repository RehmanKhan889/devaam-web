import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Notifications({ notiModal, notiToggle, notifications }) {
	return (
		<>
			<Modal
				isOpen={notiModal}
				toggle={notiToggle}
				className='notification_modal'
			>
				<div className='modal-shadow'>
					<div className='modal-content'>
						<div className='modal-header pb-0'>
							<div className='d-flex bd-highlight'>
								<div className='p-2 bd-highlight'>
									<img
										src={require('../../assets/images/dawaam/bell solo.png')}
										alt=''
									/>
								</div>
								<div className='p-2 bd-highlight'></div>
								<div className='m-auto p-2 bd-highlight'>
									<h5 className='modal-title'>
										Notification & Alerts
									</h5>
								</div>
							</div>
						</div>
						<div className='modal-body'>
							{notifications &&
								notifications.length > 0 &&
								notifications.map(noti => {
									return (
										<div
											className='d-flex bd-highlight mt-2'
											style={{
												border: '1px solid #e2e2e2',
												alignItems: 'center',
												borderRadius: '20px',
											}}
										>
											<div className='p-1 bd-highlight'>
												<img
													src={require('../../assets/images/dawaam/green-alert.png')}
													alt=''
												/>
											</div>
											<div className=' p-2 bd-highlight'>
												<h5 className='modal-title modal-titles'>
													{noti.message}
												</h5>
											</div>
										</div>
									);
								})}

							{/* <div
								className='d-flex mt-2 bd-highlight'
								style={{
									border: '1px solid #e2e2e2',
									alignItems: 'center',
									borderRadius: '20px',
								}}
							>
								<div className='p-1 bd-highlight'>
									<img
										src={require('../../assets/images/dawaam/red-alert.png')}
										alt=''
									/>
								</div>
								<div className=' p-2 bd-highlight'>
									<h5 className='modal-title modal-titles'>
										notifications & notifications
									</h5>
								</div>
							</div> */}

							<br />
							<br />
							<br />
						</div>
					</div>
				</div>
			</Modal>
		</>
		// <div className='modal-dialog modal-dialog-centered'>
		// 	<div className='modal-shadow'>
		// 		<div className='modal-content'>
		// 			<div className='modal-header pb-0'>
		// 				<div className='d-flex bd-highlight'>
		// 					<div className='p-2 bd-highlight'>
		// 						<img
		// 							src={require('../../assets/images/dawaam/bell solo.png')}
		// 							alt=''
		// 						/>
		// 					</div>
		// 					<div className='p-2 bd-highlight'></div>
		// 					<div className='m-auto p-2 bd-highlight'>
		// 						<h5 className='modal-title'>
		// 							Notification & Alerts
		// 						</h5>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div className='modal-body'>
		// 				<div
		// 					className='d-flex bd-highlight'
		// 					style={{
		// 						border: '1px solid #e2e2e2',
		// 						alignItems: 'center',
		// 						borderRadius: '20px',
		// 					}}
		// 				>
		// 					<div className='p-1 bd-highlight'>
		// 						<img
		// 							src={require('../../assets/images/dawaam/green-alert.png')}
		// 							alt=''
		// 						/>
		// 					</div>
		// 					<div className='ml-auto p-2 bd-highlight'>
		// 						<h5 className='modal-title modal-titles'>
		// 							notifications & notifications
		// 						</h5>
		// 					</div>
		// 				</div>
		// 				<div
		// 					className='d-flex mt-2 bd-highlight'
		// 					style={{
		// 						border: '1px solid #e2e2e2',
		// 						alignItems: 'center',
		// 						borderRadius: '20px',
		// 					}}
		// 				>
		// 					<div className='p-1 bd-highlight'>
		// 						<img
		// 							src={require('../../assets/images/dawaam/red-alert.png')}
		// 							alt=''
		// 						/>
		// 					</div>
		// 					<div className='ml-auto p-2 bd-highlight'>
		// 						<h5 className='modal-title modal-titles'>
		// 							notifications & notifications
		// 						</h5>
		// 					</div>
		// 				</div>
		// 				<div
		// 					className='d-flex mt-2 bd-highlight'
		// 					style={{
		// 						border: '1px solid #e2e2e2',
		// 						alignItems: 'center',
		// 						borderRadius: '20px',
		// 					}}
		// 				>
		// 					<div className='p-1 bd-highlight'>
		// 						<img
		// 							src={require('../../assets/images/dawaam/green-alert.png')}
		// 							alt=''
		// 						/>
		// 					</div>
		// 					<div className='ml-auto p-2 bd-highlight'>
		// 						<h5 className='modal-title modal-titles'>
		// 							notifications & notifications
		// 						</h5>
		// 					</div>
		// 				</div>
		// 				<div
		// 					className='d-flex mt-2 bd-highlight'
		// 					style={{
		// 						border: '1px solid  #e2e2e2',
		// 						alignItems: 'center',
		// 						borderRadius: '20px',
		// 					}}
		// 				>
		// 					<div className='p-1 bd-highlight'>
		// 						<img
		// 							src={require('../../assets/images/dawaam/red-alert.png')}
		// 							alt=''
		// 						/>
		// 					</div>
		// 					<div className='ml-auto p-2 bd-highlight'>
		// 						<h5 className='modal-title modal-titles'>
		// 							notifications & notifications
		// 						</h5>
		// 					</div>
		// 				</div>
		// 				<div
		// 					className='d-flex mt-2 bd-highlight'
		// 					style={{
		// 						border: '1px solid #e2e2e2',
		// 						alignItems: 'center',
		// 						borderRadius: '20px',
		// 					}}
		// 				>
		// 					<div className='p-1 bd-highlight'>
		// 						<img
		// 							src={require('../../assets/images/dawaam/green-alert.png')}
		// 							alt=''
		// 						/>
		// 					</div>
		// 					<div className='ml-auto p-2 bd-highlight'>
		// 						<h5 className='modal-title modal-titles'>
		// 							notifications & notifications
		// 						</h5>
		// 					</div>
		// 				</div>
		// 				<div
		// 					className='d-flex mt-2 bd-highlight'
		// 					style={{
		// 						border: '1px solid #e2e2e2',
		// 						alignItems: 'center',
		// 						borderRadius: '20px',
		// 					}}
		// 				>
		// 					<div className='p-1 bd-highlight'>
		// 						<img
		// 							src={require('../../assets/images/dawaam/red-alert.png')}
		// 							alt=''
		// 						/>
		// 					</div>
		// 					<div className='ml-auto p-2 bd-highlight'>
		// 						<h5 className='modal-title modal-titles'>
		// 							notifications & notifications
		// 						</h5>
		// 					</div>
		// 				</div>
		// 				<br />
		// 				<br />
		// 				<br />
		// 				<br />
		// 				<br />
		// 				<br />
		// 				<br />
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default Notifications;
