import React, { useState, useEffect } from 'react';
import CompanyCard from '../components/CompanyCard';
import Notifications from '../components/Modals/Notifications';
import Details from '../components/Details';
import { Button } from 'reactstrap';
import { useParams } from "react-router-dom";
import { getMetricsByMachine } from "../store/actions/dashboardActions";
import { useDispatch, useSelector } from "react-redux";
import ReactApexChart from "react-apexcharts";
import { getCombinedData } from "../helpers/getCombinedData";
import Barcode from '../assets/images/dawaam/barcode.png';
import SerialNO from '../assets/images/dawaam/binary-code 1.png';
import MachineType from '../assets/images/dawaam/machine -type.png';
import MotorType from '../assets/images/dawaam/motor-type.png';
import Nozzles from '../assets/images/dawaam/Nozzles.png';
import ITSystem from '../assets/images/dawaam/ITSystem.png';
import calendarsvgrepo from '../assets/images/dawaam/calendar-svgrepo-com 1.png';
import batteryIcon from '../assets/images/dawaam/battery.png';
import Replenished from '../assets/images/dawaam/Replenished.png';
import StockLeft from '../assets/images/dawaam/StockLeft.png';
import Tank1 from '../assets/images/dawaam/Tank1.png';
import Tank2 from '../assets/images/dawaam/Tank2.png';
import Tank3 from '../assets/images/dawaam/Tank3.png';
import Tank4 from '../assets/images/dawaam/Tank4.png';
import systemUpdate from '../assets/images/dawaam/systemUpdate.png';
import machineCircle from '../assets/images/dawaam/machineCircle.png';
import moment from 'moment';
import tankGroup from '../assets/images/dawaam/tankGroup.png';
import technicalSupport from '../assets/images/dawaam/technical-support.png';
import bucket from '../assets/images/dawaam/bucket.png';
import toolBox from '../assets/images/dawaam/tool-box.png';
import clock from '../assets/images/dawaam/clock.png';
import singleUser from '../assets/images/dawaam/singleUser.png';
import typicalOrder from '../assets/images/dawaam/typicalOrder.png';
import allUser from '../assets/images/dawaam/allUser.png';
import numberOrder from '../assets/images/dawaam/numberOrder.png';




