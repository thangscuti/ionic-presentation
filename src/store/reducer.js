import { INCREASE_NUMBER } from './actions';

const initialState = {
  number:0
}

export const decrease = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_NUMBER:
      return {
        ...state,
        number: state.number + 1
      }
    default:
      return state;
  }
}
