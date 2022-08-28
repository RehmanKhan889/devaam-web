import React, { useState, useEffect } from "react";
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
import { editCompany } from "../../store/actions/comapnyActions";
import { useDispatch, useSelector } from "react-redux";

const EditCompany = ({
  openEditModal,
  editModalToggle,
  data,
  editEmail,
  editName,
  editCompany_Name,
  setEditCompany_Name,
  setEditName,
  setEditEmail,
}) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.company);

  return (
    <Modal isOpen={openEditModal} toggle={editModalToggle}>
      <div className="modal-shadow">
        <div className="modal-content">
          <div className="modal-header pb-0">
            <div className="d-flex bd-highlight">
              <div className="p-2 bd-highlight"></div>
              <div className="m-auto p-2 bd-highlight">
                <h5 className="modal-title">Edit Company</h5>
              </div>
            </div>
          </div>
          <div className="modal-body">
            <Form
              role="form"
              onSubmit={(e) => {
                e.preventDefault();
                console.log(data);
                let obj = {
                  ...data,
                  name: editName,
                  email: editEmail,
                  company_name: editCompany_Name,
                };
                dispatch(
                  editCompany(obj, () => {
                    setEditName("");
                    setEditEmail("");
                    setEditCompany_Name("");
                    editModalToggle();
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
                    value={editName}
                    required
                    onChange={(e) => setEditName(e.target.value)}
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
                    value={editEmail}
                    required
                    onChange={(e) => setEditEmail(e.target.value)}
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
                    value={editCompany_Name}
                    required
                    onChange={(e) => setEditCompany_Name(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-end">
                <Button
                  className="my-4 mr-2 text-white"
                  color="danger"
                  type="button"
                  onClick={() => editModalToggle()}
                >
                  Cancel
                </Button>
                <Button className="my-4" color="success" type="submit">
                  {loading ? <Spinner size="sm" /> : "Save"}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditCompany;
