import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  NEW_POST
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_POSTS:
      console.log("reducer");
      return {
        ...state,
        loading: false,
        items: action.payload
      };
    case FETCH_POSTS_ERROR:
      console.log("reducer");
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.message
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
