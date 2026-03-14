export const initialState = JSON.parse(localStorage.getItem('favorites')) || [];

export const favoritesReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const isExist = state.some(photo => photo.id === action.payload.id);
      if (isExist) {
        newState = state.filter(photo => photo.id !== action.payload.id);
      } else {
        newState = [...state, action.payload];
      }
      localStorage.setItem('favorites', JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};
