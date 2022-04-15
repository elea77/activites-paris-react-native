import { DISPLAY_ACTIVITIES, DISPLAY_ACTIVITY, CLEAR_ACTIVITIES, CLEAR_ACTIVITY } from '../actions/activities'

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
        case DISPLAY_ACTIVITY:
        return {
            ...state,
            activityList: action.payload
        }
        case CLEAR_ACTIVITIES:
        return {
            ...state,
            activitiesList: []
        }
        case CLEAR_ACTIVITY:
        return {
            ...state,
            activityList: []
        }
        default:
        return state
    }
}