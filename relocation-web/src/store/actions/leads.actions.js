import LeadsAPI from '../../api/LeadsAPI';

export const LeadActionTypes  = {
    GET_LEADS_RESPONSE : 'GET_LEADS_RESPONSE',
}

export const getLeadResponse = leads => ({
    type: LeadActionTypes.GET_LEADS_RESPONSE,
    leads
});

export function getLeads() {
    return (dispatch) => {
        return LeadsAPI.getAll()
            .then(response => {
                console.log('response', response)
                dispatch(getLeadResponse(response.data.leads))
            }).catch(error => {
                throw error;
            });
    };
}