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
import { FaUserEdit, FaMale, FaFemale } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { HiUserRemove } from "react-icons/hi";
import { useEffect, useState } from "react";
const Main = ({ data, setData, setClick }) => {
  const [filter, sefFilter] = useState("");
  const removeList = (id) => {
    setData(
      data.filter((user) => {
        return user.id !== id;
      })
    );
  };
  const editHandler = (id, user) => {
    setClick(user);
  };

  useEffect(() => {
    document.title = "Phone-book";
  }, []);
  return (
    <main style={{ backgroundColor: "" }}>
      <Row>
        <Col sm={8} xl={8} className=" ms-5 mt-4 mb-2">
          <h1
            style={{ fontSize: "4rem", color: "#000", fontWeight: "700" }}
            className="mt-2 mb-4"
          >
            -Home
          </h1>
        </Col>
        <Col sm={6} xl={3} className="ms-5 mt-4 mb-4">
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
                  Logged out
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={10} xl={8} className=" ms-5 mt-5 mb-3">
          <InputGroup
            style={{ border: "1px solid #000", borderRadius: "0.25rem" }}
            className="mb-1"
          >
            <FormControl
              onChange={(e) => {
                return sefFilter(e.target.value);
              }}
              placeholder="What are you looking for ?"
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
            fontSize: "2rem",
            color: "#000",
            fontWeight: "700",
          }}
          className="ms-5"
          xs={5}
          xl={8}
        >
          -Contact list
        </Col>
        <Col
          style={{
            fontSize: "2rem",
            color: "#000",
            fontWeight: "700",
          }}
          className="ms-5"
          xs={4}
          xl={3}
        >
          -Contact list overview
        </Col>
      </Row>
      <Row className="p-0">
        <Col className="ms-5" xs={5} xl={8}>
          <Scrollbars style={{ height: "40vw" }}>
            <ListGroup style={{ width: "53.5vw" }}>
              {data.filter(
                (user) =>
                  user.name.toLowerCase().includes(filter.toLowerCase()) ||
                  user.lName.toLowerCase().includes(filter.toLowerCase()) ||
                  user.phone.includes(filter) ||
                  user.address
                    .toLowerCase()
                    .includes(filter.toLocaleLowerCase()) ||
                  user.emailAddress
                    .toLowerCase()
                    .includes(filter.toLocaleLowerCase())
              ).length === 0 ? (
                <span style={{ fontWeight: "700" }} className="text-center">
                  No result found for
                  <span
                    className="ms-1"
                    style={{ fontSize: "1.2rem", textDecoration: "underline " }}
                  >
                    {filter}
                  </span>
                  .
                </span>
              ) : (
                data
                  .filter(
                    (user) =>
                      user.name.toLowerCase().includes(filter.toLowerCase()) ||
                      user.lName.toLowerCase().includes(filter.toLowerCase()) ||
                      user.phone.includes(filter) ||
                      user.address
                        .toLowerCase()
                        .includes(filter.toLocaleLowerCase()) ||
                      user.emailAddress
                        .toLowerCase()
                        .includes(filter.toLocaleLowerCase())
                  )
                  .map((user) => {
                    return (
                      <ListGroup.Item
                        key={user.id}
                        className="py-4 mb-1"
                        style={{
                          backgroundColor: "#000",
                          border: "1px solid #fff",
                          color: "#fff",
                          borderRadius: "0.5rem",
                        }}
                      >
                        <div
                          style={{ fontWeight: "700", fontSize: "1.5rem" }}
                          className=" d-flex justify-content-between"
                        >
                          <div>
                            <Image
                              src={`https://randomuser.me/api/portraits/${user.photoUrl}/${user.id}.jpg`}
                              style={{
                                width: "3rem",
                                border: "1px solid #fff",
                              }}
                              className="me-2"
                              roundedCircle
                            />
                            {user.name} {user.lName}
                          </div>
                          <FaUserEdit
                            onClick={() => editHandler(user.id, user)}
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                        <ul
                          className="mt-4 ms-2 mb-0"
                          style={{
                            fontWeight: "500",
                            listStyleType: "none",
                            padding: "0",
                            fontSize: "1.1rem",
                          }}
                        >
                          <li className="my-1">
                            {user.gender === "Male" ? (
                              <FaMale className="me-2" />
                            ) : (
                              <FaFemale className="me-2" />
                            )}
                            {user.gender}
                          </li>
                          <li className="my-1">
                            <a
                              href={"tel:" + user.phone}
                              target="_blank"
                              style={{ textDecoration: "none", color: "#fff" }}
                              rel="noreferrer"
                            >
                              <BsFillTelephoneFill className="me-2" />
                              {user.phone}
                            </a>
                          </li>
                          <li className="my-1">
                            <a
                              href={"mailto:" + user.emailAddress}
                              target="_blank"
                              style={{ textDecoration: "none", color: "#fff" }}
                              rel="noreferrer"
                            >
                              <MdAlternateEmail className="me-2" />
                              {user.emailAddress}
                            </a>
                          </li>
                          <li className="my-1">
                            <a
                              href={
                                "https://www.google.com/search?q=" +
                                user.address +
                                "&oq=" +
                                user.address +
                                "&aqs=chrome.0.0i512j46i512j0i512l2j46i175i199i512j46i512j0i512l2j46i175i199i512j0i512.2908j0j9&sourceid=chrome&ie=UTF-8"
                              }
                              target="_blank"
                              style={{ textDecoration: "none", color: "#fff" }}
                              rel="noreferrer"
                            >
                              <ImLocation2 className="me-2" />
                              {user.address}
                            </a>
                          </li>
                        </ul>
                        <HiUserRemove
                          onClick={() => removeList(user.id)}
                          style={{
                            float: "right",
                            fontSize: "1.5rem",
                            cursor: "pointer",
                          }}
                        />
                      </ListGroup.Item>
                    );
                  })
              )}
            </ListGroup>
          </Scrollbars>
        </Col>
        <Col className="ms-5" xs={5} xl={3}>
          <Scrollbars style={{ height: "40vw" }}>
            {data.map((user) => {
              return (
                <Card
                  key={user.id}
                  className="mb-2 py-2"
                  style={{
                    width: "18.5vw",
                    backgroundColor: "#000",
                    color: "#fff",
                    border: "0.5rem",
                  }}
                >
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "700" }}>
                      {user.name} {user.lName}
                      <Image
                        src={`https://randomuser.me/api/portraits/${user.photoUrl}/${user.id}.jpg`}
                        style={{
                          width: "3rem",
                          float: "right",
                          border: "1px solid #fff",
                        }}
                        roundedCircle
                      />
                    </Card.Title>
                    <Card.Text style={{ fontSize: "0.75rem" }}>
                      <a
                        href={"tel:" + user.phone}
                        target="_blank"
                        style={{ textDecoration: "none", color: "#fff" }}
                        rel="noreferrer"
                      >
                        <BsFillTelephoneFill className="me-2" />
                        {user.phone}
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
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
  );
};
export default Main;
