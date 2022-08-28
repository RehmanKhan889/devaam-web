import { RepositoryFactory } from "../../repository/RepositoryFactory";

let dashboard = RepositoryFactory.get("dashboard");
let location = RepositoryFactory.get("location");

export const getAllMetrics = (payload) => async (dispatch) => {
  try {
    let { data } = await dashboard.get({
      request: {
        method: "getMetricsByCompanyDate",

        data: payload,
        // {
        //   company_code: "4236",
        //   start_date: "2022-03-01",
        //   end_date: "2022-04-06",
        // },
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

export const getAllLocations = (id) => async (dispatch) => {
  try {
    let { data } = await location.get({
      request: {
        method: "getLocationByCompany",
        data: {
          company_code: id,
        },
      },
    });

    dispatch({
      type: "GET_ALL_LOCATIONS",
      payload: data?.response?.data?.locations,
    });
  } catch (error) {
    console.log("Error");
  }
};
