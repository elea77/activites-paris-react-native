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

// export const getActivities = (rows, start, action)  => dispatch => {
//      axios({
//         method: 'GET',
//         url: `${process.env.API_URL}`,
//         params: {
//             rows: rows,
//             start: start
//         }
//     }).then(result => {
//         console.log("res", result.data.records);
//         dispatch(action(result.data.records));
//     })
// }


// export const classicCall = (rows, start) => dispatch => {
//     getActivities(rows, start, displayActivities)()
// }