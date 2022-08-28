import React, { useState, useEffect } from "react";

import CompanyCard from "../components/CompanyCard";
import Notifications from "../components/Modals/Notifications";
import Details from "../components/Details";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { getMetricsByMachine } from "../store/actions/dashboardActions";
import { useDispatch, useSelector } from "react-redux";
import ReactApexChart from "react-apexcharts";
import { getCombinedData } from "../helpers/getCombinedData";
import Barcode from "../assets/images/dawaam/barcode.png";
import SerialNO from "../assets/images/dawaam/binary-code 1.png";
import MachineType from "../assets/images/dawaam/machine -type.png";
import MotorType from "../assets/images/dawaam/motor-type.png";
import Nozzles from "../assets/images/dawaam/Nozzles.png";
import ITSystem from "../assets/images/dawaam/ITSystem.png";
import calendarsvgrepo from "../assets/images/dawaam/calendar-svgrepo-com 1.png";
import batteryIcon from "../assets/images/dawaam/battery.png";
import Replenished from "../assets/images/dawaam/Replenished.png";
import StockLeft from "../assets/images/dawaam/StockLeft.png";
import Tank1 from "../assets/images/dawaam/Tank1.png";
import Tank2 from "../assets/images/dawaam/Tank2.png";
import Tank3 from "../assets/images/dawaam/Tank3.png";
import Tank4 from "../assets/images/dawaam/Tank4.png";
import systemUpdate from "../assets/images/dawaam/systemUpdate.png";
import machineCircle from "../assets/images/dawaam/machineCircle.png";
import moment from "moment";

import tankGroup from "../assets/images/dawaam/tankGroup.png";
import technicalSupport from "../assets/images/dawaam/technical-support.png";
import bucket from "../assets/images/dawaam/bucket.png";
import toolBox from "../assets/images/dawaam/tool-box.png";
import clock from "../assets/images/dawaam/clock.png";
import numberOrder from "../assets/images/dawaam/numberOrder.png";
import typicalOrder from "../assets/images/dawaam/typicalOrder.png";
import singleUser from "../assets/images/dawaam/singleUser.png";
import allUser from "../assets/images/dawaam/allUser.png";
import users188 from "../assets/images/dawaam/users188.png";
import LocationTabDetails from "../components/LocationTabDetails";
// import { useSearchParams } from 'react-router-dom';
import BarChart from "../helpers/Charts/BarChart";
import DetailsLocationsSubPage from "../components/DetailsLocationsSubPage";

