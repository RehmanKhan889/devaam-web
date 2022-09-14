import React, { useState, useEffect, useRef } from "react";
import { getAllMachines } from "../store/actions/machineActions";
import {
  getAllMetrics,
  getAllTransMetrics,
  getNotifications,
  getPlasticBottles,
  getDisposibleBottles,
} from "../store/actions/dashboardActions";
import { getAllLocations } from "../store/actions/locationsActions";
import ReactApexChart from "react-apexcharts";
import CompanyCard from "../components/CompanyCard";
import Notifications from "../components/Modals/Notifications";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import redIcon from "../assets/images/dawaam/redIcon.png";
import greenIcon from "../assets/images/dawaam/greenIcon.png";
import yellowIcon from "../assets/images/dawaam/yellowIcon.png";
import notificationBell from "../assets/images/dawaam/bell solo.png";
import systemUpdate from "../assets/images/dawaam/systemUpdate.png";
import users188 from "../assets/images/dawaam/users188.png";
import allUser from "../assets/images/dawaam/allUser.png";
import singleUser from "../assets/images/dawaam/singleUser.png";
import typicalOrder from "../assets/images/dawaam/typicalOrder.png";
import numberOrder from "../assets/images/dawaam/numberOrder.png";
import BarChart from "../helpers/Charts/BarChart";
import PieChart from "../helpers/Charts/PieChart";

