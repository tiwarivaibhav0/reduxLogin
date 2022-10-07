import { createStore } from "redux";
import userreducer from "./user/userReducer";

const store = createStore(userreducer);
export default store;
