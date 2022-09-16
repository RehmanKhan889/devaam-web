const initState = {
  metrics: [],
  locations: [],
  single_machine_metrics: [],
  transaction_metrics: [],
  notifications: [],
  plastic: [],
  disposibleBottle: [],
  yearlytransactions: [],
  lastweek: [],
  usertransaction: [],
};

const metricsReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case "GET_ALL_METRICS":
      return {
        ...state,
        metrics: payload,
      };
    case "GET_ALL_NOTIFICATIONS":
      return {
        ...state,
        notifications: payload,
      };
    case "GET_ALL_PLASTIC":
      return {
        ...state,
        plastic: payload,
      };
    case "GET_ALL_LOCATIONS":
      return {
        ...state,
        locations: payload,
      };
    case "GET_SINGLE_MACHINE_METRICS":
      return {
        ...state,
        single_machine_metrics: payload,
      };
    case "GET_DISPOSIBLE_BOTTLES":
      return {
        ...state,
        disposibleBottle: payload,
      };
    case "GET_TRANSACTION_YEARLY":
      return {
        ...state,
        yearlytransactions: payload,
      };
    case "SET_TRANSACTION_METRICS":
      return {
        ...state,
        transaction_metrics: payload,
      };
    case "SET_LAST_WEEK":
      return {
        ...state,
        lastweek: payload,
      };
    case "SET_USER_TRANSACTION":
      return {
        ...state,
        usertransaction: payload,
      };

    default:
      return state;
  }
};

export default metricsReducer;
