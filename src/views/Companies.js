import React, { useState, useEffect } from 'react';
import { Button, Table } from 'reactstrap';
import Company from '../components/Modals/Company';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanies, deleteCompany } from '../store/actions/comapnyActions';
import EditCompany from '../components/Modals/EditCompany';
import { Redirect } from 'react-router-dom';

function Companies() {
	const dispatch = useDispatch();
	const { loading } = useSelector(state => state.company);
	const { companies } = useSelector(state => state.company);
	const { user } = useSelector(state => state.auth);
	const [data, setData] = useState({});
	const [openModal, setOpenModal] = useState(false);
	const modalToggle = () => {
		setOpenModal(!openModal);
	};
	const [openEditModal, setOpenEditModal] = useState(false);
	const editModalToggle = () => {
		setOpenEditModal(!openEditModal);
	};
	const [editName, setEditName] = useState('');

	const [editEmail, setEditEmail] = useState('');

	const [editCompany_Name, setEditCompany_Name] = useState('');
	useEffect(() => {
		if (companies && companies.length < 1) {
			dispatch(getCompanies());
		}
	}, []);

	return (
		<>
			<Company openModal={openModal} modalToggle={modalToggle} />
			<EditCompany
				openEditModal={openEditModal}
				editModalToggle={editModalToggle}
				data={data}
				editEmail={editEmail}
				editName={editName}
				editCompany_Name={editCompany_Name}
				setEditCompany_Name={setEditCompany_Name}
				setEditName={setEditName}
				setEditEmail={setEditEmail}
			/>
			<div class='main-content'>
				<div class='page-wrapper'>
					<div class='container-fluid'>
						<div class='mt-5 mb-3 text-end'>
							<Button
								onClick={() => modalToggle()}
								role='button'
								color='success'
							>
								Add Company
							</Button>
						</div>
						<div>
							<Table responsive bordered>
								<thead>
									<tr>
										<th>#</th>
										<th>Name</th>
										<th>Email</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{companies &&
										companies.length > 0 &&
										companies.map((form, idx) => {
											return (
												<tr>
													<th scope='row'>
														{idx + 1}
													</th>
													<td>{form.company_name}</td>
													<td>{form.email}</td>
													<td>
														<i
															onClick={() => {
																setData(form);
																setEditEmail(
																	form.email
																);
																setEditName(
																	form.name
																);
																setEditCompany_Name(
																	form.company_name
																);
																editModalToggle();
															}}
															className='btn-edit fa-2x fas fa-edit'
														></i>
														<i
															onClick={() =>
																dispatch(
																	deleteCompany(
																		form._id
																	)
																)
															}
															className='btn-delete fa-2x fas fa-trash'
														></i>
													</td>
												</tr>
											);
										})}
								</tbody>
							</Table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Companies;
