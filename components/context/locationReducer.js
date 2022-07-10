import {
  FETCH_ALL_LOCATION_REQUEST,
  FETCH_ALL_LOCATION_SUCCESS,
  FETCH_ALL_LOCATION_ERROR,
} from "./constant";

export default (state, action) => {
  switch (action.type) {
    case FETCH_ALL_LOCATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        location: action.payload,
      };
    case FETCH_ALL_LOCATION_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
  }
};
