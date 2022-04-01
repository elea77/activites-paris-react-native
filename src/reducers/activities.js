import { DISPLAY_ACTIVITIES, CLEAR_ACTIVITIES } from '../actions/activities'

const initialState = {
    activitiesList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_ACTIVITIES:
        return {
            ...state,
            activitiesList: action.payload
        }
        case CLEAR_ACTIVITIES:
        return {
            ...state,
            activitiesList: []
        }
        default:
        return state
    }
}