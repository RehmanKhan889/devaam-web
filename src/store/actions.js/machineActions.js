import { RepositoryFactory } from '../../repository/RepositoryFactory';

let machine = RepositoryFactory.get('machine');

export const getAllMachines = () => async dispatch => {
	try {
		let { data } = await machine.get({
			request: {
				method: 'getAllMachines',
				data: {},
			},
		});

		dispatch({
			type: 'GET_ALL_MACHINES',
			payload: data.response.data.machines,
		});
	} catch (error) {
		console.log('Error');
	}
};
