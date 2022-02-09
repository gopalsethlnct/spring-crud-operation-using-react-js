import Header from './header';
import Home from './home';
import AllEmployees from './allEmployees';
import AddEmployee from './addEmployee';
import { Col, Container, Row } from 'reactstrap';
import ContentMenu from './menu';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

export function User() {
    return (
        <div >
        <Router>
          <ToastContainer/>
          <Container>
            <Header />
            <Row>
              <Col md={10}>
                <Routes>
                  <Route path="/" element={<Home />} exact />
                  <Route path="/add-employee" element={<AddEmployee />} exact />
                  <Route path="/view-employee" element={<AllEmployees />} exact />
                </Routes>
  
              </Col>
              <Col md={2}>
                <ContentMenu />
              </Col>
            </Row>
          </Container>
        </Router>
  
  
      </div>
 

    );
};
