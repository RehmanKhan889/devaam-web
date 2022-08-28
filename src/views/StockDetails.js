import React from 'react';
import { Input, Label } from 'reactstrap';
import CompanyCard from '../components/CompanyCard';
import StockDetailsHeader from '../components/StockDetailsHeader';

const StockDetails = () => {
	return (
		<div className='main-content'>
			<div className='page-wrapper'>
				<div className='container-fluid'>
					<div className='row pb-3'>
						<div className='col-lg-4 col-md-0'></div>
						<div className='d-flex col-lg-8 col-md-12'>
							<CompanyCard />
						</div>
						<div
							className='tab-pane fade show active'
							id='machine'
							role='tabpanel'
							aria-labelledby='machine-tab'
						>
							<div className='row'>
								<div className='col-lg-9 pt-5'>
									<div className='secondcard'>
										<div
											id='secondcard'
											className='card-body'
										>
											<StockDetailsHeader />
											<div
												className='tab-pane fade show active'
												id='machine'
												role='tabpanel'
												aria-labelledby='machine-tab'
											>
												{/* <div className=' pt-3'>
													<h4>Select Product</h4>
													<Input className='stock-level-dropdown' type='select'>
														<option>A</option>
													</Input>
												</div> */}
												<div className='row justify-content-center pt-3'>
													<div className='col-lg-12 col-md-12 stock-level-drop d-flex'>
														<Label className='float-left pt-2 stock-level-label'>
															Select Products :
														</Label>{' '}
														<Input
															type='select'
															className='stock-level-dropdown'
														>
															<option>
																Product 1
															</option>
															<option>
																Product 2
															</option>
															<option>
																Product 3
															</option>
														</Input>
													</div>
													<div className='col-lg-8 col-md-12 pt-2'>
														<table class='table table-bordered'>
															<thead>
																<tr>
																	<th scope='col'>
																		Machine
																		ID
																	</th>
																	<th scope='col'>
																		Location
																	</th>
																	<th scope='col'>
																		Product
																	</th>
																	<th scope='col'>
																		Stock
																		Level
																	</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		ID here
																	</td>
																	<td>
																		Address
																		here
																	</td>
																	<td>
																		Product
																		Name
																	</td>
																	<td>
																		<p className='stock-level'>
																			Total
																			Volume:
																			<span className='stock-level-green'>
																				123456
																			</span>
																		</p>
																		<p className='stock-level'>
																			Current
																			Volume:
																			<span className='stock-level-red'>
																				123456
																			</span>
																		</p>
																	</td>
																</tr>
																<tr>
																	<td>
																		ID here
																	</td>
																	<td>
																		Address
																		here
																	</td>
																	<td>
																		Product
																		Name
																	</td>
																	<td>
																		<p className='stock-level'>
																			Total
																			Volume:
																			<span className='stock-level-green'>
																				123456
																			</span>
																		</p>
																		<p className='stock-level'>
																			Current
																			Volume:
																			<span className='stock-level-red'>
																				123456
																			</span>
																		</p>
																	</td>
																</tr>
																<tr>
																	<td>
																		ID here
																	</td>
																	<td>
																		Address
																		here
																	</td>
																	<td>
																		Product
																		Name
																	</td>
																	<td>
																		<p className='stock-level'>
																			Total
																			Volume:
																			<span className='stock-level-green'>
																				123456
																			</span>
																		</p>
																		<p className='stock-level'>
																			Current
																			Volume:
																			<span className='stock-level-red'>
																				123456
																			</span>
																		</p>
																	</td>
																</tr>
																<tr>
																	<td>
																		ID here
																	</td>
																	<td>
																		Address
																		here
																	</td>
																	<td>
																		Product
																		Name
																	</td>
																	<td>
																		<p className='stock-level'>
																			Total
																			Volume:
																			<span className='stock-level-green'>
																				123456
																			</span>
																		</p>
																		<p className='stock-level'>
																			Current
																			Volume:
																			<span className='stock-level-red'>
																				123456
																			</span>
																		</p>
																	</td>
																</tr>
																<tr>
																	<td>
																		ID here
																	</td>
																	<td>
																		Address
																		here
																	</td>
																	<td>
																		Product
																		Name
																	</td>
																	<td>
																		<p className='stock-level'>
																			Total
																			Volume:
																			<span className='stock-level-green'>
																				123456
																			</span>
																		</p>
																		<p className='stock-level'>
																			Current
																			Volume:
																			<span className='stock-level-red'>
																				123456
																			</span>
																		</p>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StockDetails;
