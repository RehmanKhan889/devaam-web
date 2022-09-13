const initState = {
	metrics: [],
	locations: [],
	single_machine_metrics: [],
	transaction_metrics: [],
	notifications: [],
	plastic: [],
	disposibleBottle: [],
};

const metricsReducer = (state = initState, { payload, type }) => {
	switch (type) {
		case 'GET_ALL_METRICS':
			return {
				...state,
				metrics: payload,
			};
		case 'GET_ALL_NOTIFICATIONS':
			return {
				...state,
				notifications: payload,
			};
		case 'GET_ALL_PLASTIC':
			return {
				...state,
				plastic: payload,
			};
		case 'GET_ALL_LOCATIONS':
			return {
				...state,
				locations: payload,
			};
		case 'GET_SINGLE_MACHINE_METRICS':
			return {
				...state,
				single_machine_metrics: payload,
			};
		case 'GET_DISPOSIBLE_BOTTLES':
			return {
				...state,
				disposibleBottle: payload,
			};
		case 'SET_TRANSACTION_METRICS':
			return {
				...state,
				transaction_metrics: payload,
			};
		default:
			return state;
	}
};

export default metricsReducer;
