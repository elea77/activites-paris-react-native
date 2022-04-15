import axios from 'axios'

export const DISPLAY_ACTIVITIES = 'DISPLAY_ACTIVITIES'
export const CLEAR_ACTIVITIES = 'CLEAR_ACTIVITIES'
export const DISPLAY_ONE_ACTIVITY = 'DISPLAY_ONE_ACTIVITY'
export const CLEAR_ONE_ACTIVITY = 'CLEAR_ONE_ACTIVITY'
export const DISPLAY_ACTIVITY = 'DISPLAY_ACTIVITY'


export const displayActivities = payload => ({
    type: DISPLAY_ACTIVITIES,
    payload
})
export const displayActivity = payload => ({
    type: DISPLAY_ACTIVITY,
    payload
})

export const displayOneActivity = payload => ({
    type: DISPLAY_ONE_ACTIVITY,
    payload
})

export const clearActivities = () => ({
    type: CLEAR_ACTIVITIES
})

export const clearOneActivity = () => ({
    type: CLEAR_ONE_ACTIVITY
})

export const getActivities = (rows, start) => dispatch => {
    axios({
        method: 'GET',
        url: `${process.env.API_URL}`,
        params: {
            rows: rows,
            start: start

        }
    })
    .then(res => {
        dispatch(displayActivities(res.data.records))
    })
    .catch(err => {
        console.log(err)
    })
}
export const getActivity = id => dispatch => {
    axios({
        method: 'GET',
        url: `${process.env.API_URL}`,
        params: {
            "refine.recordid": id
        }
    })
    .then(res => {
        dispatch(displayActivity(res.data.records))
    })
    .catch(err => {
        console.log(err)
    })
}

export const getOneActivity = rows => dispatch => {
    axios({
        method: 'GET',
        url: `${process.env.API_URL}`,
        params: {
            rows: rows
        }
    })
    .then(res => {
        dispatch(displayOneActivity(res.data.records))
    })
    .catch(err => {
        console.log(err)
    })
}

