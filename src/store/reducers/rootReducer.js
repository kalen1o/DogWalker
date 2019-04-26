import authReducer from './authReducer';
import petReducer from './petReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	auth: authReducer,
	pet: petReducer
})

export default rootReducer;