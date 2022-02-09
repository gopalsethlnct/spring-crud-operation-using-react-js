import { Container, Col, Row, ListGroup } from "reactstrap";
import Login from "./Login";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from "./Register";
import { Reset } from "./Reset";

export function HomePage(props) {
  return (
    <div className="Login" style={{ background: "white", margin: "65px" }}>
      <Router>
        <Container style={{}}>
          <Row>
            <Col md={6}>
              <div style={{ height: "800", margin: "0px" }} color="white">
                <Row>
                  <Col md={7}>
                    <div style={{ height: "600px", marginTop: "30px" }}>
                      <img
                        src="images/employees.jpeg"
                        style={{
                          height: "570px",
                        }}
                        alt="employees"
                      />
                    </div>
                  </Col>
                  <Col md={5}>
                    <div
                      style={{
                        height: "500px",
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "150px",
                      }}
                    >
                      <ListGroup>
                        <Link
                          style={{ margin: "5px", background: "lightgreen" }}
                          className="list-group-item  list-group-item-action"
                          tag="a"
                          to="/"
                        >
                          Login
                        </Link>
                        <Link
                          style={{ margin: "5px", background: "grey" }}
                          className="list-group-item  list-group-item-action"
                          tag="a"
                          to="/register"
                        >
                          SingUp
                        </Link>
                        <Link
                          style={{ margin: "5px", background: "red" }}
                          className="list-group-item  list-group-item-action"
                          tag="a"
                          to="/reset"
                        >
                          Forgot Password
                        </Link>
                      </ListGroup>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <Routes>
                <Route
                  path="/"
                  element={<Login setLogin={props.setLogin} />}
                  exact
                />
                <Route path="/register" element={<Register />} exact />
                <Route path="/reset" element={<Reset />} exact />
                {/* <Route path="/login" element={<Login/>} exact /> */}
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}
