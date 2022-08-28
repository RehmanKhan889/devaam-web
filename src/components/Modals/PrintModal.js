import React, { useState, useEffect } from 'react';
import {
	Modal,
	ModalBody,
	ModalHeader,
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Row,
	Col,
	Spinner,
	Container,
	CardTitle,
	Label,
} from 'reactstrap';
import { editCompany } from '../../store/actions/comapnyActions';
import { useDispatch, useSelector } from 'react-redux';

const PrintModal = ({ openModal, toggle }) => {
	return (
		<Modal isOpen={openModal} toggle={toggle}>
			<div className='modal-shadow'>
				<div className='modal-content'>
					<div className='modal-header pb-0'>
						<div className='d-flex bd-highlight'>
							<div className='p-2 bd-highlight'></div>
							<div className='m-auto p-2 bd-highlight'>
								<h5 className='modal-title'>
									Enter customer ID
								</h5>
							</div>
						</div>
					</div>
					<div className='modal-body'>
						<Form role='form'>
							<FormGroup className='mb-3'>
								<InputGroup className='input-group-alternative'>
									<Input
										placeholder='customer ID'
										type='text'
										autoComplete='new-name'
										name='name'
										required
									/>
								</InputGroup>
							</FormGroup>
							<div className='text-center'>
								<Button
									className='my-4'
									color='success'
									type='submit'
								>
									Print
								</Button>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default PrintModal;
