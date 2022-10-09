import React, { useState, useEffect } from "react";
import CompanyCard from "../components/CompanyCard";
import Notifications from "../components/Modals/Notifications";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllMachines,
  addMachine,
  updateMachine,
  deleteMachine,
} from "../store/actions/machineActions";
import { getAllLocations } from "../store/actions/locationsActions";
import {
  Button,
  Form,
  FormGroup,
  InputGroup,
  Label,
  Modal,
  Spinner,
  Table,
  Input,
} from "reactstrap";
function Machines() {
  const [notiModal, setNotiModal] = useState(false);
  const dispatch = useDispatch();
  const { machines, loading } = useSelector((state) => state.machine);
  const { user } = useSelector((state) => state.auth);
  const { locations } = useSelector((state) => state.location);

  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [machineData, setMachineData] = useState({
    latitude: "",
    longitude: "",
  });
  const [company_code, setCompanyCode] = useState("");
  const [_rev, setRev] = useState("");
  const [_id, setId] = useState("");

  

  const onChangeHandler = (name, val) => {
    setMachineData((prevState) => ({ ...prevState, [name]: val }));
    console.log(machineData);
  };

  const clearFields = () => {
    setMachineData({
      latitude: "",
      longitude: "",
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

  useEffect(() => {
    if (machines.length == 0) {
      dispatch(
        getAllMachines({
          company_code: user?.company_code,
        })
      );
    }

    if (locations && locations.length == 0) {
      dispatch(getAllLocations(user?.company_code));
    }
  }, []);

  const notiToggle = () => {
    setNotiModal(!notiModal);

    // console.log(machines.map(item=>item.brands.map=>{}))
  };
  return (
    <div className="main-content">
      <div className="page-wrapper">
        <div className="container text-center ">
          <div className="row pb-5">
            <div class="col-lg-6 col-md-6 d-flex">
              <CompanyCard />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 pb-5 ">
              <div
                id="firstcard"
                className="firstcard "
                style={{ display: "block" }}
              >
                <div className="card-body">
                  <iframe
                    id="maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7055509.855094621!2d64.85562399416843!3d30.2919784946048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1648448754319!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div
                id="secondcards"
                className="firstCard"
                style={{ display: "none" }}
              >
                <div className="card-body">
                  <div id="multiForm">
                    <div className="mb-3">
                      <label for="formFile" className="form-label">
                        Location Name
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value="ABCD XYZ"
                        id="formFile"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="formFileMultiple" className="form-label">
                        Location Address
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value="ABCD XYZ 123"
                        id="formFileMultiple"
                        multiple
                      />
                    </div>
                    <div className="mb-3">
                      <label for="formFileDisabled" className="form-label">
                        Number of Machines
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value="2"
                        id="formFileDisabled"
                        disabled
                      />
                    </div>
                    <div className="d-grid text-center gap-3 pt-3 d-md-block">
                      <a
                        href="/machine_details"
                        className="btn btn-primary"
                        type="a"
                      >
                        Machine 1
                      </a>
                      <a
                        href="/machine_details"
                        className="btn btn-primary"
                        type="a"
                      >
                        Machine 2
                      </a>
                    </div>
                    <div className=" pt-5">
                      <a id="retrunBtn" className="btn" type="submit">
                        {" "}
                        Back to map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 pb-5">
              <div className="secondcard">
                <div id="secondcard" className="card-body">
                  <img
                    src={require("../assets/images/dawaam/green-machine.png")}
                    alt=""
                  />
                  <h4 className="card-title" style={{ textDecoration: "none" }}>
                    Deployed Machines
                  </h4>
                  <br />
                  <div className="table-responsive mb-5">
                  <table className="locationsTable mb-0   ">
                        <thead>
                          <tr className="tableRowHeader">
                            <th scope="col">Machine ID</th>
                            <th scope="col">Location</th>
                            <th scope="col">Brands</th>
                            <th scope="col">Health</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {machines.map((item, index) => (
                            <tr tr className="tableRows" key={index}>
                              <th id="machine_id" scope="row">
                                <Link to={`/machine_details/${item._id}`}>
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

                              <td>
                                {/* <i
                              className="fa fa-edit cursor-pointer"
                              onClick={() => {
                                setId(item._id);
                                setRev(item._rev);
                                setCompanyCode(item.company_code);
                                let locationData = item.location.split(",");
                                setMachineData({
                                  latitude: locationData[0],
                                  longitude: locationData[1],
                                });
                                editToggle();
                              }}
                            ></i> */}
                                <i
                                  className="fa fa-trash text-danger cursor-pointer ml-2"
                                  onClick={() => {
                                    setId(item._id);
                                    deleteToggle();
                                  }}
                                ></i>
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
                            onChange={(e)=> {
                              setId(e.target.value)}}
                            aria-describedby="emailHelp"
                          />
                          <Link
                            id="btn-primary"
                            to={`/machine_details/${_id}`}
                            class="btn btn-primary"
                            type="submit"

                          >
                            Submit
                          </Link>
                        </div>
                      </form>
                      <div class=" mt-4  justify-content-center align-items-center">
                        <Button
                          className="main_btn mt-md-0 mt-4"
                          onClick={() => addToggle()}
                        >
                          Add New Machine
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  <h5 className="modal-title">Add Machine</h5>
                </div>
              </div>
            </div>
            <div className="modal-body">
              <Form
                role="form"
                onSubmit={(e) => {
                  e.preventDefault();

                  let obj = {
                    location:
                      machineData.latitude + "," + machineData.longitude,
                    company_code: user.company_code,
                  };
                  console.log(obj);
                  dispatch(
                    addMachine(obj, () => {
                      clearFields();
                      addToggle();
                      dispatch(
                        getAllMachines({
                          company_code: user?.company_code,
                        })
                      );
                    })
                  );
                }}
              >
                <FormGroup>
                  <Label for="exampleSelect">Select Brand</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    {Array(5)
                      .fill(0)
                      .map((item, index) => {
                        return (
                          <option value={index} key={index}>
                            Brand {index}
                          </option>
                        );
                      })}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Select Status</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    {Array(5)
                      .fill(0)
                      .map((item, index) => {
                        return (
                          <option value={index} key={index}>
                            Status {index}
                          </option>
                        );
                      })}
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="exampleSelect">Select Location</Label>
                  <Input
                    id="exampleSelectLocation"
                    onChange={(e) => {
                      console.log(e.target.value);
                      let lats = e.target.value.split(",");
                      console.log(lats);
                      onChangeHandler("latitude", lats[0]);
                      onChangeHandler("longitude", lats[1]);
                    }}
                    name="select"
                    type="select"
                  >
                    {locations.map((item, index) => {
                      return (
                        <option value={item.location} key={index}>
                          Location {index}
                        </option>
                      );
                    })}
                  </Input>
                </FormGroup>
                {/* <FormGroup className="mb-3">
                  <Label>Latitude</Label>
                  <InputGroup className="input-group-alternative">
                    <Input
                      placeholder="Enter latitude"
                      type="number"
                      autoComplete="new-name"
                      name="latitude"
                      value={machineData.latitude}
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
                      value={machineData.longitude}
                      onChange={(e) =>
                        onChangeHandler("longitude", e.target.value)
                      }
                      required
                    />
                  </InputGroup>
                </FormGroup> */}

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
                  <h5 className="modal-title">Update Machine</h5>
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
                      machineData.latitude + "," + machineData.longitude,
                    company_code,
                  };
                  dispatch(
                    updateMachine(obj, () => {
                      clearFields();
                      editToggle();
                      dispatch(
                        getAllMachines({
                          company_code: user?.company_code,
                        })
                      );
                    })
                  );
                }}
              >
                {/* <FormGroup className="mb-3">
                  <Label>Latitude</Label>
                  <InputGroup className="input-group-alternative">
                    <Input
                      placeholder="Enter latitude"
                      type="number"
                      autoComplete="new-name"
                      name="latitude"
                      value={machineData.latitude}
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
                      value={machineData.longitude}
                      onChange={(e) =>
                        onChangeHandler("longitude", e.target.value)
                      }
                      required
                    />
                  </InputGroup>
                </FormGroup> */}

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
                  <h5 className="modal-title">Delete Machine Confirmation</h5>
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
                <h5>Are you sure you want to delete this machine?</h5>
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
                        deleteMachine({ _id }, () => {
                          clearFields();
                          deleteToggle();
                          dispatch(
                            getAllMachines({
                              company_code: user?.company_code,
                            })
                          );
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
  );
}

export default Machines;
