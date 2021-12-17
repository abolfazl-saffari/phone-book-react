import { Form, Row, Col, Image, Button } from "react-bootstrap";
import image1 from "../../img/note-book-ring.png";
import image3 from "../../img/avatar.png";
import { RiContactsBookFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { useState } from "react";
const UpdateContact = ({ data, setData, click }) => {
  const [user, setUser] = useState(click);
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSumitHandler = (e) => {
    e.preventDefault();
    setData(
      data.map((oldUser) => {
        return oldUser.id === user.id ? user : oldUser;
      })
    );
  };
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
        onSubmit={onSumitHandler}
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
              <Form.Control
                onChange={onChangeHandler}
                value={user.name}
                name="name"
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                onChange={onChangeHandler}
                value={user.lName}
                name="lName"
                placeholder="Lastname"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                onChange={onChangeHandler}
                value={user.gender}
                name="gender"
                aria-label="Default select example"
              >
                <option>default</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                onChange={onChangeHandler}
                value={user.phone}
                name="phone"
                placeholder="Phone"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={onChangeHandler}
                value={user.emailAddress}
                name="emailAddress"
                placeholder="Email address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={onChangeHandler}
                value={user.address}
                name="address"
                placeholder="Address"
              />
            </Form.Group>
          </Col>
        </Row>
        <Button
          className="d-flex align-items-center my-4"
          variant="dark"
          type="submit"
        >
          Update
          <FaUserEdit className="ms-2" />
        </Button>
      </Form>
    </div>
  );
};
export default UpdateContact;
