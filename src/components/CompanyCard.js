import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Notifications from "./Modals/Notifications";
import { getNotifications } from "../store/actions/dashboardActions";

function CompanyCard() {
  const { user } = useSelector((state) => state.auth);
  const { notifications } = useSelector((state) => state.metrics);
  const [notiModal, setNotiModal] = useState(false);
  const dispatch = useDispatch();
  const notiToggle = () => {
    setNotiModal(!notiModal);
  };
  useEffect(() => {
    dispatch(
      getNotifications({
        company_code: user?.company_code,
      })
    );
  }, []);

  return (
    <>
      {/* <div id="bellcards" className="card ">
        <div className="card-body">
          <h4
            className="card-title"
            onClick={() => notiToggle()}
            // data-target='#notiModal'
            // data-toggle='modal'
            // data-bs-toggle='modal'
            // href='#modal'
            role="button"
          >
            <img
              src={require("../assets/images/dawaam/bell solo.png")}
              alt=""
            />
          </h4>
        </div>
      </div> */}
      {/* <div className="topCard">
        <div className="row">
          <div className="col col-md-4">
            <h5 className="head">Role:</h5>
            <h6 className="title">{user?.role} </h6>
          </div>
          <div className="col col-md-4 text-center">
            <img
              src={require("../assets/images/dawaam/User-image.png")}
              alt=""
            />
          </div>
          <div className="col col-md-4">
            <h5 className="head">Type:</h5>
            <h6 className="title">{user?.account_type}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4 className="footer-text text-center">{user?.company_name}</h4>
          </div>
        </div>
      </div> */}
      {/* <Notifications
        notiModal={notiModal}
        notifications={notifications}
        notiToggle={notiToggle}
      /> */}
    </>
  );
}

export default CompanyCard;
