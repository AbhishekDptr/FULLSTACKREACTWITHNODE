import axios from "axios";
import { FETCH_USER } from "./types";

// thunks will forwards the functions to stores via dispatch
//calling api using promises
//return function(dispatch) {
/*
    export const fetchUser = () => {
     axios.get("/api/curent_user").then(res => {
     dispatch({ type: FETCH_USER, payload: res.data });
   });
  };

*/

//*****a better approach is using async await syntax****
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

//another approach
//export const fetchUser = () => async dispatch => dispatch({ type: FETCH_USER, payload: await axios.get("/api/current_user").data});
