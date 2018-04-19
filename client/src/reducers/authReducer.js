import { FETCH_USER } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; //in case user is not logged in we get "". and empty string is falsy

    default:
      return state;
  }
}
