import React, { useState } from "react";
import CompanyCard from "../components/CompanyCard";
import CustomerHeader from "../components/CustomerHeader";
import { Button, Card } from "reactstrap";
import PercentageHeader from "../components/PercentageHeader";

const Customers = () => {
  const [tab, setTab] = useState("1");
  return (
    <div className="main-content">
      <div className="page-wrapper">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="flex-column align-items-start ">
                <div
                  className="nav flex-row justify-content-center nav-pills m-md-3 mt-3 pt-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <Button
                    className={`nav-link ${tab == "1" ? "btn-active" : ""} mx-sm-1`}
                    onClick={() => setTab("1")}
                  >
                    Customers
                  </Button>
                  <Button
                    className={`nav-link ${tab == "2" ? "btn-active" : ""} mx-sm-1`}
                    onClick={() => setTab("2")}
                  >
                    Percentage View
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col-lg-4 col-md-0"></div>
            <div className="d-flex col-lg-8 col-md-12">
              <CompanyCard />
            </div>
            {tab == "1" && (
              <div
                className="tab-pane fade show active"
                id="machine"
                role="tabpanel"
                aria-labelledby="machine-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-10 py-md-4 py-3">
                    <div className="secondcard">
                      <div id="secondcard" className="card-body">
                        <CustomerHeader />

                        <div
                          className="tab-pane fade show active"
                          id="machine"
                          role="tabpanel"
                          aria-labelledby="machine-tab"
                        >
                          <div className="row justify-content-center pt-5">
                            <div className="col-lg-6 col-md-10 col-sm-12">
                              <div className="table-responsive mb-2">
                              <table class="table table-bordered mb-0">
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Unique ID</th>
                                    <th scope="col">Names</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th>01</th>
                                    <td>12939321321</td>
                                    <td>abcd xyz</td>
                                  </tr>
                                  <tr>
                                    <th>02</th>
                                    <td>12939321321</td>
                                    <td>abcd xyz</td>
                                  </tr>
                                  <tr>
                                    <th>03</th>
                                    <td>12939321321</td>
                                    <td>abcd xyz</td>
                                  </tr>
                                  <tr>
                                    <th>04</th>
                                    <td>12939321321</td>
                                    <td>abcd xyz</td>
                                  </tr>
                                  <tr>
                                    <th>05</th>
                                    <td>12939321321</td>
                                    <td>abcd xyz</td>
                                  </tr>
                                  <tr>
                                    <th>06</th>
                                    <td>12939321321</td>
                                    <td>abcd xyz</td>
                                  </tr>
                                </tbody>
                              </table>
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
            {tab == "2" && (
              <div
                className="tab-pane fade show active"
                id="machine"
                role="tabpanel"
                aria-labelledby="machine-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-10 py-md-4 py-3">
                    <div className="secondcard">
                      <div id="secondcard" className="card-body">
                        <PercentageHeader />

                        <div
                          className="pt-5 tab-pane fade show active"
                          id="machine"
                          role="tabpanel"
                          aria-labelledby="machine-tab"
                        >
                          <div className="row justify-content-center">
                            <div className=" col-md-4 col-sm-7 d-flex justify-content-center my-2 my-md-0">
                              <div className="perc-card ">
                                <img
                                  className="px-auto pt-5"
                                  src={require("../assets/images/dawaam/Vector (4).png")}
                                  alt=""
                                />
                                {/* <div className='pt-5'>
																	<h3 className='perc-div'>
																		53%
																	</h3>
																</div> */}
                                <p className="px-auto pt-2 perc-card-p">
                                  Percentage of customers
                                </p>
                                <p className="px-auto perc-card-p2">
                                  Repeated using same bottle
                                </p>
                                <br />
                                <div className="row pt-2 align-items-center justify-content-center g-0">
                                  <div className="col-6">
                                    <input
                                      id="displayed-data-perc"
                                      type="text"
                                      placeholder="No# of repetition"
                                    />
                                  </div>
                                  <div className="col-4">
                                    <a
                                      href="#"
                                      className="btn w-100 btn-normal"
                                    >
                                      {" "}
                                      23{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="row pt-3 align-items-center justify-content-center g-0">
                                  <div className="col-6">
                                    <input
                                      id="displayed-data-perc"
                                      type="text"
                                      placeholder="ML filled"
                                    />
                                  </div>
                                  <div className="col-4">
                                    <a
                                      href="#"
                                      className="btn w-100 btn-normal"
                                    >
                                      {" "}
                                      234{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className=" col-md-4 col-sm-7 d-flex justify-content-center my-2 my-md-0">
                              <div className="perc-card ">
                                <img
                                  className="px-auto pt-5"
                                  src={require("../assets/images/dawaam/Vector (4).png")}
                                  alt=""
                                />
                                {/* <div className='px-auto  perc-div'>
																		<h3>
																			53%
																		</h3>
																	</div> */}
                                <p className="px-auto pt-2 perc-card-p">
                                  Percentage of customers
                                </p>
                                <p className="px-auto perc-card-p2">
                                  No repetition
                                </p>
                                <p className="px-auto perc-card-p2">
                                  No depositied old bottles
                                </p>

                                <div className="row pt-2 align-items-center justify-content-center g-0">
                                  <div className="col-6">
                                    <input
                                      id="displayed-data-perc"
                                      type="text"
                                      placeholder="No# of repetition"
                                    />
                                  </div>
                                  <div className="col-4">
                                    <a
                                      href="#"
                                      className="btn w-100 btn-normal"
                                    >
                                      {" "}
                                      23{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="row pt-3 align-items-center justify-content-center g-0">
                                  <div className="col-6">
                                    <input
                                      id="displayed-data-perc"
                                      type="text"
                                      placeholder="ML filled"
                                    />
                                  </div>
                                  <div className="col-4">
                                    <a
                                      href="#"
                                      className="btn w-100 btn-normal"
                                    >
                                      {" "}
                                      234{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className=" col-md-4 col-sm-7 d-flex justify-content-center my-2 my-md-0">
                              <div className="perc-card ">
                                <img
                                  className="px-auto pt-5"
                                  src={require("../assets/images/dawaam/Vector (4).png")}
                                  alt=""
                                />
                                {/* <div className='px-auto  perc-div'>
																		<h3>
																			53%
																		</h3>
																	</div> */}
                                <p className="px-auto pt-2 perc-card-p">
                                  Percentage of customers
                                </p>
                                <p className="px-auto perc-card-p2">
                                  No repetition
                                </p>
                                <p className="px-auto perc-card-p2">
                                  Deposited Old Bottles
                                </p>

                                <div className="row pt-2 align-items-center justify-content-center g-0">
                                  <div className="col-6">
                                    <input
                                      id="displayed-data-perc"
                                      type="text"
                                      placeholder="No# of repetition"
                                    />
                                  </div>
                                  <div className="col-4">
                                    <a
                                      href="#"
                                      className="btn w-100 btn-normal"
                                    >
                                      {" "}
                                      23{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="row pt-3 align-items-center justify-content-center g-0">
                                  <div className="col-6">
                                    <input
                                      id="displayed-data-perc"
                                      type="text"
                                      placeholder="ML filled"
                                    />
                                  </div>
                                  <div className="col-4">
                                    <a
                                      href="#"
                                      className="btn w-100 btn-normal"
                                    >
                                      {" "}
                                      234{" "}
                                    </a>
                                  </div>
                                </div>
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
  );
};

export default Customers;
