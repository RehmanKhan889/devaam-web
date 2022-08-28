import { combineReducers } from 'redux';
import machineReducer from './machineReducer';
import matricsReducer from './dashboardReducer';
import authReducer from './authReducers';
import companyReducer from './companyReducers';
import locationReducer from './locationReducer';

export const rootReducer = combineReducers({
	machine: machineReducer,
	metrics: matricsReducer,
	auth: authReducer,
	company: companyReducer,
	location: locationReducer,
});

export default rootReducer;
