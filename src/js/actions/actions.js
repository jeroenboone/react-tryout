import { ADD_ARTICLE } from "../constants/action-types";



export function zoekFunctionActions(payload) {
  // console.log("zoekFunctionActions " + payload);
  return { type: ADD_ARTICLE, payload };
}

