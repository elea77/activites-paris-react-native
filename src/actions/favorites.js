export const DISPLAY_FAVORITES = 'DISPLAY_FAVORITES'
export const CHECK_FAVORITE = 'CHECK_FAVORITE'

export const checkFavorite = payload => ({
    type: CHECK_FAVORITE,
    payload
})

export const displayFavorites = payload => ({
  type: DISPLAY_FAVORITES,
  payload
})