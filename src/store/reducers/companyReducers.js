const initState = {
	companies: [],
	company: null,
	loading: false,
};

const companyReducer = (state = initState, { payload, type }) => {
	switch (type) {
		case 'SET_LOADING':
			return { ...state, loading: payload };
		case 'SAVE_COMPANY':
			return {
				...state,
				company: payload,
			};
		case 'GET_COMPANIES':
			return {
				...state,
				companies: payload,
			};
		default:
			return state;
	}
};

export default companyReducer;
