import { LANGUAGE_SETTING, THEME_SETTING } from '../actions/settings'

const initialState = {
  theme: true,
  language: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGE_SETTING:
        return {
            ...state,
            language: !state.language
        }
    case THEME_SETTING:
        return {
            ...state,
            theme: !state.theme
        }
    default:
      return state
  }
}