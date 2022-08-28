import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Main = (props) => {
  const { user } = useSelector((state) => state.auth);

  const [sideBarType, setSideBarType] = useState("full");
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    updatePredicate();
    window.addEventListener("resize", updatePredicate);
    return () => window.removeEventListener("resize", updatePredicate);
  }, []);
  const updatePredicate = () => {
    // setIsMobile(window.innerWidth < 576);
    if (window.innerWidth < 1176) {
      setSideBarType("mini-sidebar");
    } else {
      setSideBarType("full");
    }
  };

  const showToggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      {user == null && <Redirect to="/" />}
      <div
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin5"
        data-sidebartype={`${sideBarType}`}
        data-sidebar-position="absolute"
        data-header-position="absolute"
        data-boxed-layout="full"
        className={`${showSidebar ? "show show-sidebar" : "show"}`}
      >
        <Sidebar showToggle={showToggle} />
        {props.children}
      </div>
    </>
  );
};

export default Main;
