import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Main, Sidebar } from "./compoments";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <>
        <Container fluid>
          <Row>
            <Col style={{ height: "100vh" }} className="p-0" xs={2}>
              <Sidebar />
            </Col>
            <Col className="p-0" xs={10}>
              <Main />
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}

export default App;
