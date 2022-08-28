import { RepositoryFactory } from "../../repository/RepositoryFactory";

let dashboard = RepositoryFactory.get("dashboard");
let transaction = RepositoryFactory.get("transaction");

export const getAllMetrics = (payload) => async (dispatch) => {
  try {
    let { data } = await dashboard.get({
      request: {
        method: "getMetricsByCompanyDate",

        //payload,
        data: {
          company_code: "4236",
          start_date: "2022-03-01",
          end_date: "2022-04-06",
        },
      },
    });

    dispatch({
      type: "GET_ALL_METRICS",
      payload: data?.response?.data?.metrics || [],
    });
  } catch (error) {
    console.log("Error");
  }
};

export const getAllTransMetrics = (payload) => async (dispatch) => {
  try {
    let { data } = await transaction.get({
      request: {
        method: "getUserTransactionsByYearlySumaryByCompany",
        data: payload,
      },
    });
    console.log(data?.response?.data?.user_transaction);
    dispatch({
      type: "SET_TRANSACTION_METRICS",
      payload: data?.response?.data?.user_transaction || [],
    });
  } catch (error) {
    console.log(error.message);
    console.log("Error");
  }
};

export const getMetricsByMachine = (payload) => async (dispatch) => {
  try {
    let { data } = await dashboard.get({
      request: {
        method: "getMetricsByMachine",
        data: payload,
      },
    });

    dispatch({
      type: "GET_SINGLE_MACHINE_METRICS",
      payload: data?.response?.data?.metrics || [],
    });
  } catch (error) {
    console.log("Error");
  }
};

export const getNotifications = (payload) => async (dispatch) => {
  try {
    let { data } = await dashboard.getNotifications({
      request: {
        method: "getNotificationsByCompany",
        data: payload,
      },
    });

    dispatch({
      type: "GET_ALL_NOTIFICATIONS",
      payload: data?.response?.data?.notifications || [],
    });
  } catch (error) {
    console.log("Error");
  }
};
