import { combineReducers } from 'redux'

import activities from './activities'
import favorites from './favorites'
import settings from './settings'

export default combineReducers({
    activities,
    favorites,
    settings
})