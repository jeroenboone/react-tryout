import { ADD_ARTICLE } from "../constants/action-types";


export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}

export function zoekFunctionActions(payload) {
  // console.log("zoekFunctionActions " + payload);
  return { type: ADD_ARTICLE, payload };
}
window.zoek = zoekFunctionActions;
//manual action in the console   //store has to be exposed on window
//store.dispatch( zoek("tien"))

