import axios from 'axios'

export const DISPLAY_ACTIVITY = 'DISPLAY_ACTIVITY'
export const CLEAR_ACTIVITY = 'CLEAR_ACTIVITY'

export const displayActivity = payload => ({
    type: DISPLAY_ACTIVITY,
    payload
})

export const clearActivity = () => ({
    type: CLEAR_ACTIVITY
})

export const getActivity = ({ }) => dispatch => {
    axios({
        method: 'GET',
        url: `${process.env.API_URL}`,
    })
    .then(res => {
        dispatch(displayActivity(res.data.records))
    })
    .catch(err => {
        console.log(err)
    })
}