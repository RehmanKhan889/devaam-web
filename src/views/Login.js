import React, { useState } from "react";
import logo_ct from "../assets/images/dawaam/logo-ct.png";

// reactstrap components
import {
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
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../store/actions/authActions";
// import { FaTruck } from 'react-icons/fa';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    history.push("/dashboard");
  };

  return (
    <>
      <Container className="div-login">
        <Row className="justify-content-center">
          <Col lg="5" md="5">
            <div className="text-center">
              <img
                src={logo_ct}
                alt="homepage"
                className="dark-logo justify-content-center"
              />
            </div>
            <Card className="card-design ">
              <div className="text-center">
                <CardTitle>
                  {/* <FaTruck size={50} /> */}
                  <h2 className="line-around-text mt-5">
                    <span className="line-around-text-span">Login</span>
                  </h2>
                </CardTitle>
              </div>
              <CardBody className="px-lg-5 py-lg-5">
                <Form
                  role="form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    let obj = {
                      email,
                      password,
                    };
                    dispatch(loginUser(obj));
                  }}
                >
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-envelope" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        autoComplete="new-email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        autoComplete="new-password"
                        name="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>

                  <div className="text-center">
                    <Button className="my-4" color="success" type="submit">
                      {loading ? <Spinner size="sm" /> : "	Sign In"}
                    </Button>
                  </div>
                </Form>
                {/* <Row className='mt-3'>
									<Col xs='6'>
										<Link to='#'>
											<small>Forgot password?</small>
										</Link>
									</Col>
								</Row> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