function LocationsDetails() {
	const [notiModal, setNotiModal] = useState(true);
	const [tab, setTab] = useState('1');
	const notiToggle = () => {
		setNotiModal(!notiModal);
	};
	const [series1, setSeries1] = useState([60, 40]);
	const [pieEnabled, setEnabled] = useState("Volume");
	const { single_machine_metrics } = useSelector((state) => state.metrics);
	const [options1, setPieChartData] = useState({
		chart: {
			id: "mychart",
			width: 380,
			type: "pie",
		},
		labels: ["Brand 5", "Brand 6"],
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						position: "bottom",
					},
				},
			},
		],
	});

	useEffect(() => {
		let tempArr = getCombinedData(single_machine_metrics, pieEnabled);
		console.log(tempArr);
		// // tempArr.map(temp => {
		setTimeout(() => {
			setSeries1(tempArr.map((item) => item.volume));
			setPieChartData({
				...options1,
				labels: tempArr.map((item) => item.brand),
			});
		}, 1500);
	}, [single_machine_metrics, pieEnabled]);
	return (
		<div className='main-content'>
			<div className='page-wrapper'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-lg-10 col-md-12'>
							<div className='flex-column align-items-start '>
								<div
									className='nav flex-row nav-pills m-md-3 mt-3'
									id='v-pills-tab'
									role='tablist'
									aria-orientation='vertical'
								>
									<Button
										className={`nav-link ${tab == '1' ? 'btn-active' : ''
											}`}
										onClick={() => setTab('1')}
									>
										Machine
									</Button>
									<Button
										className={`nav-link ${tab == '2' ? 'btn-active' : ''
											}`}
										onClick={() => setTab('2')}
									>
										Stock Levels
									</Button>
									<Button
										className={`nav-link ${tab == '3' ? 'btn-active' : ''
											}`}
										onClick={() => setTab('3')}
									>
										Product <br />
										Dispensed
									</Button>
									<Button
										className={`nav-link ${tab == '4' ? 'btn-active' : ''
											}`}
										onClick={() => setTab('4')}
									>
										Sales & Usage
									</Button>
									<Button
										className={`nav-link ${tab == '5' ? 'btn-active' : ''
											}`}
										onClick={() => setTab('5')}
									>
										Tank <br />
										Management
									</Button>
									<Button
										className={`nav-link ${tab == '6' ? 'btn-active' : ''
											}`}
										onClick={() => setTab('6')}
									>
										Warnings
									</Button>
									<Button
										className={`nav-link ${tab == '7' ? 'btn-active' : ''
											}`}
										onClick={() => setTab('7')}
									>
										Maintenance
									</Button>
								</div>
							</div>
						</div>
					</div>

					<div className="row justify-content-end">
						<div className="row pt-4">
							<div className="col-md-8"></div>
							<div className="col-md-4"><CompanyCard /></div>
						</div>
					</div>
					<div className='tab-content' id='v-pills-tabContent'>
						{tab == '1' && (
							<div className="tab-pane fade show active"
								id="machine"
								role="tabpanel"
								aria-labelledby="machine-tab"
							>
								<div className="row">
									<div className="col-lg-10 pt-5">
										<div className="secondcard">
											<div id="secondcard" className="card-body">
												<Details />
												<div style={{
													border: '1px solid #FFFFFF',
													boxShadow: '30px 70px 120px rgba(27, 49, 66, 0.13)',
													borderRadius: '15px',
													marginTop: '2rem',
												}}>
													<div style={{
														background: '#FFFFFF',
														border: '1px solid #E5E5E5',
														borderRadius: '16px',
														margin: '1rem',
													}}>
														<div className="row pt-5 ">
															<div className="col-lg-10 offset-lg-1">
																<div className="row">
																	<div className="col-md-12">
																		<div className="dateDeployed">
																			<ul className="d-flex p-0" style={{
																				alignItems: 'center',
																			}}>
																				<li className="pr-2" style={{
																					listStyle: 'none',
																				}}>
																					<img src={calendarsvgrepo} />
																				</li>
																				<li className="pr-2" style={{
																					listStyle: 'none',
																				}}>
																					<strong>Date Deployed:</strong>
																				</li>
																				<li className="pr-3" style={{
																					listStyle: 'none',
																				}}>
																					<span>May 11, 2022   11:12 am</span>
																				</li>
																			</ul>
																		</div>
																		<div className="dateDeployed">
																			<ul className="d-flex p-0" style={{
																				alignItems: 'center',
																			}}>
																				<li className="pl-2 pr-3" style={{
																					listStyle: 'none',
																				}}>
																					<img src={batteryIcon} />
																				</li>
																				<li className="pr-2" style={{
																					listStyle: 'none',
																				}}>
																					<strong>Status:</strong>
																				</li>
																				<li className="pr-3" style={{
																					listStyle: 'none',
																				}}>
																					<span style={{
																						fontFamily: 'Poppins',
																						fontStyle: 'normal',
																						fontWeight: '500',
																						fontSize: '14px',
																						lineHeight: '21px',
																						alignItems: 'center',
																						textAlign: 'center',
																						color: '#09B39D',
																					}}><b>Active</b></span>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
																<div className="row g-3">
																	<div className="col-md-3">
																		<div class="card" style={{
																			borderRadius: '0',
																		}}>
																			<div className="" style={{
																				background: '#CFF2EE',
																				boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																				paddingTop: '10px',
																				paddingBottom: '5px',
																			}}>
																				<img class="card-img-top" src={Barcode} alt="Card image cap" style={{
																					width: '50%',
																					margin: 'auto',
																				}} />
																			</div>
																			<div class="" style={{
																				background: '#CFF2EE',
																				boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																			}}>
																				<h5 class="card-title" style={{
																					fontFamily: 'Poppins',
																					fontStyle: 'normal',
																					fontWeight: '500',
																					fontSize: '16px',
																					lineHeight: '24px',
																					alignItems: 'center',
																					textAlign: 'center',
																					color: '#2B2B2B',
																				}}>Barcode</h5>
																			</div>
																			<div class="card-body" style={{
																				padding: '30px 0px',
																				margin: 'auto',
																			}}>
																				<p class="card-text" style={{
																					fontFamily: 'Poppins',
																					fontStyle: 'normal',
																					fontWeight: '300',
																					fontSize: '14px',
																					lineHeight: '21px',
																					display: 'flex',
																					alignItems: 'center',
																					textAlign: 'center',
																					color: '#2B2B2B',
																				}}>barcode here</p>
																			</div>
																		</div>
																	</div>
																	<div className="col-md-3">
																		<div class="card" style={{
																			borderRadius: '0',
																		}}>
																			<div className="" style={{
																				background: '#CFF2EE',
																				boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																				paddingTop: '10px',
																				paddingBottom: '5px',
																			}}>
																				<img class="card-img-top" src={SerialNO} alt="Card image cap" style={{
																					width: '50%',
																					margin: 'auto',
																				}} />
																			</div>
																			<div class="" style={{
																				background: '#CFF2EE',
																				boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																			}}>
																				<h5 class="card-title" style={{
																					fontFamily: 'Poppins',
																					fontStyle: 'normal',
																					fontWeight: '500',
																					fontSize: '16px',
																					lineHeight: '24px',
																					alignItems: 'center',
																					textAlign: 'center',
																					color: '#2B2B2B',
																				}}>Serial NO#</h5>
																			</div>
																			<div class="card-body" style={{
																				padding: '30px 0px',
																				margin: 'auto',
																			}}>
																				<p class="card-text" style={{
																					fontFamily: 'Poppins',
																					fontStyle: 'normal',
																					fontWeight: '300',
																					fontSize: '14px',
																					lineHeight: '21px',
																					display: 'flex',
																					alignItems: 'center',
																					textAlign: 'center',
																					color: '#2B2B2B',
																				}}>serial number here</p>
																			</div>
																		</div>
																	</div>
																	<div className="col-md-3">
																		<div class="card" style={{
																			borderRadius: '0',
																		}}>
																			<div className="" style={{
																				background: '#CFF2EE',
																				boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																				paddingTop: '5px',
																			}}>
																				<img class="card-img-top" src={MachineType} alt="Card image cap" style={{
																					width: '35%',
																					margin: 'auto',
																				}} />
																			</div>
																			<div class="" style={{
																				background: '#CFF2EE',
																				boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																				paddingTop: '5px',
																			}}>
																				<h5 class="card-title" style={{
																					fontFamily: 'Poppins',
																					fontStyle: 'normal',
																					fontWeight: '500',
																					fontSize: '16px',
																					lineHeight: '24px',
																					alignItems: 'center',
																					textAlign: 'center',
																					color: '#2B2B2B',
																				}}>Machine Type</h5>
																			</div>
																			<div class="card-body" style={{
																				padding: '30px 0px',
																				margin: 'auto',
																			}}>
																				<p class="card-text" style={{
																					fontFamily: 'Poppins',
																					fontStyle: 'normal',
																					fontWeight: '300',
																					fontSize: '14px',
																					lineHeight: '21px',
																					display: 'flex',
																					alignItems: 'center',
																					textAlign: 'center',
																					color: '#2B2B2B',
																				}}>Machine Type here</p>
																			</div>
																		</div>
																	</div>
																	<div className="col-md-3">
																		<div class="card" style={{
																			borderRadius: '0',
																		}}>
																			<div className="" style={{
																				background: '#CFF2EE',
																				boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																				paddingTop: '10px',
																				paddingBottom: '5px',
																			}}>
																				<img class="card-img-top" src={MotorType} alt="Card image cap" style={{
																					width: '50%',
																					margin: 'auto',
																				}} />
																			</div>
																			<div class="" style={{
																				background: '#CFF2EE',
																				boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																			}}>
																				<h5 class="card-title" style={{
																					fontFamily: 'Poppins',
																					fontStyle: 'normal',
																					fontWeight: '500',
																					fontSize: '16px',
																					lineHeight: '24px',
																					alignItems: 'center',
																					textAlign: 'center',
																					color: '#2B2B2B',
																				}}>Motor Type</h5>
																			</div>
																			<div class="card-body" style={{
																				padding: '30px 0px',
																				margin: 'auto',
																			}}>
																				<p class="card-text" style={{
																					fontFamily: 'Poppins',
																					fontStyle: 'normal',
																					fontWeight: '300',
																					fontSize: '14px',
																					lineHeight: '21px',
																					display: 'flex',
																					alignItems: 'center',
																					textAlign: 'center',
																					color: '#2B2B2B',
																				}}>motor type here</p>
																			</div>
																		</div>
																	</div>
																	<div className="col-md-3">
																		<div class="card" style={{
																			borderRadius: '0',
																		}}>
																			<div className="" style={{
																				background: '#CFF2EE',
																				boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																				paddingTop: '10px',
																				paddingBottom: '5px',
																			}}>
																				<img class="card-img-top" src={Nozzles} alt="Card image cap" style={{
																					width: '50%',
																					margin: 'auto',
																				}} />
																			</div>
																			<div class="" style={{
																				background: '#CFF2EE',
																				boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																			}}>
																				<h5 class="card-title" style={{
																					fontFamily: 'Poppins',
																					fontStyle: 'normal',
																					fontWeight: '500',
																					fontSize: '16px',
																					lineHeight: '24px',
																					alignItems: 'center',
																					textAlign: 'center',
																					color: '#2B2B2B',
																				}}>Nozzles</h5>
																			</div>
																			<div class="card-body" style={{
																				padding: '30px 0px',
																				margin: 'auto',
																			}}>
																				<p class="card-text" style={{
																					fontFamily: 'Poppins',
																					fontStyle: 'normal',
																					fontWeight: '300',
																					fontSize: '14px',
																					lineHeight: '21px',
																					display: 'flex',
																					alignItems: 'center',
																					textAlign: 'center',
																					color: '#2B2B2B',
																				}}>number of nozzles</p>
																			</div>
																		</div>
																	</div>
																	<div className="col-md-3">
																		<div class="card" style={{
																			borderRadius: '0',
																		}}>
																			<div className="" style={{
																				background: '#CFF2EE',
																				boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																				paddingTop: '10px',
																				paddingBottom: '5px',
																			}}>
																				<img class="card-img-top" src={ITSystem} alt="Card image cap" style={{
																					width: '50%',
																					margin: 'auto',
																				}} />
																			</div>
																			<div class="" style={{
																				background: '#CFF2EE',
																				boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																			}}>
																				<h5 class="card-title" style={{
																					fontFamily: 'Poppins',
																					fontStyle: 'normal',
																					fontWeight: '500',
																					fontSize: '16px',
																					lineHeight: '24px',
																					alignItems: 'center',
																					textAlign: 'center',
																					color: '#2B2B2B',
																				}}>IT System</h5>
																			</div>
																			<div class="card-body" style={{
																				padding: '30px 0px',
																				margin: 'auto',
																			}}>
																				<p class="card-text" style={{
																					fontFamily: 'Poppins',
																					fontStyle: 'normal',
																					fontWeight: '300',
																					fontSize: '14px',
																					lineHeight: '21px',
																					display: 'flex',
																					alignItems: 'center',
																					textAlign: 'center',
																					color: '#2B2B2B',
																				}}>details here</p>
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
							</div>
						)}
						{tab == '2' && (
							<div
								className="tab-pane fade show active"
								id="stock-levels"
								role="tabpanel"
								aria-labelledby="stock-levels-tab"
							>
								<div className="row">
									<div className="col-lg-10 pt-5">
										<div className="secondcard">
											<div id="secondcard" className="card-body">
												<Details />
												<div style={{
													border: '1px solid #FFFFFF',
													boxShadow: '30px 70px 120px rgba(27, 49, 66, 0.13)',
													borderRadius: '15px',
													marginTop: '2rem',
												}}>
													<div style={{
														background: '#FFFFFF',
														border: '1px solid #E5E5E5',
														borderRadius: '16px',
														margin: '1rem',
													}}>
														<div className="row pt-5">
															<div className="col-lg-10 offset-lg-1">

																<div className="row g-3">
																	<div className="col-md-3">
																		<div id="tankCard">
																			<div class="card">
																				<div className="cardContent">
																					<img class="card-img-top" src={Tank1} alt="Card image cap" />
																				</div>
																				<div className="tank1Content" style={{
																					background: '#CFF2EE',
																					boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																				}}>
																					<h5 class="card-title">Tank 1</h5>
																				</div>
																				<div class="card-body">
																					<img class="pb-2" src={StockLeft} alt="Card image cap" />
																					<h5 class="card-title">Stock Left</h5>
																					<p class="card-text">Current Volume:</p>
																					<span className="m-0">
																						<b className="p-0">5000 ML</b>
																					</span>
																				</div>
																				<div class="card-body">

																					<img class="pb-2" src={Replenished} alt="Card image cap" />
																					<h5 class="card-title" >Replenished:</h5>
																					<p class="card-text" >Last Replenished</p>
																					<span className="m-0" >dd / mm / yyyy <br /> 11:22 am</span>

																				</div>
																				<div class="card-body">

																					<h5 class="card-title">
																						<strong>Brand name</strong>
																					</h5>
																					<p class="card-text">Product name</p>
																					<span className="m-0">Product type</span>

																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-md-3">
																		<div id="tankCard">
																			<div class="card">
																				<div className="cardContent">
																					<img class="card-img-top" src={Tank2} alt="Card image cap" />
																				</div>
																				<div className="tank1Content" style={{
																					background: '#CFF2EE',
																					boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																				}}>
																					<h5 class="card-title">Tank 2</h5>
																				</div>
																				<div class="card-body">
																					<img class="pb-2" src={StockLeft} alt="Card image cap" />
																					<h5 class="card-title">Stock Left</h5>
																					<p class="card-text">Current Volume:</p>
																					<span className="m-0">
																						<b className="p-0">2000 ML</b>
																					</span>
																				</div>
																				<div class="card-body">

																					<img class="pb-2" src={Replenished} alt="Card image cap" />
																					<h5 class="card-title" >Replenished:</h5>
																					<p class="card-text" >Last Replenished</p>
																					<span className="m-0" >dd / mm / yyyy <br /> 11:22 am</span>

																				</div>
																				<div class="card-body">

																					<h5 class="card-title">
																						<strong>Brand name</strong>
																					</h5>
																					<p class="card-text">Product name</p>
																					<span className="m-0">Product type</span>

																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-md-3">
																		<div id="tankCard">
																			<div class="card">
																				<div className="cardContent">
																					<img class="card-img-top" src={Tank3} alt="Card image cap" />
																				</div>
																				<div className="tank1Content" style={{
																					background: '#CFF2EE',
																					boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																				}}>
																					<h5 class="card-title">Tank 3</h5>
																				</div>
																				<div class="card-body">
																					<img class="pb-2" src={StockLeft} alt="Card image cap" />
																					<h5 class="card-title">Stock Left</h5>
																					<p class="card-text">Current Volume:</p>
																					<span className="m-0">
																						<b className="p-0">4000 ML</b>
																					</span>
																				</div>
																				<div class="card-body">

																					<img class="pb-2" src={Replenished} alt="Card image cap" />
																					<h5 class="card-title" >Replenished:</h5>
																					<p class="card-text" >Last Replenished</p>
																					<span className="m-0" >dd / mm / yyyy <br /> 11:22 am</span>

																				</div>
																				<div class="card-body">

																					<h5 class="card-title">
																						<strong>Brand name</strong>
																					</h5>
																					<p class="card-text">Product name</p>
																					<span className="m-0">Product type</span>

																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-md-3">
																		<div id="tankCard">
																			<div class="card">
																				<div className="cardContent">
																					<img class="card-img-top" src={Tank4} alt="Card image cap" />
																				</div>
																				<div className="tank1Content" style={{
																					background: '#CFF2EE',
																					boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																				}}>
																					<h5 class="card-title">Tank 4</h5>
																				</div>
																				<div class="card-body">
																					<img class="pb-2" src={StockLeft} alt="Card image cap" />
																					<h5 class="card-title">Stock Left</h5>
																					<p class="card-text">Current Volume:</p>
																					<span className="m-0">
																						<b className="p-0">1000 ML</b>
																					</span>
																				</div>
																				<div class="card-body">

																					<img class="pb-2" src={Replenished} alt="Card image cap" />
																					<h5 class="card-title" >Replenished:</h5>
																					<p class="card-text" >Last Replenished</p>
																					<span className="m-0" >dd / mm / yyyy <br /> 11:22 am</span>

																				</div>
																				<div class="card-body">

																					<h5 class="card-title">
																						<strong>Brand name</strong>
																					</h5>
																					<p class="card-text">Product name</p>
																					<span className="m-0">Product type</span>

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
								</div>
							</div>
						)}
						{tab == '3' && (
							<div
								className="tab-pane fade show active"
								id="product-dispensed"
								role="tabpanel"
								aria-labelledby="product-dispensed-tab"
							>
								<div className="row">
									<div className="col-lg-10 pt-5">
										<div className="secondcard">
											<div id="secondcard" className="card-body">
												<Details />
												<div style={{
													border: '1px solid #FFFFFF',
													boxShadow: '30px 70px 120px rgba(27, 49, 66, 0.13)',
													borderRadius: '15px',
													marginTop: '2rem',
												}}>
													<div style={{
														background: '#FFFFFF',
														border: '1px solid #E5E5E5',
														borderRadius: '16px',
														margin: '1rem',
													}}>
														<div className="row pt-5">
															<div className="col-lg-10 offset-lg-1">
																<div className="row" style={{
																	alignItems: 'baseline',
																}}>
																	<div className="col-lg-4">
																		<div className="dateDeployed">
																			<ul className="d-flex p-0" style={{
																				alignItems: 'center',
																			}}>

																				<li className="pr-2" style={{
																					listStyle: 'none',
																				}}>
																					<p className="bold">Current: May, 2022</p>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div className="col-lg-2">
																		<div className="dateDeployed">
																			<ul className="d-flex p-0" style={{
																				background: '#5ab9a2',
																				width: 'fit-content',
																				margin: 'auto',
																				position: 'relative',
																			}}>
																				<li className="pr-2" style={{
																					listStyle: 'none',
																					padding: '5px',
																					color: '#fff',
																				}}>
																					<i class="fa fa-pencil" aria-hidden="true"></i>

																				</li>
																				<li className="pr-2" style={{
																					listStyle: 'none',
																					padding: '5px',
																					color: '#fff',
																				}}>
																					<i class="fa fa-calendar-o" aria-hidden="true"></i>

																				</li>
																			</ul>
																		</div>
																	</div>
																	<div className="col-lg-6 m-0 p-0">
																		<div className="dateDeployed">
																			<ul className="d-flex p-0" style={{
																				alignItems: 'center',
																			}}>
																				<li className="pl-2 pr-3" style={{
																					listStyle: 'none',
																				}}>
																					<img src={systemUpdate} />
																				</li>
																				<li className="" style={{
																					listStyle: 'none',
																				}}>
																					<ul className="m-0 p-0">
																						<li className="" style={{
																							listStyle: 'none',
																						}}>
																							<span className='span-machine'>Number of times machine used</span>
																						</li>
																						<li className="" style={{
																							listStyle: 'none',
																						}}>
																							<strong className="" style={{ color: '#09B39D' }}>#123456</strong>
																						</li>
																					</ul>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
																<div className="row g-3">
																	<div className="col-md-3">
																		<div id="tankCard">
																			<div class="card">
																				<div className="cardContent">
																					<img class="card-img-top" src={Tank1} alt="Card image cap" />
																				</div>
																				<div className="tank1Content" style={{
																					background: '#CFF2EE',
																					boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																				}}>
																					<h5 class="card-title">Tank 1</h5>
																				</div>
																				<div class="card-body">

																					<img class="pb-2" src={Replenished} alt="Card image cap" />
																					<h5 class="card-title" ><strong>Total Product Dispensed:</strong></h5>
																					<span className="m-0 amount" >#amount in ML</span>

																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-md-3">
																		<div id="tankCard">
																			<div class="card">
																				<div className="cardContent">
																					<img class="card-img-top" src={Tank2} alt="Card image cap" />
																				</div>
																				<div className="tank1Content" style={{
																					background: '#CFF2EE',
																					boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																				}}>
																					<h5 class="card-title">Tank 2</h5>
																				</div>
																				<div class="card-body">

																					<img class="pb-2" src={Replenished} alt="Card image cap" />
																					<h5 class="card-title" ><strong>Total Product Dispensed:</strong></h5>
																					<span className="m-0 amount" >#amount in ML</span>

																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-md-3">
																		<div id="tankCard">
																			<div class="card">
																				<div className="cardContent">
																					<img class="card-img-top" src={Tank3} alt="Card image cap" />
																				</div>
																				<div className="tank1Content" style={{
																					background: '#CFF2EE',
																					boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																				}}>
																					<h5 class="card-title">Tank 3</h5>
																				</div>
																				<div class="card-body">

																					<img class="pb-2" src={Replenished} alt="Card image cap" />
																					<h5 class="card-title" ><strong>Total Product Dispensed:</strong></h5>
																					<span className="m-0 amount" >#amount in ML</span>

																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-md-3">
																		<div id="tankCard">
																			<div class="card">
																				<div className="cardContent">
																					<img class="card-img-top" src={Tank4} alt="Card image cap" />
																				</div>
																				<div className="tank1Content" style={{
																					background: '#CFF2EE',
																					boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																				}}>
																					<h5 class="card-title">Tank 4</h5>
																				</div>
																				<div class="card-body">

																					<img class="pb-2" src={Replenished} alt="Card image cap" />
																					<h5 class="card-title" ><strong>Total Product Dispensed:</strong></h5>
																					<span className="m-0 amount" >#amount in ML</span>

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
								</div>
							</div>
						)}
						{tab == '4' && (
							<div
								className="tab-pane fade show active"
								id="sales-usage"
								role="tabpanel"
								aria-labelledby="sales-usage-tab"
							>
								<div className="row">
									<div className="col-lg-10 pt-5">
										<div className="secondcard">
											<div id="secondcard" className="card-body">
												<Details />
												<div className='row'>
													<div className='col-md-6 offset-md-3 text-center'>
														<ul class="nav nav-pills " id="pills-tab" role="tablist" style={{
															justifyContent: 'center',
														}}>
															<li class="nav-item m-1">
																<a class="nav-link active" id="pills-sales-tab" data-toggle="pill" href="#pills-sales" role="tab" aria-controls="pills-sales" aria-selected="true">Sales</a>
															</li>
															<li class="nav-item m-1">
																<a class="nav-link" id="pills-Usage-tab" data-toggle="pill" href="#pills-Usage" role="tab" aria-controls="pills-Usage" aria-selected="false">Usage</a>
															</li>
														</ul>
													</div>
												</div>
												<div className='row'>
													<div className='col-md-12'>
														<div class="tab-content" id="pills-tabContent">
															<div class="tab-pane fade show active" id="pills-sales" role="tabpanel" aria-labelledby="pills-sales-tab">
																<div className="row pt-5">
																	<div className="col-lg-6 col-md-12 pt-5">
																		<div className='d-md-flex align-items-baseline'>
																			<div>
																				<h6 className='card-subtitle'>
																					Revenue
																				</h6>
																			</div>
																			<div className='ms-auto no-block align-items-center'>
																				<input
																					type='date'
																					value={moment().format(
																						'YYYY-MM-DD'
																					)}
																					className='__input'
																				/>
																			</div>
																		</div>
																		<div
																			className="amp-pxl mt-4"
																			style={{
																				height: "350px",
																			}}
																		>
																			<div className="chartist-tooltip"></div>
																		</div>
																		<div className="row">
																			<div className="col-lg-6 col-md-12" style={{ margin: 'auto' }}>
																				<p>Total Transactions</p>
																				<h3>
																					{getCombinedData(
																						single_machine_metrics,
																						"Transaction"
																					)
																						.map((item) => item.volume)
																						.toString()}{" "}
																					{getCombinedData(
																						single_machine_metrics,
																						"Transaction"
																					)
																						.map((item) => item.volume)
																						.toString() == ""
																						? "0"
																						: ""}
																					Pkr
																				</h3>
																				{/* <p>
																			<span>
																				<img
																				src={require("../assets/images/dawaam/arrow-up.png")}
																				alt=""
																				/>
																			</span>{" "}
																			7,00%
																			</p> */}
																			</div>
																		</div>
																	</div>
																	<div className="col-lg-6 col-md-12 pt-5">
																		<h4 className="card-title">
																			Sales percentage
																		</h4>
																		<p className="card-text">
																			Breakdown of sales percentage by product
																		</p>

																		<br />
																		<div id="chart">
																			<ReactApexChart
																				options={options1}
																				series={series1}
																				type="pie"
																				width={320}
																			/>
																		</div>
																		{/* <div
																		id="chartContainer"
																		style={{
																			height: "370px",
																			width: "auto",
																		}}
																		></div> */}
																	</div>
																</div>
															</div>
															<div class="tab-pane fade" id="pills-Usage" role="tabpanel" aria-labelledby="pills-Usage-tab">
																<div className="row pt-5">
																	<div className="col-md-3">
																		<p>
																			Enter customer mobile number
																			<br /> to see specific details
																		</p>
																		<input
																			type="text"
																			name=""
																			placeholder="****-*******"
																			id="phoneinput"
																		/>
																		<br />
																		
																		<a
																			href="/machines"
																			className="btn btn-danger"
																		>
																			{" "}
																			Process
																		</a>
																	</div>
																	
																	<div className="col-md-3">
																		<div id="usageSec">
																			<div class="card">
																				<div className="cardContent">
																					<img class="card-img-top" src={typicalOrder} alt="Card image cap" />
																				</div>
																				<div className="tank1Content" style={{
																					background: '#CFF2EE',
																					boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																				}}>
																					<h5 class="card-title">Typical Order Size</h5>
																				</div>
																				<div class="card-body">
																					<img class="pb-2" src={allUser} alt="Card image cap" />
																					<br />
																					<br />
																					<p class="card-text">All users combined:</p>
																					<span className="m-0">
																						<b className="p-0">20,000 ML</b>
																					</span>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-md-3">
																		<div id="usageSec1">
																			<div class="card">
																				<div className="cardContent">
																					<img class="card-img-top" src={numberOrder} alt="Card image cap" />
																				</div>
																				<div className="tank1Content" style={{
																					background: '#CFF2EE',
																					boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
																				}}>
																					<h5 class="card-title">Number of Orders</h5>
																				</div>
																				<div class="card-body">
																					<img class="pb-2" src={allUser} alt="Card image cap" />
																					<br />
																					<br />
																					<p class="card-text">All users combined:</p>
																					<span className="m-0">
																						<b className="p-0">#number of orders</b>
																					</span>
																				</div>
																			</div>
																		</div>
																	</div>
																	<br />
																	<br />
																	<div className="col-md-4">
																		<div id="usageSec">
																			<div class="card">
																				<div class="card-body">
																					<img class="pb-2" src={singleUser} alt="Card image cap" />
																					<br />
																					<br />
																					<p class="card-text">User ID</p>
																					<span className="m-0">
																						<b className="p-0">#number of orders</b>
																					</span>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-md-4">
																		<div id="usageSec">
																			<div class="card">
																				<div class="card-body">
																					<img class="pb-2" src={singleUser} alt="Card image cap" />
																					<br />
																					<br />
																					<p class="card-text">User ID</p>
																					<span className="m-0">
																						<b className="p-0"> #number of orders</b>
																					</span>
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
								</div>
							</div>
						)}

						{tab == '5' && (
							<div
								className="tab-pane fade show active"
								id="tank-management"
								role="tabpanel"
								aria-labelledby="tank-management-tab"
							>
								<div className="row">
									<div className="col-lg-10 pt-5">
										<div className="secondcard">
											<div id="secondcard" className="card-body">
												<Details />
												<div style={{
													border: '1px solid #FFFFFF',
													boxShadow: '30px 70px 120px rgba(27, 49, 66, 0.13)',
													borderRadius: '15px',
													marginTop: '2rem',
												}}
												>
													<div style={{
														background: '#FFFFFF',
														border: '1px solid #E5E5E5',
														borderRadius: '16px',
														margin: '1rem',
													}}>
														<div className="row pt-5">
															<div className="col-lg-12 offset-lg-0">
																<div className="row g-3">
																	<div className="col-md-12">
																		<div className='table-content p-3'>
																			<table class="table table-borderless">
																				<thead>
																					<tr>
																						<th scope="col">#</th>
																						<th scope="col">Barcode</th>
																						<th scope="col">Product Type</th>
																						<th scope="col">Brand Name</th>
																						<th scope="col">Product Bach N0#</th>
																						<th scope="col">Product Deployed</th>
																					</tr>
																				</thead>
																				<tbody>
																					<tr>
																						<th scope="row">T-1</th>
																						<td>12939321321</td>
																						<td>Liquid</td>
																						<td>Brand Name</td>
																						<td>########</td>
																						<td>dd / mm / yyyy</td>
																					</tr>
																					<tr>
																						<th scope="row">T-2</th>
																						<td>12939321321</td>
																						<td>Liquid</td>
																						<td>Brand Name</td>
																						<td>########</td>
																						<td>dd / mm / yyyy</td>
																					</tr>
																					<tr>
																						<th scope="row">T-3</th>
																						<td>12939321321</td>
																						<td>Liquid</td>
																						<td>Brand Name</td>
																						<td>########</td>
																						<td>dd / mm / yyyy</td>
																					</tr>
																					<tr>
																						<th scope="row">T-4</th>
																						<td>12939321321</td>
																						<td>Liquid</td>
																						<td>Brand Name</td>
																						<td>########</td>
																						<td>dd / mm / yyyy</td>
																					</tr>
																					<tr>
																						<th scope="row">T-5</th>
																						<td>12939321321</td>
																						<td>Liquid</td>
																						<td>Brand Name</td>
																						<td>########</td>
																						<td>dd / mm / yyyy</td>
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
						)}

						{tab == '6' && (
							<div
								className="tab-pane fade show active"
								id="warnings"
								role="tabpanel"
								aria-labelledby="warnings-tab"
							>
								<div className="row justify-content-center">
									<div className="col-lg-10 pt-5">
										<div className="secondcard">
											<div id="secondcard" className="card-body">
												<Details />
												<div style={{
													border: '1px solid #FFFFFF',
													boxShadow: '30px 70px 120px rgba(27, 49, 66, 0.13)',
													borderRadius: '15px',
													marginTop: '2rem',
												}}>
													<div style={{
														background: '#FFFFFF',
														border: '1px solid #E5E5E5',
														borderRadius: '16px',
														margin: '1rem',
													}}>
														<div className="row justify-content-center pt-5">
															<div className="col-lg-12 offset-lg-0">
																<div className="row g-3">
																	<div className="col-md-12">
																		<h3>Coming Soon .......</h3>
																		<br />
																		<br />
																		<br />
																		<br />
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
						)}

						{tab == '7' && (
							<div
								className="tab-pane fade show active"
								id="maintenance"
								role="tabpanel"
								aria-labelledby="maintenance-tab"
							>
								<div className="row">
									<div className="col-lg-10 pt-5">
										<div className="secondcard">
											<div id="secondcard" className="card-body">
												<Details />
												<div style={{
													border: '1px solid #FFFFFF',
													boxShadow: '30px 70px 120px rgba(27, 49, 66, 0.13)',
													borderRadius: '15px',
													marginTop: '2rem',
												}}>
													<div style={{
														background: '#FFFFFF',
														border: '1px solid #E5E5E5',
														borderRadius: '16px',
														margin: '1rem',
													}}>

														<div className="row pt-5">
															<div className="col-lg-10 offset-lg-1">
																<div className="row ">
																	<div className="col-md-4">
																		<div id="maintenanceCard">
																			<div class="card">
																				<div className="technicalSupport" >
																					<img class="card-img-top" src={technicalSupport} alt="Card image cap" />
																				</div>
																				<div class="card-body">
																					<div class="">
																						<h5 class="card-title">Machine Last Serviced:</h5>
																						<div className="dateDeployed">
																							<ul className="d-flex p-0" style={{
																								alignItems: 'center',
																							}}>
																								<li className="pr-2" style={{
																									listStyle: 'none',
																								}}>
																									<img src={calendarsvgrepo} />
																								</li>
																								<li className="pr-3" style={{
																									listStyle: 'none',
																								}}>
																									<span>dd / mm / yyyy</span>
																								</li>
																							</ul>
																							<ul className="d-flex p-0" style={{
																								alignItems: 'center',
																							}}>
																								<li className="pr-2" style={{
																									listStyle: 'none',
																								}}>
																									<img src={clock} />
																								</li>
																								<li className="pr-3" style={{
																									listStyle: 'none',
																								}}>
																									<span>11:12 am</span>
																								</li>
																							</ul>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-md-4">
																		<div id="maintenanceCard">
																			<div class="card">
																				<div className="technicalSupport" >
																					<img class="card-img-top" src={bucket} alt="Card image cap" />
																				</div>
																				<div class="card-body">
																					<h5 class="card-title">Parts Cleaned:</h5>
																					<p className="card-text">List of parts below</p>
																					<h5 class="card-title text-start" style={{ borderBottom: '2.4px solid #000', padding: '6px 0px', }}>Part name 1</h5>
																					<h5 class="card-title text-start" style={{ borderBottom: '2.4px solid #000', padding: '6px 0px', }}>Part name 2</h5>
																					<h5 class="card-title text-start" style={{ borderBottom: '2.4px solid #000', padding: '6px 0px', }}>Part name 3</h5>
																					<h5 class="card-title text-start" style={{ borderBottom: '2.4px solid #000', padding: '6px 0px', }}>Part name 4</h5>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-md-4">
																		<div id="maintenanceCard">
																			<div class="card">
																				<div className="technicalSupport" >
																					<img class="card-img-top" src={toolBox} alt="Card image cap" />
																				</div>
																				<div class="card-body">
																					<h5 class="card-title">Parts Replaced:</h5>
																					<p className="card-text">List of parts below</p>
																					<h5 class="card-title text-start" style={{ borderBottom: '2.4px solid #000', padding: '6px 0px', }}>Part name 1</h5>
																					<h5 class="card-title text-start" style={{ borderBottom: '2.4px solid #000', padding: '6px 0px', }}>Part name 2</h5>
																					<h5 class="card-title text-start" style={{ borderBottom: '2.4px solid #000', padding: '6px 0px', }}>Part name 3</h5>
																					<h5 class="card-title text-start" style={{ borderBottom: '2.4px solid #000', padding: '6px 0px', }}>Part name 4</h5>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="row pt-1 m-5">
																	<div className="col-md-6 offset-md-3">
																		<div className="errorHistory">
																			<p> Click Below for error specific details</p>
																			<button className="btn btn-lg btn-success ">Error History</button>
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
						)}
					</div>

					{/* <Notifications
						notiModal={notiModal}
						notiToggle={notiToggle}
					/> */}
				</div>
			</div>
		</div>
	);
}

export default LocationsDetails;
