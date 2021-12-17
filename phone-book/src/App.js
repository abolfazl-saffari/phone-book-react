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
// import { BrowerRouter, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState(users);
  const [click, setClick] = useState([]);
  return (
    <div className="App">
      {/* <UpdateContact
        data={data}
        setData={setData}
        click={click}
        setClick={setClick}
      /> */}
      {/* <AddContact data={data} setData={setData} /> */}
      {/* <LoginPage /> */}
      <Container fluid>
        <Row>
          <Col className="p-0" xs={2}>
            <Sidebar />
          </Col>
          <Col className="p-0" xs={10}>
            <Main data={data} setData={setData} setClick={setClick} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
