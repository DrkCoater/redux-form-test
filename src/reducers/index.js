import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import otherRecuder from "./other.reducer";

const rootReducer = combineReducers({
  form: formReducer,
  other: otherRecuder
});

export default rootReducer;
