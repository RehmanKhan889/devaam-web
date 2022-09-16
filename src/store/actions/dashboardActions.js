import { RepositoryFactory } from "../../repository/RepositoryFactory";

let dashboard = RepositoryFactory.get("dashboard");
let transaction = RepositoryFactory.get("transaction");
let dispose = RepositoryFactory.get("disposibleBottle");

export const getAllMetrics = (payload) => async (dispatch) => {
  // console.log(payload);
  try {
    let { data } = await dashboard.get({
      request: {
        method: "getMetricsByCompanyDate",

        //payload,
        data: {
          company_code: payload.company_code,
          start_date: payload.start_date,
          end_date: payload.end_date,
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
    // console.log(data?.response?.data);
    dispatch({
      type: "SET_TRANSACTION_METRICS",
      payload: data?.response?.data || [],
    });

   const lastweek = generateGraphdata('last_week', data?.response?.data);
   const usertransaction = generateGraphdata('user_transaction', data?.response?.data);
  // console.log(lastweek, usertransaction);
   dispatch({
    type: "SET_LAST_WEEK",
    payload: lastweek || [],
  });

  dispatch({
    type: "SET_USER_TRANSACTION",
    payload: usertransaction || [],
  });

  } catch (error) {
    console.log(error.message);
    console.log("Error");
  }
};


const generateGraphdata = (type, yearlytransactions) => {
  // return new Promise((res, rej)=> {
   const yearlydata = yearlytransactions[`${type}`];
   const revenue = yearlydata?.Revenue;
   const graphData = {revenue: {label: [], data: []}, transaction: {label: [], data: []}};
  //  console.log(yearlydata);
   const transaction = yearlydata.Transaction;

   transaction.map((d, i) => {
     const keyobj = Object.keys(d)[0];
     const data = d[`${keyobj}`];
     graphData.transaction.label.push(keyobj);
     graphData.transaction.data.push(data);
   });

   revenue.map((d, i) => {
     const keyobj = Object.keys(d)[0];
     const data = d[`${keyobj}`];
     graphData.revenue.label.push(keyobj);
     graphData.revenue.data.push(data);
   });
   return graphData;
  //  })
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

export const getPlasticBottles = (payload) => async (dispatch) => {
  try {
    console.log("done");
    let { data } = await transaction.get({
      request: {
        method: "getPlasticSavedByCompany",
        data: payload,
      },
    });
    console.log(data, "asdadsa");
    dispatch({
      type: "GET_ALL_PLASTIC",
      payload: data?.response?.data?.plastic_saved || [],
    });
  } catch (error) {
    console.log("Error");
  }
};

export const getDisposibleBottles = (payload) => async (dispatch) => {
  try {
    let { data } = await dispose.get({
      request: {
        method: "getBottleDetailsByCompany",
        data: payload,
      },
    });

    dispatch({
      type: "GET_DISPOSIBLE_BOTTLES",
      payload: data?.response?.data?.bottle_details || [],
    });
  } catch (error) {
    console.log("Error");
  }
};

export const getUserTransactionsByYearlySumary =
  (payload) => async (dispatch) => {
    try {
      let { data } = await transaction.get({
        request: {
          method: "getUserTransactionsByYearlySumaryByCompany",
          data: payload,
        },
      });

      console.log(data, "year");
      dispatch({
        type: "GET_TRANSACTION_YEARLY",
        payload: data?.response?.data || [],
      });
    } catch (error) {
      console.log("Error");
    }
  };
