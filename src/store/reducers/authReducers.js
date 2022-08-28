const initState = {
  user: null,
  loading: false,
};

const authReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case "SET_AUTH_LOADING":
      return { ...state, loading: payload };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: payload,
      };
    case "SET_AUTH_LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
