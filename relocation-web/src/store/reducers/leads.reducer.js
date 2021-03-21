import { LeadActionTypes } from '../actions/leads.actions';
import _ from 'lodash';

const Initial_State = {
    leads : [],
}

const leadsReducer = (state = Initial_State, action) => {
    switch(action.type) {
        case LeadActionTypes.GET_LEADS_RESPONSE: {
            return {
                ...state, 
                leads: _.assign(action.leads)
            };
        }
        default: { return state; }
    }
};

export default leadsReducer;