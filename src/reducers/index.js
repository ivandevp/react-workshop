import { UPDATE_DATA, FINISH_LOADING } from "../actions/actionTypes";

const initialState = {
  loading: true,
  data: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FINISH_LOADING:
      return {
        ...state,
        loading: false
      };
    case UPDATE_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
