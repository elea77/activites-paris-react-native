import { DISPLAY_ACTIVITIES, CLEAR_ACTIVITIES, DISPLAY_ACTIVITY } from '../actions/activities'

const initialState = {
    activitiesList: [],
    activity: {}
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
        case DISPLAY_ACTIVITY:
        return {
            ...state,
            activity: action.payload
        }
        default:
        return state
    }
}