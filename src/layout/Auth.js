import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import React from "react";

const Auth = (props) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      {user != null && <Redirect to="/dashboard" />}

      {props.children}
    </>
  );
};

export default Auth;
