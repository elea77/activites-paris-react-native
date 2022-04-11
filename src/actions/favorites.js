export const CLEAR_FAVORITES = 'CLEAR_FAVORITES'
export const CHECK_FAVORITE = 'CHECK_FAVORITE'

export const checkFavorite = payload => ({
    type: CHECK_FAVORITE,
    payload
})

export const clearFavorites = () => ({
  type: CLEAR_FAVORITES
})