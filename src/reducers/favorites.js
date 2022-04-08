import { CLEAR_FAVORITES, CHECK_FAVORITE } from '../actions/favorites'

const initialState = {
  favoritesList: []
}

const checkFavorite = (state, action) => {
    const verifFav = state.favoritesList.map(f => f.recordid).findIndex(id => id === action.payload.recordid)
    if(verifFav === -1){
        let item = { recordid: action.payload.recordid, fields: {
            title: action.payload.title,
            cover_url: action.payload.img
        }}
        return { ...state, favoritesList: [...state.favoritesList, item] }
    }else{
        const filteredFavorite = state.favoritesList.filter(item => item.recordid !== action.payload.recordid)
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
    case CLEAR_FAVORITES:
        return {
            ...state,
            favoritesList: []
        }
    default:
      return state
  }
}