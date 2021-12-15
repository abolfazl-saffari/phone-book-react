import { Form, Row, Col, Image, Button } from "react-bootstrap";
import image1 from "../../img/note-book-ring.png";
import image3 from "../../img/avatar.png";
import { RiContactsBookFill } from "react-icons/ri";
import { HiUserAdd } from "react-icons/hi";
import "../addContact/addContact.css";
const AddContact = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "80rem",
        margin: "auto",
        padding: "3vw",
      }}
    >
      <div
        style={{
          display: "block",
          margin: "auto 0",
          padding: "6rem 1rem",
          width: "40rem",
          borderRight: "0",
          borderTop: "1px solid #000",
          borderBottom: "1px solid #000",
          borderLeft: "1px solid #000",
          borderRadius: "0.5rem  0  0  8rem ",
          backgroundColor: "#fff",
        }}
      >
        <Row>
          <RiContactsBookFill
            style={{ color: "#000", fontSize: "43rem", padding: "5rem" }}
          />
        </Row>
      </div>
      <Image
        src={image1}
        style={{
          width: "7rem",
          height: "55.15rem",
          borderTop: "1px solid #000",
          borderBottom: "1px solid #000",
        }}
      />
      <Form
        style={{
          display: "block",
          margin: "auto 0",
          padding: "3.2rem 1rem",
          width: "40rem",
          borderRight: "1px solid #000",
          borderTop: "1px solid #000",
          borderBottom: "1px solid #000",
          borderLeft: "0",
          borderRadius: "0 0.5rem 8rem 0 ",
          backgroundColor: "#fff",
        }}
      >
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Image src={image3} style={{ width: "10rem" }} roundedCircle />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Lastname</Form.Label>
              <Form.Control placeholder="Lastname" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Gender</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>default</option>
                <option value="1">Female</option>
                <option value="2">Male</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Phone</Form.Label>
              <Form.Control placeholder="Phone" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control placeholder="Email address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Address" />
            </Form.Group>
          </Col>
        </Row>
        <Button
          className="d-flex align-items-center my-4"
          variant="dark"
          type="submit"
        >
          Add
          <HiUserAdd className="ms-2" />
        </Button>
      </Form>
    </div>
  );
};
export default AddContact;
