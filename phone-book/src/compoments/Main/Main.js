import {
  Row,
  Col,
  Card,
  ListGroup,
  FormControl,
  InputGroup,
  Image,
  Button,
} from "react-bootstrap";
import logo from "../../img/drx.png";
import { Scrollbars } from "react-custom-scrollbars";
import { BiSearchAlt } from "react-icons/bi";
const Main = () => {
  return (
    <main>
      <Row>
        <Col xs={8} className="mt-4 mb-2">
          <InputGroup className="mb-1">
            <FormControl
              placeholder="Username..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">
              <BiSearchAlt />
            </InputGroup.Text>
          </InputGroup>
        </Col>
        <Col xs={3} className="ms-5 mt-4 mb-4">
          <Card>
            <Card.Body>
              <Card.Text className="d-flex justify-content-between">
                <span style={{ fontSize: "1.5rem" }}>Abolfazl-drx</span>
                <Image style={{ width: "2.5rem" }} src={logo} roundedCircle />
              </Card.Text>
              <div className="d-grid gap-2">
                <Button variant="primary"> Logged out</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className=" my-4">
        <Col xs={8}>Contact list</Col>
        <Col className="ms-5" xs={3}>
          Contact list overview
        </Col>
      </Row>
      <Row className="p-0">
        <Col xs={8}>
          <Scrollbars style={{ height: "40vw" }}>
            <ListGroup variant="flush" style={{ width: "54vw" }}>
              <ListGroup.Item className="py-4">Cras justo odio</ListGroup.Item>
              <ListGroup.Item className="py-4">
                Dapibus ac facilisis in
              </ListGroup.Item>
              <ListGroup.Item className="py-4">Morbi leo risus</ListGroup.Item>
              <ListGroup.Item className="py-4">
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item className="py-4">
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item className="py-4">
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item className="py-4">
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item className="py-4">Cras justo odio</ListGroup.Item>
              <ListGroup.Item className="py-4">
                Dapibus ac facilisis in
              </ListGroup.Item>
              <ListGroup.Item className="py-4">Morbi leo risus</ListGroup.Item>
              <ListGroup.Item className="py-4">
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item className="py-4">
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item className="py-4">
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item className="py-4">
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item className="py-4">Cras justo odio</ListGroup.Item>
              <ListGroup.Item className="py-4">
                Dapibus ac facilisis in
              </ListGroup.Item>
              <ListGroup.Item className="py-4">Morbi leo risus</ListGroup.Item>
              <ListGroup.Item className="py-4">
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item className="py-4">
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item className="py-4">
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item className="py-4">
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item className="py-4">Cras justo odio</ListGroup.Item>
              <ListGroup.Item className="py-4">
                Dapibus ac facilisis in
              </ListGroup.Item>
              <ListGroup.Item className="py-4">Morbi leo risus</ListGroup.Item>
              <ListGroup.Item className="py-4">
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item className="py-4">
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item className="py-4">
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item className="py-4">
                Porta ac consectetur ac
              </ListGroup.Item>
            </ListGroup>
          </Scrollbars>
        </Col>
        <Col className="ms-5" xs={3}>
          <Scrollbars style={{ height: "40vw" }}>
            <Card className="my-2" style={{ width: "19vw" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="my-2" style={{ width: "19vw" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="my-2" style={{ width: "19vw" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="my-2" style={{ width: "19vw" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="my-2" style={{ width: "19vw" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="my-2" style={{ width: "19vw" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="my-2" style={{ width: "19vw" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="my-2" style={{ width: "19vw" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Scrollbars>
        </Col>
      </Row>
    </main>
  );
};
export default Main;
