import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Spinner,
  Container,
  CardTitle,
  Label,
} from "reactstrap";
import { saveCompany } from "../../store/actions/comapnyActions";
import { useDispatch, useSelector } from "react-redux";

const Company = ({ openModal, modalToggle }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.company);
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [company_name, setCompany_Name] = useState("");

  const [role, setRole] = useState("read_only");
  return (
    <Modal isOpen={openModal} toggle={modalToggle}>
      <div className="modal-shadow">
        <div className="modal-content">
          <div className="modal-header pb-0">
            <div className="d-flex bd-highlight">
              <div className="p-2 bd-highlight"></div>
              <div className="m-auto p-2 bd-highlight">
                <h5 className="modal-title">Add Company</h5>
              </div>
            </div>
          </div>
          <div className="modal-body">
            <Form
              role="form"
              onSubmit={(e) => {
                e.preventDefault();
                let obj = {
                  name,
                  email,
                  password,
                  company_name,
                  company_code: Math.floor(1000 + Math.random() * 9000),
                  account_type: "company",
                  role,
                };
                dispatch(
                  saveCompany(obj, () => {
                    setName("");
                    setEmail("");
                    setPassword("");
                    setCompany_Name("");
                    setRole("");
                    modalToggle();
                  })
                );
              }}
            >
              <FormGroup className="mb-3">
                <Label>Name</Label>
                <InputGroup className="input-group-alternative">
                  <Input
                    placeholder="Name"
                    type="text"
                    autoComplete="new-name"
                    name="name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <InputGroup className="input-group-alternative">
                  <Input
                    placeholder="Email"
                    type="text"
                    autoComplete="new-email"
                    name="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <InputGroup className="input-group-alternative">
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    name="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label>Company Name</Label>
                <InputGroup className="input-group-alternative">
                  <Input
                    placeholder="Company Name"
                    type="text"
                    autoComplete="company-name"
                    name="company-name"
                    value={company_name}
                    required
                    onChange={(e) => setCompany_Name(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label>Role</Label>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio1"
                      value="read_only"
                      checked={role === "read_only"}
                      onChange={(e) => setRole(e.target.value)}
                    />{" "}
                    Read Only
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio1"
                      value="admin"
                      checked={role === "admin"}
                      onChange={(e) => setRole(e.target.value)}
                    />{" "}
                    Admin
                  </Label>
                </FormGroup>
              </FormGroup>
              <div className="text-end">
                <Button
                  onClick={() => modalToggle()}
                  className="my-4 mr-2 text-white"
                  color="danger"
                  type="button"
                >
                  Cancel
                </Button>
                <Button className="my-4" color="success" type="submit">
                  {loading ? <Spinner size="sm" /> : "Add"}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Company;
