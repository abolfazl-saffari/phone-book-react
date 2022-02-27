import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Main,
  Sidebar,
  LoginPage,
  AddContact,
  UpdateContact,
} from "./compoments";
import { Container, Row, Col } from "react-bootstrap";
import users from "./usersData/usersData";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState(users);
  const [click, setClick] = useState([]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route
            exact
            path="/home"
            element={
              <Container fluid>
                <Row>
                  <Col className="p-0" xs={2} sm={2} xl={2}>
                    <Sidebar />
                  </Col>
                  <Col className="p-0" xs={10} sm={10} xl={10}>
                    <Main data={data} setData={setData} setClick={setClick} />
                  </Col>
                </Row>
              </Container>
            }
          />
          <Route
            exact
            path="/home/addcontact"
            element={<AddContact data={data} setData={setData} />}
          />
          <Route
            exact
            path="/home/updateContact"
            element={
              <UpdateContact
                data={data}
                setData={setData}
                click={click}
                setClick={setClick}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
