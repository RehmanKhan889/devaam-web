import React, { useState, useEffect } from "react";
import CompanyCard from "../components/CompanyCard";
import Notifications from "../components/Modals/Notifications";
import { Link } from "react-router-dom";
import {
  getAllLocations,
  addLocation,
  updateLocation,
  deleteLocation,
} from "../store/actions/locationsActions";
// import getAllMachines from "../store/actions/machineActions"
import { getAllMachines } from "../store/actions/machineActions";
import { getNotifications } from "../store/actions/dashboardActions";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Modal,
  Spinner,
  Form,
} from "reactstrap";

function Locations() {
  const dispatch = useDispatch();
  const { locations, loading } = useSelector((state) => state.location);
  const[tab,setTab]=useState("1")
  const { user } = useSelector((state) => state.auth);
  const { machines, loading1 } = useSelector((state) => state.machine);
  const { notifications } = useSelector((state) => state.metrics);
  const [toggleLocation, settoggleLocation] = useState(false);

  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [locationData, setLocationData] = useState({
    latitude: null,
    longitude: null,
    name: "",
  });
  const [company_code, setCompanyCode] = useState("");
  const [_rev, setRev] = useState("");
  const [_id, setId] = useState("");

  const onToggleHandler = () => {
    settoggleLocation(!toggleLocation)
  }
  const onChangeHandler = (name, val) => {
    if (name == "name") {
      setLocationData((prevState) => ({ ...prevState, [name]: val }));
    } else {
      setLocationData((prevState) => ({
        ...prevState,
        [name]: Number(val),
      }));
    }
  };

  const clearFields = () => {
    setLocationData({
      latitude: null,
      longitude: null,
      name: "",
    });
    setId("");
    setRev("");
    setCompanyCode("");
  };
  const addToggle = () => {
    setAddModal(!addModal);
  };
  const editToggle = () => {
    setEditModal(!editModal);
  };
  const deleteToggle = () => {
    setDeleteModal(!deleteModal);
  };

  const [notiModal, setNotiModal] = useState(false);
  const notiToggle = () => {
    setNotiModal(!notiModal);
  };
  useEffect(() => {
    if (locations && locations.length == 0) {
      dispatch(getAllLocations(user?.company_code));
    }
  }, []);
  useEffect(() => {
    if (machines.length == 0) {
      dispatch(
        getAllMachines({
          company_code: user?.company_code,
        })
      );
    }
  }, []);
  return (
    <div class="main-content">
      <div class="page-wrapper">
        <div class="container text-center">
          <div class="row pb-3">
            <div class="col-lg-6 col-md-6 d-flex">
              <CompanyCard />
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 mt-4 mb-4">
              <div
                id="firstcard"
                class="firstcard"
                style={{ display: "block" }}
              >
                <div class="card-body">
                  <iframe
                    id="maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7055509.855094621!2d64.85562399416843!3d30.2919784946048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1648448754319!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    // style='border: 0'
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div
                id="secondcards"
                class="firstCard"
                style={{ display: "none" }}
              >
                <div class="card-body">
                  <div id="multiForm">
                    <div class="mb-3">
                      <label for="formFile" class="form-label">
                        Location Name
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        value="ABCD XYZ"
                        id="formFile"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="formFileMultiple" class="form-label">
                        Location Address
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        value="ABCD XYZ 123"
                        id="formFileMultiple"
                        multiple
                      />
                    </div>
                    <div class="mb-3">
                      <label for="formFileDisabled" class="form-label">
                        Number of Machines
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        value="2"
                        id="formFileDisabled"
                        disabled
                      />
                    </div>
                    <div class="d-grid text-center gap-3 pt-3 d-md-block">
                      <a
                        href="/locations_details"
                        class="btn btn-primary"
                        type="a"
                      >
                        Machine 1
                      </a>
                      <a
                        href="/locations_details"
                        class="btn btn-primary"
                        type="a"
                      >
                        Machine 2
                      </a>
                    </div>
                    <div class="pt-5">
                      <a id="retrunBtn" class="btn" type="submit">
                        Back to map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div class="col-lg-7 mt-4 mb-4">
              <div
                id="oldsecondcard"
                class="secondcard"
                style={{ display: "block" }}
              >
                {toggleLocation &&
                  <>
                  <div id="secondcard" className="card-body">
                    <div className="flex-column align-items-start ">
                      <div
                        className="nav flex-row nav-pills m-md-3 mt-3"
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
                          Stock Levels
                        </Button>
                      </div>
                    </div>
                  <div className="row justify-content-md-end" >
                    <div className="col-md-4">
                      <img
                        className="mx-auto align-items-center"
                        src={require("../assets/images/dawaam/green-machine.png")}
                        alt=""
                      /></div>
                    <div className="col-md-4 text-end">
                      {/* <Button className="" onClick={onToggleHandler}>Back</Button> */}
                      <Link className="back-link" onClick={onToggleHandler}>{`< Back`}</Link>  
                    </div>
                  </div>
                  <h4 className="card-title" style={{ textDecoration: "none" }}>
                    Deployed Machines
                  </h4>
                  <br />
                  <div className="table-responsive mb-5">
                  <table

                    className="locationsTable mb-0"
                  >
                    <thead>
                      <tr className="tableRowHeader">
                        <th scope="col">Machine ID</th>
                        <th scope="col">Location</th>
                        <th scope="col">Brands</th>
                        <th scope="col">Health</th>
                        {/* <th scope="col">Actions</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {machines.map((item, index) => (
                        <tr tr className="tableRows" key={index}>
                          <th id="machine_id" scope="row">
                            <Link  to={{pathname:`/machine_details/${item._id}?location=true`}}>
                              {item._id}
                            </Link>
                          </th>
                          <td>{item?.location || "NA"}</td>
                          <td>
                            {item?.brands
                              ?.map((item) => item.name)
                              .flat()
                              .toString() || "NA"}
                          </td>
                          <td>
                            {item?.status || "NA"} <br />
                            <span>
                              <img
                                src="../assets/images/dawaam/Ellipse 6.png"
                                alt=""
                              />
                            </span>
                            <span>
                              <img
                                src="../assets/images/dawaam/Ellipse 7.png"
                                alt=""
                              />
                            </span>
                            <span>
                              <img
                                src="../assets/images/dawaam/Ellipse 8.png"
                                alt=""
                              />
                            </span>
                          </td>


                        </tr>
                      ))}
                    </tbody>
                  </table>
                    </div>
                  <div className="subtitle-text">
                    <p className="m-0">
                      Click on the “Machine ID Number” to see more details
                    </p>
                    <p className="m-0">or</p>
                    <p className="m-0">
                      Enter “Machine ID” below and proceed to view advance
                      details
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-md-8 offset-md-2">
                      <form id="deployed_machines" className="pt-5">
                        <div className="d-flex gap-3 ">
                          <input
                            type="email"
                            className="form-control text-center"
                            placeholder="Enter ID Here"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                          <Link
                            id="btn-primary"
                            to="/machine_details"
                            class="btn btn-primary"
                            type="submit"
                          >
                            Submit
                          </Link>
                        </div>
                      </form>
                      
                    </div>
                  </div>
                </div>
                </>
                }
                {!toggleLocation && <div id="secondcard" class="card-body">
                  <img
                    src={require("../assets/images/dawaam/green-machine.png")}
                    alt=""
                  />
                  <h4 class="card-title" style={{ textDecoration: "none" }}>
                    Current Active Location
                  </h4>
                  <br />
                  <div className="table-responsive mb-5">
                  <table class="locationsTable mb-0">
                    <thead>
                      <tr className="tableRowHeader">
                        <th scope="col">Locations</th>
                        <th scope="col">Google Maps Link</th>
                        <th scope="col">Brands</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {locations &&
                        locations.length > 0 &&
                        locations.map((location) => {
                          return (
                            <tr className="tableRows">
                              <th id="machine_id" scope="row">
                                <Link
                                  // onClick={onToggleHandler}
                                  to={{pathname:`/location_sub_page/${location._id}`}}
                                >
                                  {location.name}
                                </Link>
                              </th>
                              <td>{location.location}</td>
                              <td>NA</td>
                              <td>
                                <i
                                  className="fa fa-edit cursor-pointer"
                                  onClick={() => {
                                    setId(location._id);
                                    setRev(location._rev);
                                    setCompanyCode(location.company_code);
                                    setLocationData({
                                      name: location.name,
                                      latitude: location.latitude,
                                      longitude: location.longitude,
                                    });
                                    editToggle();
                                  }}
                                ></i>
                                <i
                                  className="fa fa-trash text-danger cursor-pointer ml-2"
                                  onClick={() => {
                                    setId(location._id);
                                    deleteToggle();
                                  }}
                                ></i>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                  </div>
                  <div className="subtitle-text" >
                    <p class="m-0 blackTxt">
                      Click on the “Machine ID Number” to see more details
                    </p>
                    <p class="m-0 blackTxt">or</p>
                    <p class="m-0 blackTxt">
                      Enter “Machine ID” below and proceed to view advance
                      details
                    </p>
                  </div>

                  <div class="row">
                    <div class="col-md-8 offset-md-2">
                      <form id="deployed_machines" class="pt-5">
                        <div class="d-flex gap-3">
                          <input
                            type="email"
                            class="form-control text-center"
                            placeholder="Enter ID Here"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                          <Link
                            id="btn-primary"
                            to="/locations_details"
                            class="btn btn-primary"
                            type="submit"
                          >
                            Submit
                          </Link>
                        </div>
                      </form>
                      <div class="mt-4 justify-content-center align-items-center">
                        <Button
                          className="main_btn mt-md-0 mt-4"
                          onClick={() => addToggle()}
                        >
                          Add New Location
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>}

              </div>
              <div
                id="newsecondcard"
                class="secondcard"
                style={{ display: "none" }}
              >
                <div id="secondcard" class="card-body">
                  <img
                    src={require("../assets/images/dawaam/green-machine.png")}
                    alt=""
                  />
                  <h4 class="card-title" style={{ textDecoration: "none" }}>
                    Deployed machines in this location
                  </h4>
                  <br />
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Machine ID</th>
                        <th scope="col">Location</th>
                        <th scope="col">Brands</th>
                        <th scope="col">Health</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th id="redirect" scope="row">
                          <a href="/locations_details">ID here</a>
                        </th>
                        <td>Address here</td>
                        <td>Brand names</td>
                        <td>
                          Status here <br />
                          <span>
                            <img
                              src={require("../assets/images/dawaam/Ellipse 6.png")}
                              alt=""
                            />
                          </span>
                          <span>
                            <img
                              src={require("../assets/images/dawaam/Ellipse 7.png")}
                              alt=""
                            />
                          </span>
                          <span>
                            <img
                              src={require("../assets/images/dawaam/Ellipse 8.png")}
                              alt=""
                            />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th id="redirect" scope="row">
                          <a href="/locations_details">ID here</a>
                        </th>
                        <td>Address here</td>
                        <td>Brand names</td>
                        <td>
                          Status here <br />
                          <span>
                            <img
                              src={require("../assets/images/dawaam/Ellipse 6.png")}
                              alt=""
                            />
                          </span>
                          <span>
                            <img
                              src={require("../assets/images/dawaam/Ellipse 7.png")}
                              alt=""
                            />
                          </span>
                          <span>
                            <img
                              src={require("../assets/images/dawaam/Ellipse 8.png")}
                              alt=""
                            />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div>
                    <p class="m-0">
                      Click on the “Machine ID Number” to see more details
                    </p>
                    <p class="m-0">or</p>
                    <p class="m-0">
                      Enter “Machine ID” below and proceed to view advance
                      details
                    </p>
                  </div>

                  <div class="row">
                    <div class="col-md-6 offset-md-3">
                      <form id="deployed_machines" class="pt-5">
                        <div class=" ">
                          <button
                            id="Back"
                            class="btn btn-primary"
                            type="button"
                          >
                            Back
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="col-lg-3  mb-4">
              <div id='bellcards' class='card'>
								<div className='card-body'>
									<h4
										className='card-title'
										onClick={() => notiToggle()}
										role='button'
									>
										<img
											src={require('../assets/images/dawaam/bell solo.png')}
											alt=''
										/>
									</h4>
								</div>
							</div>
							<br />
							<br />
							<br /> */}
              {/* <div id='bottlescards' class='card'>
								<div class='card-body text-center'>
									<h4 class='card-title'>
										<img
											src={require('../assets/images/dawaam/botlled.png')}
											alt=''
										/>
										<h6 class='bottles'>Sales & Usage</h6>

										<Link
											to='/location_sales_usage'
											class='btn btn-danger'
										>
											Veiw
										</Link>
									</h4>
								</div>
							</div>
            </div> */}
          </div>

          <Notifications notiModal={notiModal} notiToggle={notiToggle} />
          {/* 
					Add Modal */}
          <Modal
            isOpen={addModal}
            toggle={() => {
              clearFields();
              addToggle();
            }}
          >
            <div className="modal-shadow">
              <div className="modal-content">
                <div className="modal-header pb-0">
                  <div className="d-flex bd-highlight">
                    <div className="p-2 bd-highlight"></div>
                    <div className="m-auto p-2 bd-highlight">
                      <h5 className="modal-title">Add Location</h5>
                    </div>
                  </div>
                </div>
                <div className="modal-body">
                  <Form
                    role="form"
                    onSubmit={(e) => {
                      e.preventDefault();

                      let obj = {
                        ...locationData,
                        location:
                          locationData.latitude.toString() +
                          "," +
                          locationData.longitude.toString(),
                        company_code: user.company_code,
                      };
                      dispatch(
                        addLocation(obj, () => {
                          clearFields();
                          addToggle();
                          dispatch(getAllLocations(user.company_code));
                        })
                      );
                    }}
                  >
                    <FormGroup className="mb-3">
                      <Label>Name</Label>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Enter name"
                          type="text"
                          autoComplete="new-name"
                          name="name"
                          value={locationData.name}
                          onChange={(e) =>
                            onChangeHandler("name", e.target.value)
                          }
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-3">
                      <Label>Latitude</Label>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Enter latitude"
                          type="number"
                          autoComplete="new-name"
                          name="latitude"
                          value={locationData.latitude}
                          onChange={(e) =>
                            onChangeHandler("latitude", e.target.value)
                          }
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-3">
                      <Label>Longitude</Label>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Enter longitude"
                          type="number"
                          autoComplete="new-name"
                          name="longitude"
                          value={locationData.longitude}
                          onChange={(e) =>
                            onChangeHandler("longitude", e.target.value)
                          }
                          required
                        />
                      </InputGroup>
                    </FormGroup>

                    <div className="text-end">
                      <Button
                        onClick={() => {
                          clearFields();
                          addToggle();
                        }}
                        className="my-4 mr-2 text-white"
                        color="danger"
                        type="button"
                        disabled={loading}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="my-4"
                        color="success"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? <Spinner size="sm" /> : "Add"}
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </Modal>

          {/* Edit Modal */}
          <Modal
            isOpen={editModal}
            toggle={() => {
              clearFields();
              editToggle();
            }}
          >
            <div className="modal-shadow">
              <div className="modal-content">
                <div className="modal-header pb-0">
                  <div className="d-flex bd-highlight">
                    <div className="p-2 bd-highlight"></div>
                    <div className="m-auto p-2 bd-highlight">
                      <h5 className="modal-title">Update Location</h5>
                    </div>
                  </div>
                </div>
                <div className="modal-body">
                  <Form
                    role="form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      let obj = {
                        _id,
                        _rev,
                        location:
                          locationData.latitude.toString() +
                          "," +
                          locationData.longitude.toString(),
                        latitude: locationData.latitude,
                        longitude: locationData.longitude,
                        name: locationData.name,
                        company_code,
                      };
                      dispatch(
                        updateLocation(obj, () => {
                          clearFields();
                          editToggle();
                          dispatch(getAllLocations(user.company_code));
                        })
                      );
                    }}
                  >
                    <FormGroup className="mb-3">
                      <Label>Name</Label>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Enter name"
                          type="text"
                          autoComplete="new-name"
                          name="name"
                          value={locationData.name}
                          onChange={(e) =>
                            onChangeHandler("name", e.target.value)
                          }
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-3">
                      <Label>Latitude</Label>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Enter latitude"
                          type="number"
                          autoComplete="new-name"
                          name="latitude"
                          value={locationData.latitude}
                          onChange={(e) =>
                            onChangeHandler("latitude", e.target.value)
                          }
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-3">
                      <Label>Longitude</Label>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Enter longitude"
                          type="number"
                          autoComplete="new-name"
                          name="longitude"
                          value={locationData.longitude}
                          onChange={(e) =>
                            onChangeHandler("longitude", e.target.value)
                          }
                          required
                        />
                      </InputGroup>
                    </FormGroup>

                    <div className="text-end">
                      <Button
                        onClick={() => {
                          clearFields();
                          editToggle();
                        }}
                        className="my-4 mr-2 text-white"
                        color="danger"
                        type="button"
                        disabled={loading}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="my-4"
                        color="success"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? <Spinner size="sm" /> : "Update"}
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </Modal>

          {/* Delete Modal */}

          <Modal
            isOpen={deleteModal}
            toggle={() => {
              clearFields();
              deleteToggle();
            }}
          >
            <div className="modal-shadow">
              <div className="modal-content">
                <div className="modal-header pb-0">
                  <div className="d-flex bd-highlight">
                    <div className="p-2 bd-highlight"></div>
                    <div className="m-auto p-2 bd-highlight">
                      <h5 className="modal-title">
                        Delete Location Confirmation
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="modal-body">
                  <Form
                    role="form"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <h5>Are you sure you want to delete this location?</h5>
                    <div className="text-end">
                      <Button
                        onClick={() => {
                          clearFields();
                          deleteToggle();
                        }}
                        className="my-4 mr-2 text-white"
                        color="danger"
                        type="button"
                        disabled={loading}
                      >
                        No
                      </Button>
                      <Button
                        className="my-4"
                        color="success"
                        type="button"
                        onClick={() => {
                          dispatch(
                            deleteLocation({ _id }, () => {
                              clearFields();
                              deleteToggle();
                              dispatch(getAllLocations(user.company_code));
                            })
                          );
                        }}
                        disabled={loading}
                      >
                        {loading ? <Spinner size="sm" /> : "Yes"}
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Locations;
