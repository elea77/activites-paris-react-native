import { DISPLAY_ACTIVITIES, DISPLAY_ONE_ACTIVITY, CLEAR_ACTIVITIES, CLEAR_ONE_ACTIVITY, DISPLAY_ACTIVITY } from '../actions/activities'

const initialState = {
    activitiesList: [],
    oneActivity: {},
    activity: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_ACTIVITIES:
        return {
            ...state,
            activitiesList: action.payload
        }
        case DISPLAY_ONE_ACTIVITY:
        return {
            ...state,
            oneActivity: action.payload
        }
        case DISPLAY_ACTIVITY:
        return {
            ...state,
            activity: action.payload
        }
        case CLEAR_ACTIVITIES:
        return {
            ...state,
            activitiesList: []
        }
        case CLEAR_ONE_ACTIVITY:
        return {
            ...state,
            oneActivity: {}
        }
        default:
        return state
    }
}