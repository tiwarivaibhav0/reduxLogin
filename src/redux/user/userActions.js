export const ADD_INFO = "ADD_INFO";

export const addInfo = (field, value) => {
  return {
    type: ADD_INFO,
    field: field,
    payload: value,
    info: "It adds info of user to the state",
  };
};
