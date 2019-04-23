import { ADD_ARTICLE } from "../constants/action-types";
const initialState = {
  promotions : [
    { name: "reducerPromo", price: -20 },
    { name: "king5euro", price: -5 },
    { name: "kongtien", price: -10 }
  ],
  searchvalue: {value: ''},
  remoteArticles:[]
};

function rootReducer(state = initialState, action) {
  // console.log("rootReducer " + state);
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      promotions: zoekFunction(action.payload),
      searchvalue: {value: action.payload}
    });
  }

  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }

  return state;
}

function hasString(anObject, stringToFind){
  return JSON.stringify(anObject).indexOf(stringToFind) > -1
}

function zoekFunction(text) {
  var updatedList = initialState.promotions.filter(function(promo){
    return hasString(promo, text);
  });
  return updatedList
}

export default rootReducer;