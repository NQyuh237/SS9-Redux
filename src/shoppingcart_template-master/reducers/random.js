const initialState = [];

export const random = (state = initialState, action) => {
  switch (action.type) {
    case ACT_RANDOM:
      //  clon mang moi
      const newArray = [...state];
      //  push gia tri vao mang
      newArray.push(action.payload);
      return newArray;

    default:
      return state;
  }
  return state;
};
