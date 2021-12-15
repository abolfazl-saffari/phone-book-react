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
import { BsFillPersonPlusFill } from "react-icons/bs";
const Main = () => {
  return (
    <main style={{ backgroundColor: "" }}>
      <Row>
        <Col xs={8} className=" ms-5 mt-4 mb-2">
          <h1
            style={{ fontSize: "4rem", color: "#000", fontWeight: "700" }}
            className="mt-2 mb-4"
          >
            -Home
          </h1>
        </Col>
        <Col xs={3} className="ms-5 mt-4 mb-4">
          <Card style={{ backgroundColor: "#000" }}>
            <Card.Body>
              <Card.Text className="d-flex justify-content-between">
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "#fff",
                    fontWeight: "700",
                    borderRadius: "0.5rem",
                  }}
                >
                  Abolfazl-drx
                </span>
                <Image
                  style={{
                    width: "2.5rem",
                    borderRadius: "0.25rem",
                    border: "0.15rem solid #fff",
                  }}
                  src={logo}
                />
              </Card.Text>
              <div className="d-grid gap-2">
                <Button
                  style={{
                    backgroundColor: "#fff",
                    color: "#000",
                    border: "0",
                    fontWeight: "700",
                  }}
                >
                  {" "}
                  Logged out
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={8} className=" ms-5 mt-5 mb-3">
          <InputGroup
            style={{ border: "1px solid #000", borderRadius: "0.25rem" }}
            className="mb-1"
          >
            <FormControl
              placeholder="Username..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text
              style={{ backgroundColor: "#000" }}
              id="basic-addon2"
            >
              <BiSearchAlt style={{ color: "#fff" }} />
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      <Row className=" my-4">
        <Col
          style={{
            fontSize: "1.5rem",
            color: "#000",
            fontWeight: "700",
          }}
          className="ms-5"
          xs={8}
        >
          -Contact list
        </Col>
        <Col
          style={{
            fontSize: "1.5rem",
            color: "#000",
            fontWeight: "700",
          }}
          className="ms-5"
          xs={3}
        >
          -Contact list overview
        </Col>
      </Row>
      <Row className="p-0">
        <Col className="ms-5" xs={8}>
          <Scrollbars style={{ height: "40vw" }}>
            <ListGroup style={{ width: "53.5vw" }}>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Dapibus ac facilisis in
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Morbi leo risus
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Dapibus ac facilisis in
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Morbi leo risus
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Dapibus ac facilisis in
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Morbi leo risus
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4 "
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Dapibus ac facilisis in
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Morbi leo risus
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item
                className="py-4"
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Porta ac consectetur ac
              </ListGroup.Item>
            </ListGroup>
          </Scrollbars>
        </Col>
        <Col className="ms-5" xs={3}>
          <Scrollbars style={{ height: "40vw" }}>
            <Card
              className="my-2"
              style={{
                width: "18.5vw",
                backgroundColor: "#000",
                color: "#fff",
                border: "0.5rem",
                fontWeight: "700",
              }}
            >
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="my-2"
              style={{
                width: "18.5vw",
                backgroundColor: "#000",
                color: "#fff",
                border: "0.5rem",
                fontWeight: "700",
              }}
            >
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="my-2"
              style={{
                width: "18.5vw",
                backgroundColor: "#000",
                color: "#fff",
                border: "0.5rem",
                fontWeight: "700",
              }}
            >
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="my-2"
              style={{
                width: "18.5vw",
                backgroundColor: "#000",
                color: "#fff",
                border: "0.5rem",
                fontWeight: "700",
              }}
            >
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="my-2"
              style={{
                width: "18.5vw",
                backgroundColor: "#000",
                color: "#fff",
                border: "0.5rem",
                fontWeight: "700",
              }}
            >
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="my-2"
              style={{
                width: "18.5vw",
                backgroundColor: "#000",
                color: "#fff",
                border: "0.5rem",
                fontWeight: "700",
              }}
            >
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="my-2"
              style={{
                width: "18.5vw",
                backgroundColor: "#000",
                color: "#fff",
                border: "0.5rem",
                fontWeight: "700",
              }}
            >
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="my-2"
              style={{
                width: "18.5vw",
                backgroundColor: "#000",
                color: "#fff",
                border: "0.5rem",
                fontWeight: "700",
              }}
            >
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Scrollbars>
        </Col>
      </Row>
      <Row>
        <Col className="ms-5 my-4">
          <Button
            style={{
              backgroundColor: "#000",
              border: "none",
              borderRadius: "0.5rem",
              fontWeight: "700",
            }}
          >
            <BsFillPersonPlusFill
              className="ms-2"
              style={{ fontSize: "2vw" }}
            />
            <span className="ms-2">Add new contact</span>
          </Button>
        </Col>
      </Row>
    </main>
    // https://robohash.org/img01/?set=set4
    // for images
  );
};
export default Main;
