const initState = {
	locations: [],
	loading: false,
};

const locationReducer = (state = initState, { payload, type }) => {
	switch (type) {
		case 'GET_ALL_LOCATIONS':
			return {
				...state,
				locations: payload,
			};

		case 'SET_LOCATION_LOADING':
			return {
				...state,
				loading: payload,
			};
		default:
			return state;
	}
};

export default locationReducer;
