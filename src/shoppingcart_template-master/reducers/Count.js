const initialState = 0;

export const count = (state = initialState, action) => {
  switch (action.type) {
    case ACT_INCREASE:
      return state + 1; // nếu như cái action gửi lên có type là increase thì cập nhật state +1
    case ACT_DECREASE:
      return state - 1;
    default:
      return state; // nếu như khắc action thì return hiện tại
  }
};
