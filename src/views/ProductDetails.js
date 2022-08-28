import React, { useState, useEffect } from "react";
import CompanyCard from "../components/CompanyCard";
import Notifications from "../components/Modals/Notifications";
import Details from '../components/Details';
import Select from 'react-select'

import { Link } from "react-router-dom";
import {
  getAllLocations,
  addLocation,
  updateLocation,
  deleteLocation,
} from "../store/actions/locationsActions";
import { getNotifications } from "../store/actions/dashboardActions";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Modal,
  Spinner,
  Form,
} from "reactstrap";

function FinanceBilling() {

	const dispatch = useDispatch();
	const { locations, loading } = useSelector((state) => state.location);
	const { user } = useSelector((state) => state.auth);
  
	const [addModal, setAddModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [machine_parts, setMachines] = useState([
	  "Motors",
	  "Pipes",
	  "Valves",
	  "IT Equipment",
	]);
	const [locationData, setLocationData] = useState({
	  latitude: null,
	  longitude: null,
	  name: "",
	});
	const [company_code, setCompanyCode] = useState("");
	const [_rev, setRev] = useState("");
	const [_id, setId] = useState("");
  
	const [stocktitle, setStockTitle] = useState("");
	const onChangeHandler = (name, val) => {
	  if (name == "name") {
		setLocationData((prevState) => ({ ...prevState, [name]: val }));
	  } else {
		setLocationData((prevState) => ({
		  ...prevState,
		  [name]: Number(val),
		}));
	  }
	};
  
	const clearFields = () => {
	  setLocationData({
		latitude: null,
		longitude: null,
		name: "",
	  });
	  setId("");
	  setRev("");
	  setCompanyCode("");
	};
	const addToggle = (title) => {
	  setStockTitle(title);
	  setAddModal(!addModal);
	};
	const editToggle = () => {
	  setEditModal(!editModal);
	};
	const deleteToggle = () => {
	  setDeleteModal(!deleteModal);
	};
  
	const [notiModal, setNotiModal] = useState(false);
	const notiToggle = () => {
	  setNotiModal(!notiModal);
	};
	useEffect(() => {
	  if (locations && locations.length == 0) {
		dispatch(getAllLocations(user?.company_code));
	  }
	}, []);
	const options = [
		{ label: 'Product 1', },
		{ label: 'Product 2', },
		{ label: 'Product 3', },
		{ label: 'Product 4', },
		{ label: 'Product 5', }
	  ]
	return (
		<div class='main-content'>
			<div class='page-wrapper'>
				<div class='container text-center'>
				<div className="row justify-content-center">
					<div className="col-lg-10 py-5">
						<div className="secondcard">
							<div id="secondcard" className="card-body">
								<Details />
								<div style={{
								border: '1px solid #FFFFFF',
								boxShadow: '30px 70px 120px rgba(27, 49, 66, 0.13)',
								borderRadius: '15px',
								marginTop:'2rem',
								}}>
									<div style={{
										background: '#FFFFFF',
										border: '1px solid #E5E5E5',
										borderRadius: '16px',
										margin:'1rem',
									}}>
							<div class="row">
								<div className="col-md-4">
									<div className="py-3 px-4">
										<Select options={options} />
									</div>
								</div>
											<div class="col-lg-8 offset-lg-2 mt-4 mb-4">
											<div
												id="oldsecondcard"
												class="secondcard"
												style={{ display: "block" }}
											>
												<div id="secondcard" class="card-body">
												<div className="table-responsive">
												<table class="table table-bordered">
													<thead>
													<tr>
														<th scope="col">Machines</th>
														<th scope="col">Location </th>

														<th scope="col">Product Price</th>
													</tr>
													</thead>
													<tbody>
													{locations &&
														locations.length > 0 &&
														locations.map((location, index) => {
														return (
															<tr>
															<th id="machine_id" scope="row">
															ID here {index}
															</th>
															<td>Location name</td>

																<td>
																100 Rs/ML
																<i
																className="fa fa-edit cursor-pointer pl-2"
																onClick={() => {
																	setId(location._id);
																	setRev(location._rev);
																	setCompanyCode(location.company_code);
																	setLocationData({
																	name: location.name,
																	latitude: location.latitude,
																	longitude: location.longitude,
																	});
																	editToggle();
																}}
																	></i>
																	
																<i
																className="fa fa-trash text-danger cursor-pointer ml-2"
																onClick={() => {
																	// setId(location._id);
																	// deleteToggle();
																}}
																></i>
															</td>
															</tr>
														);
														})}
													</tbody>
												</table>
												</div>
												</div>
											</div>
											<div
												id="newsecondcard"
												class="secondcard"
												style={{ display: "none" }}
											>
												<div id="secondcard" class="card-body">
												<img
													src={require("../assets/images/dawaam/green-machine.png")}
													alt=""
												/>
												<h4 class="card-title" style={{ textDecoration: "none" }}>
													Deployed machines in this location
												</h4>
												<br />
												<table class="table table-bordered">
													<thead>
													<tr>
														<th scope="col">Machine ID</th>
														<th scope="col">Location</th>
														<th scope="col">Brands</th>
														<th scope="col">Health</th>
													</tr>
													</thead>
													<tbody>
													<tr>
														<th id="redirect" scope="row">
														<a href="/locations_details">ID here</a>
														</th>
														<td>Address here</td>
														<td>Brand names</td>
														<td>
														Status here <br />
														<span>
															<img
															src={require("../assets/images/dawaam/Ellipse 6.png")}
															alt=""
															/>
														</span>
														<span>
															<img
															src={require("../assets/images/dawaam/Ellipse 7.png")}
															alt=""
															/>
														</span>
														<span>
															<img
															src={require("../assets/images/dawaam/Ellipse 8.png")}
															alt=""
															/>
														</span>
														</td>
													</tr>
													<tr>
														<th id="redirect" scope="row">
														<a href="/locations_details">ID here</a>
														</th>
														<td>Address here</td>
														<td>Brand names</td>
														<td>
														Status here <br />
														<span>
															<img
															src={require("../assets/images/dawaam/Ellipse 6.png")}
															alt=""
															/>
														</span>
														<span>
															<img
															src={require("../assets/images/dawaam/Ellipse 7.png")}
															alt=""
															/>
														</span>
														<span>
															<img
															src={require("../assets/images/dawaam/Ellipse 8.png")}
															alt=""
															/>
														</span>
														</td>
													</tr>
													</tbody>
												</table>

												<div class="row">
													<div class="col-md-6 offset-md-3">
													<form id="deployed_machines" class="pt-5">
														<div class=" ">
														<button
															id="Back"
															class="btn btn-primary"
															type="button"
														>
															Back
														</button>
														</div>
													</form>
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
					<Notifications notiModal={notiModal} notiToggle={notiToggle} />
          			{/* 
					Add Modal */}
					<Modal
						isOpen={addModal}
						toggle={() => {
						clearFields();
						addToggle();
						}}
					>
						<div className="modal-shadow">
						<div className="modal-content">
							<div className="modal-header pb-0">
							<div className="d-flex bd-highlight">
								<div className="p-2 bd-highlight"></div>
								<div className="m-auto p-2 bd-highlight">
								<h5 className="modal-title">{stocktitle}</h5>
								</div>
							</div>
							</div>
							<div className="modal-body">
							<Form
								role="form"
								onSubmit={(e) => {
								e.preventDefault();
								}}
							>
								<FormGroup>
								<Label for="exampleSelect">Select Product</Label>
								<Input id="exampleSelect" name="select" type="select">
									{Array(5)
									.fill(0)
									.map((item, index) => {
										return (
										<option value={index} key={index}>
											Product {index}
										</option>
										);
									})}
								</Input>
								</FormGroup>
								<FormGroup className="mb-3">
								<Label>
									{stocktitle == "Add Stock" ? "Add" : "Issue"} Amount
								</Label>
								<InputGroup className="input-group-alternative">
									<Input
									placeholder="amount in ml"
									type="text"
									name="name"
									required
									/>
								</InputGroup>
								</FormGroup>
								{/* <FormGroup className="mb-3">
								<Label>Latitude</Label>
								<InputGroup className="input-group-alternative">
									<Input
									placeholder="Enter latitude"
									type="number"
									autoComplete="new-name"
									name="latitude"
									value={locationData.latitude}
									onChange={(e) =>
										onChangeHandler("latitude", e.target.value)
									}
									required
									/>
								</InputGroup>
								</FormGroup> */}

								<div className="text-end">
								<Button
									onClick={() => {
									clearFields();
									addToggle();
									}}
									className="my-4 mr-2 text-white"
									color="danger"
									type="button"
									disabled={loading}
								>
									Cancel
								</Button>
								<Button
									className="my-4"
									color="success"
									type="submit"
									disabled={loading}
								>
									{loading ? <Spinner size="sm" /> : "Add"}
								</Button>
								</div>
							</Form>
							</div>
						</div>
						</div>
					</Modal>

					{/* Edit Modal */}
					<Modal
						isOpen={editModal}
						toggle={() => {
						clearFields();
						editToggle();
						}}
					>
						<div className="modal-shadow">
						<div className="modal-content">
							<div className="modal-header pb-0">
							<div className="d-flex bd-highlight">
								<div className="p-2 bd-highlight"></div>
								<div className="m-auto p-2 bd-highlight">
								<h5 className="modal-title">Update Details</h5>
								</div>
							</div>
							</div>
							<div className="modal-body">
							<Form
								role="form"
								onSubmit={(e) => {
								e.preventDefault();
								}}
							>
								<FormGroup>
								<Label for="exampleSelect">Select Product</Label>
								<Input id="exampleSelect" name="select" type="select">
									{Array(5)
									.fill(0)
									.map((item, index) => {
										return (
										<option value={index} key={index}>
											Product {index}
										</option>
										);
									})}
								</Input>
								</FormGroup>
								<FormGroup className="mb-3">
								<Label>Issuance Amount</Label>
								<InputGroup className="input-group-alternative">
									<Input
									placeholder="amount in ml"
									type="text"
									name="name"
									required
									/>
								</InputGroup>
								</FormGroup>
								{/* <FormGroup className="mb-3">
								<Label>Name</Label>
								<InputGroup className="input-group-alternative">
									<Input
									placeholder="Enter name"
									type="text"
									autoComplete="new-name"
									name="name"
									value={locationData.name}
									onChange={(e) =>
										onChangeHandler("name", e.target.value)
									}
									required
									/>
								</InputGroup>
								</FormGroup>
								<FormGroup className="mb-3">
								<Label>Latitude</Label>
								<InputGroup className="input-group-alternative">
									<Input
									placeholder="Enter latitude"
									type="number"
									autoComplete="new-name"
									name="latitude"
									value={locationData.latitude}
									onChange={(e) =>
										onChangeHandler("latitude", e.target.value)
									}
									required
									/>
								</InputGroup>
								</FormGroup>
								<FormGroup className="mb-3">
								<Label>Longitude</Label>
								<InputGroup className="input-group-alternative">
									<Input
									placeholder="Enter longitude"
									type="number"
									autoComplete="new-name"
									name="longitude"
									value={locationData.longitude}
									onChange={(e) =>
										onChangeHandler("longitude", e.target.value)
									}
									required
									/>
								</InputGroup>
								</FormGroup> */}

								<div className="text-end">
								<Button
									onClick={() => {
									clearFields();
									editToggle();
									}}
									className="my-4 mr-2 text-white"
									color="danger"
									type="button"
									disabled={loading}
								>
									Cancel
								</Button>
								<Button
									className="my-4"
									color="success"
									type="submit"
									disabled={loading}
								>
									{loading ? <Spinner size="sm" /> : "Update"}
								</Button>
								</div>
							</Form>
							</div>
						</div>
						</div>
					</Modal>

					{/* Delete Modal */}

					<Modal
						isOpen={deleteModal}
						toggle={() => {
						clearFields();
						deleteToggle();
						}}
					>
						<div className="modal-shadow">
						<div className="modal-content">
							<div className="modal-header pb-0">
							<div className="d-flex bd-highlight">
								<div className="p-2 bd-highlight"></div>
								<div className="m-auto p-2 bd-highlight">
								<h5 className="modal-title">Stock Deletion</h5>
								</div>
							</div>
							</div>
							<div className="modal-body">
							<Form
								role="form"
								onSubmit={(e) => {
								e.preventDefault();
								}}
							>
								<h5>Are you sure you want to delete this location?</h5>
								<div className="text-end">
								<Button
									onClick={() => {
									clearFields();
									deleteToggle();
									}}
									className="my-4 mr-2 text-white"
									color="danger"
									type="button"
									disabled={loading}
								>
									No
								</Button>
								<Button
									className="my-4"
									color="success"
									type="button"
									onClick={() => {
									dispatch(
										deleteLocation({ _id }, () => {
										clearFields();
										deleteToggle();
										dispatch(getAllLocations(user.company_code));
										})
									);
									}}
									disabled={loading}
								>
									{loading ? <Spinner size="sm" /> : "Yes"}
								</Button>
								</div>
							</Form>
							</div>
						</div>
						</div>
					</Modal>
				</div>
			</div>
		</div>
	);
}

export default FinanceBilling;
