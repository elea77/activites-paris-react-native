import axios from 'axios'

export const DISPLAY_ACTIVITIES = 'DISPLAY_ACTIVITIES'
export const CLEAR_ACTIVITIES = 'CLEAR_ACTIVITIES'

export const displayActivities = payload => ({
    type: DISPLAY_ACTIVITIES,
    payload
})

export const clearActivities = () => ({
    type: CLEAR_ACTIVITIES
})

export const getActivities = (rows, start) => dispatch => {
    return axios({
        method: 'GET',
        url: `${process.env.API_URL}`,
        params: {
            rows: rows,
            start: start
        }
    })
}


export const classicCall = (rows, start) => async() => {
    const result = await getActivities(rows, start)();
    dispatch(displayActivities(result));
}