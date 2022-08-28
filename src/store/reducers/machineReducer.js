const initState = {
	machines: [],
	loading: false,
};

const machineReducer = (state = initState, { payload, type }) => {
	switch (type) {
		case 'GET_ALL_MACHINES':
			return {
				...state,
				machines: payload,
			};
		case 'SET_MACHINE_LOADING':
			return {
				...state,
				loading: payload,
			};
		default:
			return state;
	}
};

export default machineReducer;