function LocationsSubPage() {
  const [notiModal, setNotiModal] = useState(false);
  const [tab, setTab] = useState("1");
  const dispatch = useDispatch();
  const [series1, setSeries1] = useState([60, 40]);
  const [pieEnabled, setEnabled] = useState("Volume");
  const { single_machine_metrics } = useSelector((state) => state.metrics);

  const [options1, setPieChartData] = useState({
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
  });
  console.log(window.location.pathname);

  const params = useParams();
  console.log(window.location.search);
  const flag = window.location.search.split("=")[1];
  console.log(flag);

  const notiToggle = () => {
    setNotiModal(!notiModal);
    // console.log("asd", props.history);
  };
  // useEffect(() => {
  //     dispatch(getMetricsByMachine({ machine_id: params?.id }));
  // }, []);

  // useEffect(() => {
  //     let tempArr = getCombinedData(single_machine_metrics, pieEnabled);
  //     console.log(tempArr);
  //     // // tempArr.map(temp => {
  //     setTimeout(() => {
  //         setSeries1(tempArr.map((item) => item.volume));
  //         setPieChartData({
  //             ...options1,
  //             labels: tempArr.map((item) => item.brand),
  //         });
  //     }, 1500);
  // }, [single_machine_metrics, pieEnabled]);
  // useEffect(() => {
  //     if (flag) {
  //         setTab("3")
  //     }
  // }, [flag])
  const [options3, setOptions3] = useState({
    colors: ["#D5CFE1", "#09814A"],
    chart: {
      type: "bar",
      height: 350,
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
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.5,
          // type: 'none',
        },
      },
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
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.5,
          // type: 'none',
        },
      },
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
  // console.log("=>", params?.id);
  return (
    <div className="main-content">
      <div className="page-wrapper">
        <div className="container ">
          {/* <div className="row justify-content-end">
            <div className="row pt-4">
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <CompanyCard />
              </div>
            </div>
          </div> */}
          <div className="tab-content" id="v-pills-tabContent">
            {/* {tab == "1" && ( */}
            <div
              className="tab-pane fade show active"
              id="machine"
              role="tabpanel"
              aria-labelledby="machine-tab"
            >
              <div className="row py-5">
                <div className="col-lg-12 ">
                  <div className="flex-col align-items-start mb-5">
                    <div
                      className="nav flex-row  justify-content-center nav-pills m-md-3 m-2 mt-3"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <Button
                        className={`nav-link ${tab == "1" ? "btn-active" : ""}`}
                        onClick={() => setTab("1")}
                      >
                        Machine
                      </Button>
                      <Button
                        className={`nav-link ${tab == "2" ? "btn-active" : ""}`}
                        onClick={() => setTab("2")}
                      >
                        Sales & Usage
                      </Button>
                    </div>
                  </div>
                  <div className="secondcard">
                    <div id="secondcard" className="card-body">
                      {tab == "1" && <LocationTabDetails />}
                      {tab == "2" && (
                        <div
                          className="tab-pane fade show active"
                          id="sales-usage"
                          role="tabpanel"
                          aria-labelledby="sales-usage-tab"
                        >
                          <div className="row justify-content-center">
                            <div className="col-lg-10 pt-5">
                              <div className="secondcard">
                                <div id="secondcard" className="card-body">
                                  {/* <Details /> */}
                                  <DetailsLocationsSubPage />
                                  <div className="row">
                                    <div className="col-md-6 offset-md-3 text-center">
                                      <ul
                                        class="nav nav-pills "
                                        id="pills-tab"
                                        role="tablist"
                                        style={{
                                          justifyContent: "center",
                                        }}
                                      >
                                        <li class="nav-item m-1">
                                          <a
                                            class="nav-link active"
                                            id="pills-sales-tab"
                                            data-toggle="pill"
                                            href="#pills-sales"
                                            role="tab"
                                            aria-controls="pills-sales"
                                            aria-selected="true"
                                          >
                                            Sales
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
                                          >
                                            Usage
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div
                                        class="tab-content"
                                        id="pills-tabContent"
                                      >
                                        <div
                                          class="tab-pane fade show active"
                                          id="pills-sales"
                                          role="tabpanel"
                                          aria-labelledby="pills-sales-tab"
                                        >
                                          <div className="row pt-5">
                                            <div className="col-lg-6 col-md-12 pt-5">
                                              {/* <div>
                                        <h6 className='card-subtitle'>
                                          Revenue
                                        </h6>
                                      </div> */}
                                              {flag && (
                                                <Row className="justify-content-end">
                                                  <Col md="6" xs="6">
                                                    <FormGroup className="text-left">
                                                      <Label>From</Label>
                                                      <Input
                                                        type="date"
                                                        xs="6"
                                                      />
                                                    </FormGroup>
                                                  </Col>
                                                  <Col md="6">
                                                    <FormGroup className="text-left">
                                                      <Label>To</Label>
                                                      <Input type="date" />
                                                    </FormGroup>
                                                  </Col>
                                                </Row>
                                              )}

                                              <div
                                                className="amp-pxl mt-4"
                                                style={{
                                                  height: "350px",
                                                }}
                                              >
                                                <BarChart
                                                  options1={optionsBar1}
                                                  series1={seriesBar1}
                                                  options2={options2}
                                                  series2={series2}
                                                  options3={options3}
                                                  series3={series3}
                                                  tab={"2"}
                                                ></BarChart>
                                                <div className="chartist-tooltip"></div>
                                              </div>
                                              <div className="row">
                                                <div
                                                  className="col-lg-6 col-md-12"
                                                  style={{ margin: "auto" }}
                                                >
                                                  <p>Total Transactions</p>
                                                  <h3>
                                                    {getCombinedData(
                                                      single_machine_metrics,
                                                      "Transaction"
                                                    )
                                                      .map(
                                                        (item) => item.volume
                                                      )
                                                      .toString()}{" "}
                                                    {getCombinedData(
                                                      single_machine_metrics,
                                                      "Transaction"
                                                    )
                                                      .map(
                                                        (item) => item.volume
                                                      )
                                                      .toString() == ""
                                                      ? "0"
                                                      : ""}
                                                    Pkr
                                                  </h3>
                                                  {/* <p>
                                          <span>
                                            <img
                                              src={require("../assets/images/dawaam/arrow-up.png")}
                                              alt=""
                                            />
                                          </span>{" "}
                                          7,00%
                                        </p> */}
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 pt-5 align-items-center justify-items-center">
                                              <h4 className="card-title">
                                                Sales percentage
                                              </h4>
                                              <p className="card-text">
                                                Breakdown of sales percentage by
                                                product
                                              </p>

                                              <br />
                                              <div
                                                className="d-flex justify-content-center"
                                                id=""
                                              >
                                                <ReactApexChart
                                                  options={options1}
                                                  series={series1}
                                                  type="pie"
                                                  width={320}
                                                />
                                              </div>
                                              {/* <div
                                      id="chartContainer"
                                      style={{
                                        height: "370px",
                                        width: "auto",
                                      }}
                                    ></div> */}
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="tab-pane fade"
                                          id="pills-Usage"
                                          role="tabpanel"
                                          aria-labelledby="pills-Usage-tab"
                                        >
                                          <div className="row pt-5 justify-content-center">
                                            <div className="col-lg-3">
                                              <p>
                                                Enter customer mobile number
                                                <br /> to see specific details
                                              </p>
                                              <input
                                                type="text"
                                                name=""
                                                placeholder="****-*******"
                                                id="phoneinput"
                                              />
                                              <br /> <br />
                                              <a
                                                href="/machines"
                                                className="btn btn-danger"
                                              >
                                                {" "}
                                                Process
                                              </a>
                                            </div>
                                            <div className="col-lg-1" />
                                            <div className="col-lg-3">
                                              <div id="usageSec">
                                                <div class="card">
                                                  <div className="cardContent">
                                                    <img
                                                      class="card-img-top"
                                                      src={typicalOrder}
                                                      alt="Card image cap"
                                                    />
                                                  </div>
                                                  <div
                                                    className="tank1Content"
                                                    style={{
                                                      background: "#CFF2EE",
                                                      boxShadow:
                                                        "0px 4px 8px rgba(0, 0, 0, 0.12)",
                                                    }}
                                                  >
                                                    <h5 class="card-title">
                                                      Typical Order Sizes
                                                    </h5>
                                                  </div>
                                                  <div class="card-body">
                                                    <img
                                                      class="pb-2"
                                                      src={allUser}
                                                      alt="Card image cap"
                                                    />
                                                    <br />
                                                    <br />
                                                    <p class="card-text">
                                                      All users combined:
                                                    </p>
                                                    <span className="m-0">
                                                      <b className="p-0">
                                                        20,000 ML
                                                      </b>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-lg-3">
                                              <div id="usageSec1">
                                                <div class="card">
                                                  <div className="cardContent">
                                                    <img
                                                      class="card-img-top"
                                                      src={numberOrder}
                                                      alt="Card image cap"
                                                    />
                                                  </div>
                                                  <div
                                                    className="tank1Content"
                                                    style={{
                                                      background: "#CFF2EE",
                                                      boxShadow:
                                                        "0px 4px 8px rgba(0, 0, 0, 0.12)",
                                                    }}
                                                  >
                                                    <h5 class="card-title">
                                                      Number of Orders
                                                    </h5>
                                                  </div>
                                                  <div class="card-body">
                                                    <img
                                                      class="pb-2"
                                                      src={allUser}
                                                      alt="Card image cap"
                                                    />
                                                    <br />
                                                    <br />
                                                    <p class="card-text">
                                                      All users combined:
                                                    </p>
                                                    <span className="m-0">
                                                      <b className="p-0">
                                                        #number of orders
                                                      </b>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <br />
                                          <br />
                                          <div className="row pt-5">
                                            <div className="col-lg-5"> </div>
                                            <div className="col-lg-3">
                                              <div id="usageSec">
                                                <div class="card">
                                                  <div class="card-body">
                                                    <img
                                                      class="pb-2"
                                                      src={singleUser}
                                                      alt="Card image cap"
                                                    />
                                                    <br />
                                                    <br />
                                                    <p class="card-text">
                                                      All users combined:
                                                    </p>
                                                    <span className="m-0">
                                                      <b className="p-0">
                                                        20,000 ML
                                                      </b>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-lg-3 ">
                                              <div id="usageSec">
                                                <div class="card">
                                                  <div class="card-body">
                                                    <img
                                                      class="pb-2"
                                                      src={singleUser}
                                                      alt="Card image cap"
                                                    />
                                                    <br />
                                                    <br />
                                                    <p class="card-text">
                                                      All users combined:
                                                    </p>
                                                    <span className="m-0">
                                                      <b className="p-0">
                                                        20,000 ML
                                                      </b>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          {/* <div className="row pt-5">
                                  <div className="col-lg-3 "></div>
                                  <div className="col-md-6">
                                    <div className="row align-items-center g-0">
                                      <div className="col-md-8 offset-md-2">
                                        <div className="row">
                                          <div className="col-12">
                                            <a
                                              href="#"
                                              className="btn w-100 btn-normal"
                                              style={{
                                                borderRadius: "5px 5px 0px 0px",
                                              }}
                                            >
                                              Typical order size
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="row">
                                          <div className="col-12">
                                            <div
                                              id="displayed2"
                                              style={{
                                                borderRadius: "5px 5px 5px 5px",
                                              }}
                                            >
                                              <p>#123456</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-4 offset-md-4">
                                        <div className="row">
                                          <div className="col-md-12">
                                            <a
                                              href="#"
                                              className="btn w-100 btn-normal"
                                              style={{
                                                borderRadius: "0px 0px 5px 5px",
                                              }}
                                            >
                                              Overall{" "}
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row pt-5 align-items-center g-0">
                                      <div className="col-md-8 offset-md-2">
                                        <div className="row">
                                          <div className="col-12">
                                            <a
                                              href="#"
                                              className="btn w-100 btn-normal"
                                              style={{
                                                borderRadius: "5px 5px 0px 0px",
                                              }}
                                            >
                                              Number of orders by customer{" "}
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="row">
                                          <div className="col-12">
                                            <div
                                              id="displayed2"
                                              style={{
                                                borderRadius: "5px 5px 5px 5px",
                                              }}
                                            >
                                              <p>#123456</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-4 offset-md-4">
                                        <div className="row">
                                          <div className="col-md-12">
                                            <a
                                              href="#"
                                              className="btn w-100 btn-normal"
                                              style={{
                                                borderRadius: "0px 0px 5px 5px",
                                              }}
                                            >
                                              Overall{" "}
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 "></div>
                                </div> */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <Notifications notiModal={notiModal} notiToggle={notiToggle} /> */}
        </div>
      </div>
    </div>
  );
}

export default LocationsSubPage;
