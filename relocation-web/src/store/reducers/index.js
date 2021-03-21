import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import leadsReducer from './leads.reducer';

export default combineReducers({
    leadsReducer,
    form: formReducer    
});