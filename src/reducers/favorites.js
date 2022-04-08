import { DISPLAY_FAVORITES, CHECK_FAVORITE } from '../actions/favorites'

const initialState = {
  favoritesList: []
}

const checkFavorite = (state, action) => {
    const verifFav = state.favoritesList.map(f => f.id).findIndex(id => id === action.payload)
    if(verifFav === -1){
        let item = { id: action.payload }
        return { ...state, favoritesList: [...state.favoritesList, item] }
    }else{
        const filteredFavorite = state.favoritesList.filter(item => item.id !== action.payload)
        return {
            ...state,
            favoritesList: filteredFavorite
        }
    }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_FAVORITE:
        return checkFavorite(state, action)
    case DISPLAY_FAVORITES:
        return {
            ...state,
            favoritesList: action.payload
        }
    default:
      return state
  }
}