import { combineReducers } from 'redux'

import activities from './activities'
import favorites from './favorites'

export default combineReducers({
    activities,
    favorites
})