function Index() {
  const refContainer = useRef(null);
  const [barChartTab, setBarChartTab] = useState("1");

  const { machines } = useSelector((state) => state.machine);
  const { metrics, transaction_metrics, notifications } = useSelector(
    (state) => state.metrics
  );
  const { locations } = useSelector((state) => state.location);
  const { user } = useSelector((state) => state.auth);
  const { plastic, disposibleBottle } = useSelector((state) => state.metrics);

  const [brands, setBrands] = useState([]);

  const [pieEnabled, setEnabled] = useState("Volume");

  const [pieDates, setPieDate] = useState({
    start_date: moment().format("YYYY-MM-DD"),
    end_date: moment().format("YYYY-MM-DD"),
  });

  const handleChange = async (e) => {
    console.log(e.target.value);

    await setPieDate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    dispatch(
      getAllMetrics({
        ...pieDates,
        company_code: user?.company_code,
      })
    );
    brandsegregate();
  };

  /* BRANDS CALCULATIONS */

  // const [showbrand, setShowbrand] = useState([]);
  // const [ratio, setRatio] = useState([]);

  const piChartoptions = {
    colors: ["#D5CFE1", "#09814A"],
    chart: {
      id: "mychart",
      width: 380,
      type: "pie",
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.5,
          // type: 'none',
        },
      },
    },
    labels: ["Brand 5", "Brand 6"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  const brandsegregate = () => {
    console.log("date selected...");
    // return;
    const brand = {
      labels: [],
      brandtotal: [],
    };
    // console.log(metrics, "okay");
    metrics.map((e) => {
      // console.log(e.brands[1], "brands");
      for (const key in e.brands) {
        const d = e.brands[`${key}`];
        // const fin =
        if (!brand.labels.includes(d.name)) {
          brand.labels.push(d.name);
        }

        if (brand.brandtotal[`${d.name}`] == undefined) {
          brand.brandtotal[`${d.name}`] = {
            // ...brand.brandtotal,
            total_revenue: d.total_revenue,
            total_transactions: d.total_transactions,
            total_volume: d.total_volume,
          };
        } else {
          brand.brandtotal[`${d.name}`].total_volume += d.total_volume;
          brand.brandtotal[`${d.name}`].total_revenue += d.total_revenue;
          brand.brandtotal[`${d.name}`].total_transactions +=
            d.total_transactions;
        }
        // });
      }
      // e.brands.map((d) => {
      // console.log(d, "each");
    });

    // console.log(brand);
    const brandData = {
      label: [],
      data: { total_transactions: [], total_volume: [], total_revenue: [] },
    };

    for (let key in brand.brandtotal) {
      // console.log(brand.brandtotal[key]);
      brandData.label.push(key);
      brandData.data.total_transactions.push(
        brand.brandtotal[key].total_transactions
      );
      brandData.data.total_volume.push(brand.brandtotal[key].total_volume);
      brandData.data.total_revenue.push(brand.brandtotal[key].total_revenue);
    }

    setPieChartData({
      ...options1,
      ...{ labels: brandData.label.length > 0 ? [...brandData.label] : [""] },
    });
    setSeries1(
      brandData.data.total_volume.length > 0 ? brandData.data.total_volume : [0]
    );
  };

  const getMonths = () => {
    return transaction_metrics?.Transaction?.map((item) => {
      let str = Object.keys(item)[0];
      let sub_Str = str[0].toUpperCase() + str.substring(1).toLowerCase();
      return sub_Str.substring(0, 3);
    });
  };
  const getRevenueTransaction = () => {
    let arrs = transaction_metrics?.Transaction?.map((item) => {
      let str = Object.keys(item)[0];
      return item[str];
    });

    let arrs2 = transaction_metrics?.Revenue?.map((item) => {
      let str = Object.keys(item)[0];
      return item[str];
    });

    let newarr = [];
    newarr.push({
      name: "Transaction",
      data: arrs,
    });
    newarr.push({
      name: "Revenue",
      data: arrs2,
    });
    return newarr;
  };

  const [myuser, setMyuser] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log("yayayayay");
    const {
      user: { company_code },
    } = JSON.parse(localStorage.getItem("auth"));
    console.log(localStorage.getItem("auth"));
    if (user) {
      setMyuser(company_code);
    }

    console.log(getTotal());
  }, []);

  const key = "updatable";
  const openNotification = async () => {
    document.getElementsByClassName("notify-pannel");
    const {
      response: {
        data: { notifications },
      },
    } = await onNotify();

    setItems(notifications);
    // notification({
    //   key,
    //   message: notifications[0].message,
    //   // description: notifications[0].message,
    // });

    // setTimeout(() => {
    //   notification.close({
    //     key,
    //     message: "New Title",
    //     description: "New description.",
    //   });
    // }, 1000);
  };

  const onNotify = () => {
    // step 1 get user info from local storage company_code;
    // step 2 pass company_code into api param.

    const data = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        request: {
          method: "getNotificationsByCompany",
          data: {
            company_code: myuser,
          },
        },
      }),
    };
    // console.log(e);
    const result = fetch(
      `https://davaam-life.herokuapp.com/notifications`,
      data
    )
      .then((response) => response.json(response))
      .catch((error) => console.log("error", error));
    console.log(result);
    return result;
  };

  const [stats, setStats] = useState([]);

  // useEffect(() => {

  // }, []);

  const getUserInfor = () => {
    const data = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        request: {
          method: "getMachineUsersByCompany",
          data: {
            company_code: 1234,
          },
        },
      }),
    };

    const result = fetch(
      `https://davaam-life.herokuapp.com/machines/user`,
      data
    )
      .then((response) => response.json(response))
      .then((data) => {
        const { machine_users } = data.response.data;
        console.log(machine_users);
        setStats(machine_users);
      })
      .catch((error) => console.log("error", error));
    console.log(result, "am i receieving response");

    return result;
  };


