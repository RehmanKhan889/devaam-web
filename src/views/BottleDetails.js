import React from "react";
import CompanyCard from "../components/CompanyCard";
import BottleDetail from "../components/BottleDetail";
import Details from "../components/Details";
import systemUpdate from "../assets/images/dawaam/systemUpdate.png";
import Group292 from "../assets/images/dawaam/Group292.svg";
import Group258 from "../assets/images/dawaam/Group258.svg";
import Group256 from "../assets/images/dawaam/Group256.svg";
import Group255 from "../assets/images/dawaam/Group255.svg";
import Select from "react-select";
import { Label, Input, Card, FormGroup, Row, Col } from "reactstrap";

const options = [
  { label: "Product 1" },
  { label: "Product 2" },
  { label: "Product 3" },
  { label: "Product 4" },
  { label: "Product 5" },
];
const BottleDetails = () => {
  return (
    <div className="main-content">
      <div className="page-wrapper">
        <div className="container text-center">
          <div className="row pb-3">
            <div className="col-lg-4 col-md-0"></div>
            <div className="d-flex col-lg-8 col-md-12">
              <CompanyCard />
            </div>
            <div
              className="tab-pane fade show active"
              id="machine"
              role="tabpanel"
              aria-labelledby="machine-tab"
            >
              <div className="row">
                <div className="col-lg-12 pt-5">
                  <div className="secondcard">
                    <div id="secondcard" className="card-body">
                      <BottleDetail />
                      <Card className="mt-3">
                        <div className="row justify-content-center pt-md-3 pt-4">
                          <div className="row ">
                            <div className="col-lg-10 offset-lg-1">
                              <Row className="justify-content-md-end">
                                <Col md="3" >
                                  <FormGroup className="text-left">
                                    <Label>From</Label>
                                    <Input type="date" xs="6" />
                                  </FormGroup>
                                </Col>
                                <Col md="3" >
                                  <FormGroup className="text-left">
                                    <Label>To</Label>
                                    <Input type="date" xs="6" />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <div className="row  pb-md-0 pb-3">
                                <div className="col-md-3  pb-md-3 pb-3">
                                  <div id="tankCard" className="tank-card-cls" >
                                    <div class="card">
                                      <div
                                        className="cardContent d-flex justify-content-center align-items-center"
                                        style={{
                                          height: "160px",
                                        }}
                                      >
                                        <img
                                          class="card-img-top"
                                          src={Group256}
                                          alt="Card image  "
                                          style={{
                                            width: "auto",
                                          }}
                                        />
                                      </div>

                                      <div
                                        className="tank1Content"
                                        style={{
                                          background: "#CFF2EE",
                                          boxShadow:
                                            "0px 4px 8px rgba(0, 0, 0, 0.12)",
                                        }}
                                      ></div>
                                      <div
                                        class="card-body"
                                        style={{ background: "#F3F3F3;" }}
                                      >
                                        <h5 class="card-title">
                                          <p style={{
                                            fontweight: 400,
                                          }}>
                                            No# of bottles
                                            <br />
                                            currently on the shelf
                                          </p>
                                        </h5>
                                        <button className="btn btn-outline-info px-4">
                                          45
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3  pb-md-3 pb-3">
                                  <div id="tankCard" className="tank-card-cls">
                                    <div class="card">
                                      <div
                                        className="cardContent d-flex justify-content-center align-items-center"
                                        style={{
                                          height: "160px",
                                        }}
                                      >
                                        <img
                                          class="card-img-top"
                                          src={Group255}
                                          alt="Card image cap"
                                          style={{
                                            width: "auto",
                                          }}
                                        />
                                      </div>
                                      <div
                                        className="tank1Content"
                                        style={{
                                          background: "#CFF2EE",
                                          boxShadow:
                                            "0px 4px 8px rgba(0, 0, 0, 0.12)",
                                        }}
                                      ></div>
                                      <div class="card-body">
                                        <h5 class="card-title">
                                          <p style={{
                                            fontweight: 400,
                                          }}>
                                            No# of new empty
                                            <br />
                                            bottles bought
                                          </p>
                                        </h5>
                                        <button className="btn btn-outline-info px-4">
                                          100
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3  pb-md-3 pb-3">
                                  <div id="tankCard" className="tank-card-cls">
                                    <div class="card">
                                      <div
                                        className="cardContent d-flex justify-content-center align-items-center"
                                        style={{
                                          height: "160px",
                                        }}
                                      >
                                        <img
                                          class="card-img-top"
                                          src={Group258}
                                          alt="Card image cap"
                                          style={{
                                            width: "auto",
                                          }}
                                        />
                                      </div>
                                      <div
                                        className="tank1Content"
                                        style={{
                                          background: "#CFF2EE",
                                          boxShadow:
                                            "0px 4px 8px rgba(0, 0, 0, 0.12)",
                                        }}
                                      ></div>
                                      <div class="card-body">
                                        <h5 class="card-title">
                                          <p style={{
                                            fontweight: 400,
                                          }}>
                                            No# of bottles
                                            <br />
                                            refilled
                                          </p>
                                        </h5>
                                        <button className="btn btn-outline-info px-4">
                                          34
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3  pb-md-3 pb-3">
                                  <div id="tankCard" className="tank-card-cls">
                                    <div class="card">
                                      <div
                                        className="cardContent  d-flex justify-content-center align-items-center "
                                        style={{
                                          height: "160px",
                                        }}
                                      >
                                        <img
                                          class="card-img-top"
                                          src={Group292}
                                          alt="Card   cap"
                                          style={{
                                            width: "auto",
                                          }}
                                        />
                                        <br />
                                      </div>
                                      <div
                                        className="tank1Content"
                                        style={{
                                          background: "#CFF2EE",
                                          boxShadow:
                                            "0px 4px 8px rgba(0, 0, 0, 0.12)",
                                        }}
                                      ></div>
                                      <div class="card-body">
                                        <h5 class="card-title">
                                          <p style={{
                                            fontweight: 400,
                                          }}>
                                            Revenue from new
                                            <br />
                                            bottles sold
                                          </p>
                                        </h5>
                                        <button className="btn btn-outline-info px-4">
                                          30,000 RS
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottleDetails;
