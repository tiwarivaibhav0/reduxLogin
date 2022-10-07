import { act } from "@testing-library/react";
import { ADD_INFO } from "./userActions";

const initialState = {
  name: "",
  username: "",
};

const userreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INFO:
      return { ...state, [action.field]: action.payload };

    default:
      return state;
  }
};

export default userreducer;
