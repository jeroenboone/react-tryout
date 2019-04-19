import { ADD_ARTICLE } from "../constants/action-types";
const forbiddenWords = ["ki", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        console.log(action.payload)
        const foundWord = forbiddenWords.filter(word =>
          action.payload.includes(word)
        );
        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      return next(action);
    };
  };
}