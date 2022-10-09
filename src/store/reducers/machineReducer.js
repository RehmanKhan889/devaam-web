const initState = {
  machines: [],
  machine_details: [],
  stock_level: [],
  loading: false,
};

const machineReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case "GET_ALL_MACHINES":
      return {
        ...state,
        machines: payload,
      };
    case "SET_MACHINE_LOADING":
      return {
        ...state,
        loading: payload,
      };
    case "GET_MACHINE_DETAILS":
      return {
        ...state,
        machine_details: payload,
      };

    case "GET_STOCKS_LEVEL_STAGE":
      return {
        ...state,
        stock_level: payload,
      };

    case "GET_SALES_PAGE":
      return {
        ...state,
        sales_level: payload,
      };
    default:
      return state;
  }
};

export default machineReducer;
