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
// import { BrowerRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <UpdateContact /> */}
      {/* <AddContact /> */}
      {/* <LoginPage /> */}
      {/* <Container fluid>
        <Row>
          <Col className="p-0" xs={2}>
            <Sidebar />
          </Col>
          <Col className="p-0" xs={10}>
            <Main />
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default App;
