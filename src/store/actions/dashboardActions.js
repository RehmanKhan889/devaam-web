import { RepositoryFactory } from "../../repository/RepositoryFactory";

let dashboard = RepositoryFactory.get("dashboard");
let transaction = RepositoryFactory.get("transaction");
let dispose = RepositoryFactory.get("disposibleBottle");
let machine_details = RepositoryFactory.get("machine");

const Types = { LastfourMonth: "last_four_months", LastWeek: "last_week" };

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

    const lastweek = generateGraphdata("last_week", data?.response?.data);
    const usertransaction = generateGraphdata(
      "user_transaction",
      data?.response?.data
    );
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
  const graphData = {
    revenue: { label: [], data: [] },
    transaction: { label: [], data: [] },
  };
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

export const getMachineDetails = (payload) => async (dispatch) => {
  try {
    let { data } = await machine_details.get({
      request: {
        method: "getMachineDetails",
        data: payload,
      },
    });

    dispatch({
      type: "GET_MACHINE_DETAILS",
      payload: data?.response?.data || [],
    });

    dispatch({
      type: "GET_STOCKS_LEVEL_STAGE",
      payload: data?.response?.data.machine.stock_levels_page || [],
    });

    dispatch({
      type: "GET_SALES_PAGE",
      payload: data?.response?.data.machine.sales_page || [],
    });

    const getLast = getSales(
      data?.response?.data.machine.sales_page,
      Types.LastWeek
    );
    const getFourMonth = getSales(
      data?.response?.data.machine.sales_page,
      Types.LastfourMonth
    );

    dispatch({
      type: "GET_SALES_GRAPH",
      payload: { getLast, getFourMonth } || [],
    });
  } catch (error) {
    console.log("Error");
  }
};

const getSales = (data, type) => {
  // console.log(sales_level);
  const getSalesData = data[`${type}`];
  // console.log(sales_level, "yayyayaayhelloo");
  // return;
  const graphData = {
    revenue: { label: [], data: [] },
    transaction: { label: [], data: [] },
  };
  const getRevenue = getSalesData.Revenue.map((v, i) => {
    const label = Object.keys(v)[0];
    graphData.revenue.label.push(label);
    graphData.revenue.data.push(v[`${label}`]);
  });

  const getTransaction = getSalesData.Transaction.map((v, i) => {
    const label = Object.keys(v)[0];
    graphData.transaction.label.push(label);
    graphData.transaction.data.push(v[`${label}`]);
  });

  return graphData;
};


export const getBottleDispenseByCompany = (payload) => async (dispatch) => {
  try {
    console.log("hi there logan");
    let { data } = await transaction.get({
      request: {
        method: "getBottlesDispensedByCompanyMachineIdDate",
        data: payload,
      },
    });
    console.log(data, "yoooooooooooooo!");
    dispatch({
      type: "GET_ALL_BOTTLE_DISPENSE_BY_COMPANY",
      payload: data?.response?.data || [],
    });
  } catch (error) {
    console.log("Error");
  }
};

