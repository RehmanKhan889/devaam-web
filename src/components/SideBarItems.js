import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/authActions";
import { Button } from "reactstrap";

function SideBarItems({ route, setActive, active }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      {route.name != "Logout" ? (
        <li
          className={`sidebar-item ${
            window.location.pathname == route.path ? "selected" : "not_selected"
          } `}
          // onClick={() => setActive(route.name)}
        >
          <Link
            className="sidebar-link waves-effect waves-dark"
            to={`${route.path}`}
            // aria-expanded='false'
          >
            {window.location.pathname == route.path ? (
              <i className="mdi">
                <img
                  width={17}
                  height={17}
                  className=" mr-3"
                  src={`${route.icon}`}
                />
              </i>
            ) : (
              <i className="mdi">
                <img
                  width={13}
                  height={13}
                  className=" mr-3"
                  src={`${route.sub_icon}`}
                />
              </i>
            )}
            {/*
             */}
            {/* {route.icon_type == "image" ? (
              <i className="mdi">
                {" "}
                <img src={`${route.icon}`} />
              </i>
            ) : (
              <i className={`${route.icon}`}></i>
            )} */}
            <span className="hide-menu">{route.name}</span>
          </Link>
        </li>
      ) : (
        <Button
          block
          color="success"
          onClick={() => {
            dispatch(logout());
          }}
          className="sidebar-item sidebar-link waves-effect waves-dark"
          //   className={`sidebar-item ${
          //     window.location.pathname == route.path ? "selected" : ""
          //   } `}
          // onClick={() => setActive(route.name)}
        >
          {/* <Link
            className="sidebar-link waves-effect waves-dark"
            to={`${route.path}`}
          
            // aria-expanded='false'
          > */}
          {route.icon_type == "image" ? (
            <i className="mdi">
              {" "}
              <img src={`${route.icon}`} />
            </i>
          ) : (
            <i className={`${route.icon}`}></i>
          )}
          <span className="hide-menu">{route.name}</span>
          {/* </Link> */}
        </Button>
      )}
    </>
  );
}

export default SideBarItems;
