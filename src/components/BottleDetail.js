import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BottleDetail = () => {
  return (
    <div className="row align-items-center justify-content-between px-md-3 px-4">
      <div id="bottlescards" className="col-md-3 card ">
        <div className="card-body text-center">
          <img src={require("../assets/images/dawaam/Group 159.png")} alt="" />
          <p
            className="card-title"
            style={{
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 400,
              fontFamily: "Open Sans",
              color:"#1d2023"
            }}
          >
            Advance Bottle Details
          </p>
        </div>
      </div>
      <div id="bottlescards" className="col-md-4 card  h-100">
        <div className="card-body text-center h-100">
          <h3
            className="card-title"
            style={{
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: 600,
              marginTop: "30px",
              marginBottom: "30px",
              fontFamily: "Open Sans",

            }}
          >
            Data from all machines combined
          </h3>
        </div>
      </div>
      <div id="bottlescards" className="col-md-3  px-0 ">
        <div className="card-body px-0 ">
          <Link
            to="/dashboard"
            className="btn text-white px-5 "
            style={{
              background: "#08b9a1",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            {" "}
            Back{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottleDetail;