const [monthlyrec, SetMonthlyrec] =useState([]);  

  const geTransSummary = () => {
    const data = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        request: {
          method: "getUserTransactionsByYearlySumaryByCompany",
          data: {
            company_code: 1234,
          },
        },
      }),
    };

    const result = fetch(
      `https://davaam-life.herokuapp.com/user/transaction`,
      data
    )
      .then((response) => response.json(response))
      .then((data) => {
        const { last_week } = data.response.data;
        console.log(last_week);
        SetMonthlyrec(last_week);
      })
      .catch((error) => console.log("error", error));
    console.log(result, "am i receieving response");

    return result;
  };






  // const metCount = () => {
  //   const data = {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },

  //     body: JSON.stringify({
  //       request: {
  //         method: "getMetricsByCompanyDate",
  //         data: {
  //           company_code: metrics,
  //         },
  //       },
  //     }),
  //   };

  //   // console.log(e);
  //   const result = fetch(`https://davaam-life.herokuapp.com/metrics`, data)
  //     .then((response) => response.json(response))
  //     .catch((error) => console.log("error", error));
  //   console.log(result);
  //   return result;
  // };

  const [plbottle, setPlbottle] = useState([]);
  const [dispbottle, setDispbottle] = useState([]);

  const getDisposebottleData = () => {
    let totalbottle = 0;
    disposibleBottle.map((v, i) => {
      totalbottle += v.total_bottles;
    });
    return totalbottle;
  };

  const [data, SetData] = useState([]);
  const getTotal = () => {
    if (pieEnabled == "Volume") {
      let volume = 0;
      console.log(metrics);
      if (metrics.length > 0) {
        metrics.map((v) => {
          volume += Number(v.total_volume);
        });
        return volume;
      } else {
        return volume;
      }
    } else if (pieEnabled == "Transaction") {
      let transaction = 0;
      if (metrics.length > 0) {
        metrics.map((v) => {
          transaction += Number(v.total_transactions);
        });
        return transaction;
      } else {
        return transaction;
      }
    } else {
      let revenue = 0;
      if (metrics.length > 0) {
        metrics.map((v) => {
          revenue += Number(v.total_revenue);
        });
        return revenue;
      } else {
        return revenue;
      }
    }
  };

  const dispatch = useDispatch();

  const getCombinedData = (arg) => {
    let tempArr = [];
    metrics.map((brand) => {
      if (Object.keys(brand.brands).length > 0) {
        let brandKeys = Object.keys(brand.brands);
        Object.values(brand.brands).forEach((brnd, idx) => {
          let obj = tempArr.find(
            (br) => br.key.toString() == brandKeys[idx].toString()
          );
          if (arg == "Volume") {
            if (obj) {
              let temp = tempArr.indexOf(obj);

              tempArr[temp] = {
                ...tempArr[temp],
                key: brandKeys[idx],
                volume: Number(brnd.total_volume) + Number(obj.volume),
              };
            } else {
              tempArr.push({
                key: brandKeys[idx],
                volume: brnd.total_volume,
                brand: `Brand ${idx + 1}`,
              });
            }
          } else if (arg == "Transaction") {
            if (obj) {
              let temp = tempArr.indexOf(obj);

              tempArr[temp] = {
                ...tempArr[temp],
                key: brandKeys[idx],
                volume: Number(brnd.total_transactions) + Number(obj.volume),
              };
            } else {
              tempArr.push({
                key: brandKeys[idx],
                volume: brnd.total_transactions,
                brand: `Brand ${idx + 1}`,
              });
            }
          } else {
            if (obj) {
              let temp = tempArr.indexOf(obj);

              tempArr[temp] = {
                ...tempArr[temp],
                key: brandKeys[idx],
                volume: Number(brnd.total_revenue) + Number(obj.volume),
              };
            } else {
              tempArr.push({
                key: brandKeys[idx],
                volume: brnd.total_revenue,
                brand: `Brand ${idx + 1}`,
              });
            }
          }
        });
      }
      //
    });

    return tempArr;
  };
  useEffect(() => {
    dispatch(
      getAllMachines({
        company_code: user?.company_code,
      })
    );
    dispatch(
      getAllMetrics({
        ...pieDates,
        company_code: user?.company_code,
      })
      // brandsegregate()
    );
    dispatch(getAllLocations(user?.company_code));
    dispatch(
      getAllTransMetrics({
        company_code: user?.company_code,
      })
    );
    dispatch(getPlasticBottles({ company_code: user?.company_code }));
    dispatch(getDisposibleBottles({ company_code: user?.company_code }));
    brandsegregate();
    getUserInfor();
    geTransSummary();
    // disposebaleBottle();
    // plasticBottle();
  }, []);
  // useEffect(() => {
  //   let tempArr = getCombinedData(pieEnabled);
  //   console.log(tempArr);
  //   // // tempArr.map(temp => {
  //   setTimeout(() => {
  //     setSeries1(tempArr.map((item) => item.volume));
  //     setPieChartData({
  //       ...options1,
  //       labels: tempArr.map((item) => item.brand),
  //     });
  //   }, 1500);
  // }, [metrics, pieEnabled]);

  // useEffect(() => {
  //   setSeries(getRevenueTransaction());
  //   setTimeout(() => {
  //     setOptions({
  //       ...options,
  //       xaxis: {
  //         categories: getMonths(),
  //       },
  //     });
  //   }, 1500);
  // }, [transaction_metrics]);
  const [options1, setPieChartData] = useState(piChartoptions);
  const [series1, setSeries1] = useState([20, 40]);

  // BarChart DATA
  const [options3, setOptions3] = useState({
    colors: ["#D5CFE1", "#09814A"],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.5,
          // type: 'none',
        },
      },
    },
    xaxis: {
      categories: [
        // "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        // "Jul",
        // "Aug",
        // "Sep",
        // "Oct",
      ],
    },
    yaxis: {
      title: {
        // text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        // formatter: function (val) {
        // 	return '$ ' + val + ' thousands';
        // },
      },
    },
  });
  const [series3, setSeries3] = useState([
    {
      name: "Transaction",
      data: [44, 55, 57, 56],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98],
    },
  ]);

  const [options2, setOptions2] = useState({
    colors: ["#D5CFE1", "#09814A"],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.5,
          // type: 'none',
        },
      },
    },
    xaxis: {
      categories: ["Week1", "Week2", "Week3", "Week4"],
    },
    yaxis: {
      title: {
        // text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        // formatter: function (val) {
        // 	return '$ ' + val + ' thousands';
        // },
      },
    },
  });
  const [series2, setSeries2] = useState([
    {
      name: "Transaction",
      data: [44, 55, 57, 56],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98],
    },
  ]);

  const [optionsBar1, setOptionsBar1] = useState({
    colors: ["#D5CFE1", "#09814A"],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.5,
          // type: 'none',
        },
      },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yaxis: {
      title: {
        // text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        // formatter: function (val) {
        // 	return '$ ' + val + ' thousands';
        // },
      },
    },
  });
  const [seriesBar1, setSeriesBar1] = useState([
    {
      name: "Transaction",
      data: [44, 55, 57, 56, 42, 21, 32],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 31, 23, 42],
    },
  ]);
  return (
    <div className="main-content">
      <div className="page-wrapper">
        <div className="container dashboard-body">
          <div className="row p-md-4">
            <div className="col-lg-4 col-md-12 mt-2 mt-md-0 mb-3 mb-md-0">
              <div className="firstcard">
                <div className="card-body">
                  <ul
                    className="nav nav-pills "
                    id="pills-tab"
                    role="tablist"
                    style={{
                      justifyContent: "center",
                    }}
                  >
                    <li className="nav-item m-1">
                      <a
                        onClick={() => setBarChartTab("1")}
                        style={{ color: "#1d2023 " }}
                        className="nav-link active"
                        id="pills-daily-tab"
                        data-toggle="pill"
                        href="#pills-daily"
                        role="tab"
                        aria-controls="pills-daily"
                        aria-selected="true"
                      >
                        Daily
                      </a>
                    </li>
                    {/* <li className="nav-item m-1">
                      <a
                        onClick={() => setBarChartTab("2")}
                        className="nav-link"
                        id="pills-weekly-tab"
                        data-toggle="pill"
                        href="#pills-weekly"
                        role="tab"
                        aria-controls="pills-weekly"
                        aria-selected="false"
                        style={{ color: "#1d2023 " }}
                      >
                        Weekly
                      </a>
                    </li> */}
                    <li className="nav-item m-1">
                      <a
                        onClick={() => setBarChartTab("3")}
                        className="nav-link"
                        id="pills-montly-tab"
                        data-toggle="pill"
                        href="#pills-montly"
                        role="tab"
                        aria-controls="pills-montly"
                        aria-selected="false"
                        style={{ color: "#1d2023 " }}
                      >
                        Montly
                      </a>
                    </li>
                  </ul>
                  <br />
                  <div className="d-md-flex align-items-baseline">
                    <div>
                      <h6 className="card-subtitle">Revenue</h6>
                    </div>
                    {/* <div className="ms-auto no-block align-items-center">
                      <input
                        type="date"
                        value={moment().format("YYYY-MM-DD")}
                        className="__input"
                      />
                    </div> */}
                  </div>
                  <div className="amp-pxl mt-4">
                    <div id="chart">
                      <BarChart
                        options1={optionsBar1}
                        series1={seriesBar1}
                        options2={options2}
                        series2={series2}
                        options3={options3}
                        series3={series3}
                        tab={barChartTab}
                      />
                    </div>
                    {/* <div className='chartist-tooltip'></div> */}
                  </div>

                  <div className="row">
                    <div className="col-md-8 offset-md-2 m-auto">
                      <h4 style={{ fontFamily: "Open Sans" }}>Total Revenue</h4>
                      <h3>
                        {getCombinedData("Revenue")
                          .map((item) => item.volume)
                          .toString()}
                        {getCombinedData("Revenue")
                          .map((item) => item.volume)
                          .toString() == ""
                          ? "0"
                          : ""}{" "}
                        Pkr
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>
            <div className="col-lg-4 col-md-12 mb-3 mb-md-0">
              <div className="secondcard">
                <div
                  id="secondcard"
                  className="card-body"
                  style={{
                    height: "70%",
                  }}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row" style={{ alignItems: "center" }}>
                        <div
                          style={{ color: "#1d2023 " }}
                          className="col-md-12"
                        >
                          <span className="to_from">To</span>
                        </div>
                        <div className="col-md-12">
                          <input
                            type="date"
                            name="start_date"
                            value={pieDates.start_date}
                            onChange={(e) => handleChange(e)}
                            className="__input"
                            style={{
                              background: "#5ab9a2",
                              padding: " 7px",
                              color: "#fff",
                              fontSize: "14px",
                              borderRadius: "12px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" style={{ color: "#1d2023 " }}>
                      <div className="row" style={{ alignItems: "center" }}>
                        <div className="col-md-12">
                          <span className="to_from">From</span>
                        </div>
                        <div className="col-md-12">
                          <input
                            type="date"
                            name="end_date"
                            value={pieDates.end_date}
                            onChange={(e) => handleChange(e)}
                            className="__input"
                            style={{
                              background: "#5ab9a2",
                              padding: " 7px",
                              color: "#fff",
                              fontSize: "14px",
                              borderRadius: "12px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                  <h4
                    style={{ fontFamily: "Open Sans" }}
                    className="card-title"
                  >
                    Total {pieEnabled} Dispensed
                  </h4>
                  <h6 className="card-subtitle">{getTotal()}</h6>
                  <br />
                  <div id="chart" className="d-flex justify-content-center">
                    <PieChart
                      options1={options1}
                      series1={series1}
                      pieEnabled={pieEnabled}
                    ></PieChart>
                    {/* PIE ENABLED tells which unit is enabled */}
                  </div>
                  <div className="row g-0">
                    <div className="col-4 ">
                      <button
                        type="button"
                        onClick={() => {
                          setEnabled("Volume");
                        }}
                        className="btn btn-success btn-sm"
                      >
                        Volume
                      </button>
                    </div>
                    <div className="col-4 ">
                      <button
                        type="button"
                        onClick={() => {
                          setEnabled("Transaction");
                        }}
                        className="btn btn-success btn-sm"
                      >
                        Transaction
                      </button>
                    </div>
                    <div className="col-4 ">
                      <button
                        type="button"
                        onClick={() => {
                          setEnabled("Revenue");
                        }}
                        className="btn btn-success btn-sm"
                      >
                        Revenue
                      </button>
                    </div>
                  </div>

                  {/* <div className='row'>
										<div className='col-12'>
										<Button onClick={() => {
												setEnabled('Volume');
											}} color='success' > Volume </Button>
										<Button conClick={() => {
												setEnabled('Transaction');
											}} color='success' className='ml-2 mr-2' > Transaction </Button>
										<Button onClick={() => {
												setEnabled('Revenue');
											}} color='success'>Revenue </Button>
										</div>
									</div> */}
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />

              {/* <div id="locationCard">
                <img
                  src={require("../assets/images/dawaam/machine_white.png")}
                  alt=""
                />
                <span>
                  <p>Total Active Machines</p>
                  <h4>{machines.length}</h4>
                </span>
              </div> */}
              <br />
            </div>
            <div className="col-lg-4 col-md-12">
              <CompanyCard notifications={notifications} />
              <div className="unseenNotification">
                <div className="card-body">
                  <div className=" align-items-center">
                    <div>
                      <h6 className="card-title">
                        Recent notifications & alerts
                      </h6>
                      {/* <a path="/companies" className="btn btn-danger">
                        {" "}
                        Back{" "}
                      </a> */}
                      <a href="locations.html">
                        <p className="card-subtitle">
                          Click on the bell icon to view all notifications
                        </p>
                      </a>
                    </div>
                    <div class="clicker" tabindex="1">
                      <div id="unseenNotification">
                        <ul className="d-flex">
                          <li>
                            <div id="bellhead">
                              {/* {items &&
                              items.map((item) => (
                                <> */}
                              <img
                                // onMouseOver={onNotify}
                                onClick={openNotification}
                                src={notificationBell}
                                className="img-fluid"
                                alt="bell"
                                // description={item.myuser}
                              />
                              {/* </>
                              ))} */}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="hiddendiv">
                      <div id="recentAlerts">
                        <ul className="d-flex">
                          <li>
                            <div id="bellhead">
                              {/* <img
                              src={greenIcon}
                              className="img-fluid"
                              alt="bell"
                              text="new notifications"
                            /> */}
                            </div>
                          </li>
                          <li>
                            {items &&
                              items.map((item, i) => (
                                <div key={i}>
                                  {/* <h5>{item.brand_name}</h5> */}

                                  <p>{item.message}</p>
                                </div>
                              ))}
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <div id="recentAlerts">
                      <ul className="d-flex">
                        <li>
                          <div id="bellhead">
                            <img
                              src={greenIcon}
                              className="img-fluid"
                              alt="bell"
                            />
                          </div>
                        </li>
                        <li>
                          <p style={{ fontSize: "15px" }}>
                            Recent notification 1
                          </p>
                        </li>
                      </ul>
                      <ul className="d-flex">
                        <li>
                          <div id="bellhead">
                            <img
                              src={redIcon}
                              className="img-fluid"
                              alt="bell"
                            />
                          </div>
                        </li>
                        <li>
                          <p style={{ fontSize: "15px" }}>Recent alerts 1</p>
                        </li>
                      </ul>
                      <ul className="d-flex">
                        <li>
                          <div id="bellhead">
                            <img
                              src={yellowIcon}
                              className="img-fluid"
                              alt="bell"
                            />
                          </div>
                        </li>
                        <li>
                          <p style={{ fontSize: "15px" }}>Recent warning 1</p>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
              <br /> <br />
              {/* <br />
              <br /> <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br /> */}
              <br />
            </div>
          </div>
          {/* <br />
          <br /> */}
          <div className="row ">
            <div className="col-lg-8 col-md-12 ">
              <div className="row">
                <div className="col-lg-4 mt-3 mt-md-2 text-center">
                  <div id="bottlescards" className="card">
                    <div className="card-body ">
                      <h4 className="card-title  d-flex align-items-center justify-content-center flex-column">
                        {/* <img
                      src={require("../assets/images/dawaam/botlled.png")}
                      alt=""
                    /> */}
                        <div className="cardsDashboard mb-3">
                          <i
                            style={{
                              color: "#079a87",
                              fontSize: "60px",
                            }}
                            className="fas fa-recycle fa-4x"
                          ></i>{" "}
                        </div>
                        <h6 className="bottles">Plastics Saved </h6>
                        <a href="#" className="" target="_blank">
                          {plastic}
                          <span className="text-danger">*</span>
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4  mt-3 mt-md-2 text-center">
                  <div
                    id="bottlescards"
                    // style={{ marginTop: "10px" }}
                    className="card"
                  >
                    <div className="card-body text-center">
                      <h4 className=" card-title  d-flex align-items-center justify-content-center flex-column">
                        {/* <img
                        src={require("../assets/images/dawaam/machineCircle.png")}
                        alt=""
                        width="97"
                        height="121"
                        style={{ borderRadius: "50%" }}
                      /> */}
                        <div className="cardsDashboard mb-3">
                          {" "}
                          <i
                            style={{
                              color: "#079a87",
                              fontSize: "60px",
                            }}
                            className="fas fa-hdd fa-x"
                          ></i>{" "}
                        </div>
                        <h6 className="bottles">Total Active Machines </h6>
                        <a href="#" className="" target="_blank">
                          {machines.length}
                          <span className="text-danger">*</span>
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              d
              <div className="row">
                <div className="col-lg-4  mt-3 mt-md-2 text-center ">
                  <div
                    id="bottlescards"
                    className="card"
                    // style={{ marginTop: "10px" }}
                  >
                    <div className="card-body text-center">
                      <h4 className="card-title  d-flex align-items-center justify-content-center flex-column mb-1">
                        {/* <img
                      src={require("../assets/images/dawaam/location.png")}
                      alt=""
                      width="97"
                      height="121"
                    /> */}
                        <div className="cardsDashboard mb-3">
                          {" "}
                          <i
                            style={{
                              color: "#079a87",
                              fontSize: "60px",
                            }}
                            className="fas fa-map-marker-alt fa-4x"
                          ></i>{" "}
                        </div>
                        <h6 className="bottles">Total Active Locations </h6>
                        <a href="#" className="" target="_blank">
                          {getAllLocations.length}

                          <span className="text-danger">*</span>
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4  mt-3 mt-md-2 text-center ">
                  <div
                    id="bottlescards"
                    className="card"
                    // style={{ marginTop: "10px" }}
                  >
                    <div className="card-body text-center">
                      <h4 className="card-title  d-flex align-items-center justify-content-center flex-column mb-1">
                        {/* <img
                      src={require("../assets/images/dawaam/location.png")}
                      alt=""
                      width="97"
                      height="121"
                    /> */}
                        <div className="cardsDashboard mb-3">
                          {" "}
                          <i
                            style={{
                              color: "#079a87",
                              fontSize: "60px",
                            }}
                            className="fas fa-map-marker-alt fa-4x"
                          ></i>{" "}
                        </div>
                        <h6 className="bottles">Bottles Dispensed </h6>
                        <a href="/" className="similar" target="_blank">
                          {
                            <dispbottle className="length">
                              {" "}
                              {getDisposebottleData()}{" "}
                            </dispbottle>
                          }

                          <span className="text-danger">*</span>
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="row">
                <div className="col-md-12 mt-3 mt-md-2">
                  <div className="unseenNotification">
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <h4 className="card-title pt-3">User Statistics</h4>
                        <ul
                          className="nav nav-pills "
                          id="pills-tab"
                          role="tablist"
                          style={{
                            justifyContent: "center",
                          }}
                        >
                          {/* <li class="nav-item m-1">
                            <a
                              class="nav-link active"
                              id="pills-sales-tab"
                              data-toggle="pill"
                              href="#pills-sales"
                              role="tab"
                              aria-controls="pills-sales"
                              aria-selected="true"
                            >
                              New Users
                            </a>
                          </li>
                          <li class="nav-item m-1">
                            <a
                              class="nav-link"
                              id="pills-Usage-tab"
                              data-toggle="pill"
                              href="#pills-Usage"
                              role="tab"
                              aria-controls="pills-Usage"
                              aria-selected="false"
                              style={{ color: "#1d2023" }}
                            >
                              Repeat Users
                            </a>
                          </li> */}
                        </ul>
                        {/* <div class="tab-content" id="pills-tabContent">
										<div class="tab-pane fade show active" id="pills-sales" role="tabpanel" aria-labelledby="pills-sales-tab">
											<p className='pt-5'>Sales</p>
										</div>
										<div class="tab-pane fade" id="pills-Usage" role="tabpanel" aria-labelledby="pills-Usage-tab">
											<p className='pt-5'>Usage</p>
										</div>
									</div> */}
                      </div>
                    </div>

                    <div className="row ">
                      <div className="card-body p-0 m-2">
                        <div className=" align-items-center">
                          <div className="row">
                            <div className="col-md-12">
                              <div
                                className="row m-2"
                                style={{ alignItems: "baseline" }}
                              >
                                {/* <div className="col-md-8">
                                  <div className="dateDeployed">
                                    <ul
                                      className="d-flex p-0"
                                      style={{
                                        alignItems: "center",
                                      }}
                                    >
                                      <li
                                        className="pr-2"
                                        style={{
                                          listStyle: "none",
                                          color: "#1d2023 ",
                                        }}
                                      >
                                        <p className="bold">
                                          Current: May, 2022
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </div> */}
                                {/* <div className="col-md-4">
                                  <div className="dateDeployed">
                                    <ul
                                      className="d-flex p-0"
                                      style={{
                                        background: "#5ab9a2",
                                        width: "fit-content",
                                        margin: "auto",
                                        position: "relative",
                                      }}
                                    >
                                      <li
                                        className="pr-2"
                                        style={{
                                          listStyle: "none",
                                          padding: "5px",
                                          color: "#fff",
                                        }}
                                      >
                                        <i
                                          class="fa fa-pencil"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li
                                        className="pr-2"
                                        style={{
                                          listStyle: "none",
                                          padding: "5px",
                                          color: "#fff",
                                        }}
                                      >
                                          <i
                                          class="fa fa-calendar-o"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                    </ul>
                                  </div>
                                </div> */}
                              </div>
                            </div>
                          </div>
                          {stats &&
                            stats.map((value, i) => (
                              <div key={i} id="userStatistics">
                                <div
                                  className="row"
                                  style={{
                                    alignItems: "center",
                                  }}
                                >
                                  <div className="col">
                                    <ul>
                                      <li>
                                        <img
                                          src={users188}
                                          className=""
                                          alt=""
                                        />
                                      </li>
                                      <li>
                                        <p>
                                          <strong>User ID</strong>
                                          <br />
                                          {value.user_id}
                                        </p>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col">
                                    <ul>
                                      <li>
                                        <p>{value.mobile_number}</p>
                                      </li>
                                      <li>
                                        <p>{value.created_at_sql}</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ))}
                          {/* <div id="userStatistics">
                            <div
                              className="row"
                              style={{
                                alignItems: "center",
                              }}
                            >
                              <div className="col">
                                <ul>
                                  <li>
                                    <img src={users188} className="" alt="" />
                                  </li>
                                  <li>
                                    <p>
                                      <strong>Name</strong>
                                      <br />
                                      Unique ID
                                    </p>
                                  </li>
                                </ul>
                              </div>
                              <div className="col">
                                <ul>
                                  <li>
                                    <p>Joined:</p>{" "}
                                  </li>
                                  <li>
                                    <p>12 May, 2022 11:12 am</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div> */}
                          {/* <div id="userStatistics">
                            <div
                              className="row"
                              style={{
                                alignItems: "center",
                              }}
                            >
                              <div className="col">
                                <ul>
                                  <li>
                                    <img src={users188} className="" alt="" />
                                  </li>
                                  <li>
                                    <p>
                                      <strong>Name</strong>
                                      <br />
                                      Unique ID
                                    </p>
                                  </li>
                                </ul>
                              </div>
                              <div className="col">
                                <ul>
                                  <li>
                                    <p>Joined:</p>{" "}
                                  </li>
                                  <li>
                                    <p>12 May, 2022 11:12 am</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* <div className="row">
            
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Index;
