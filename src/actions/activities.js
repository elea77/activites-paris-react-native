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

export const getActivities = ({ }) => dispatch => {
    axios({
        method: 'GET',
        url: `${process.env.API_URL}`,
    })
    .then(res => {
        dispatch(displayActivities(res.data.records))
    })
    .catch(err => {
        console.log(err)
    })
}