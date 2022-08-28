import React, { useState, useEffect } from 'react';
import CompanyCard from '../components/CompanyCard';
import Notifications from '../components/Modals/Notifications';

function LocationSalesUsage() {
	const [notiModal, setNotiModal] = useState(false);
	const notiToggle = () => {
		setNotiModal(!notiModal);
	};
	return (
		<div class='main-content'>
			<div class='page-wrapper'>
				<div class='container-fluid'>
					<div class='row pb-3'>
						<div class='col-lg-8 col-md-0'></div>
						<div class='col-lg-4 col-md-12'>
							<CompanyCard />
						</div>
					</div>
					<div class='row'>
						<div class='col-lg-9 pt-5'>
							<div class='secondcard'>
								<div id='secondcard' class='card-body'>
									<div class='row align-items-center'>
										<div class='col-md-3	'>
											<img
												src={require('../assets/images/dawaam/arrow up gradient.png')}
												alt=''
											/>
											<p
												class='card-title'
												style={{
													textDecoration: 'none',
												}}
											>
												Select each section from above
												to view specific details
											</p>
										</div>
										<div class='col-md-6'>
											<img
												src={require('../assets/images/dawaam/green-machine.png')}
												alt=''
											/>
											<h3
												class='card-title'
												style={{
													textDecoration: 'none',
												}}
											>
												Advance Machine Details
											</h3>
										</div>
										<div class='col-md-3'>
											<a
												href='/locations'
												class='btn btn-danger'
											>
												{' '}
												Back{' '}
											</a>
										</div>
									</div>
									<div class='row pt-5'>
										<div class='col-lg-12 pt-3 '>
											<div class='row'>
												<div class='col-md-6 offset-md-3'>
													<table class='table table-bordered'>
														<thead>
															<tr>
																<th scope='col'>
																	{' '}
																	Locations
																</th>
																<th scope='col'>
																	Locations
																	Address
																</th>
																<th scope='col'>
																	Brands
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<th
																	id='machine_id'
																	scope='row'
																>
																	<a
																		href='sales_usage_details.html'
																		style={{
																			color: '#079a87',
																		}}
																	>
																		Islamabad
																	</a>
																</th>
																<td>
																	Address here
																</td>
																<td>
																	Brand names
																</td>
															</tr>
															<tr>
																<th
																	id='machine_id'
																	scope='row'
																>
																	<a
																		href='sales_usage_details.html'
																		style={{
																			color: '#079a87',
																		}}
																	>
																		Rawalpindi
																	</a>
																</th>
																<td>
																	Address here
																</td>
																<td>
																	Brand names
																</td>
															</tr>
															<tr>
																<th
																	id='machine_id'
																	scope='row'
																>
																	<a
																		href='sales_usage_details.html'
																		style={{
																			color: '#079a87',
																		}}
																	>
																		Lahore
																	</a>
																</th>
																<td>
																	Address here
																</td>
																<td>
																	Brand names
																</td>
															</tr>
															<tr>
																<th
																	id='machine_id'
																	scope='row'
																>
																	<a
																		href='sales_usage_details.html'
																		style={{
																			color: '#079a87',
																		}}
																	>
																		Karachi
																	</a>
																</th>
																<td>
																	Address here
																</td>
																<td>
																	Brand names
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class='col-lg-3 pt-5'>
							<div id='bellcards' class='card'>
								<div className='card-body'>
									<h4
										className='card-title'
										onClick={() => notiToggle()}
										role='button'
									>
										<img
											src={require('../assets/images/dawaam/bell solo.png')}
											alt=''
										/>
									</h4>
								</div>
							</div>
						</div>
					</div>
					<Notifications
						notiModal={notiModal}
						notiToggle={notiToggle}
					/>
				</div>
			</div>
		</div>
	);
}

export default LocationSalesUsage;
