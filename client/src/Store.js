import { createStore } from "redux";
import reducer from "./reducers/rankings-layout-reducer";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState());

export default store;
