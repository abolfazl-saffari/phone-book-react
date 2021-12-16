import { Form, Button, Image } from "react-bootstrap";
import logo from "../../img/squid-game.png";
import card from "../../img/sq-2.webp";
import image1 from "../../img/sq-1.jpg";
import image2 from "../../img/sq-4.jpg";
import image3 from "../../img/sq-5.jpg";
import image4 from "../../img/sq-6.jpg";
import image5 from "../../img/sq-7.jpg";
import image6 from "../../img/sq-8.jpg";

import "../loginPage/loginPage.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const onSunmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let password = data.get("password");
    if (Number(password) === 19990201) {
      return alert("Welcome to you");
    } else {
      return alert("Password is wrong please pay attention !");
    }
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div style={{ fontSize: "1rem", fontWeight: "700" }}>
        <div>19990201</div>
      </div>
    </Tooltip>
  );
  const renderTooltip01 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div style={{ fontSize: "1rem", fontWeight: "700" }}>
        <span>Find the invitaion card !!!</span>
      </div>
    </Tooltip>
  );
  const gallery = [image1, image2, image3, image4, image5, image6];
  const [num, setNum] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setNum(Math.floor(Math.random() * 6));
      console.log(setNum);
    }, 5000);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        backgroundImage: `url(${gallery[num]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <diV
        id="wrapper"
        style={{ display: "block", position: "fixed", top: "0", left: "0" }}
      >
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 2000 }}
          overlay={renderTooltip}
        >
          <Image
            className="invitationCard"
            style={{ width: "5rem", cursor: "pointer" }}
            src={card}
          />
        </OverlayTrigger>
      </diV>
      <Form
        onSubmit={onSunmit}
        style={{
          display: "block",
          padding: "2vw",
          margin: "auto",
          width: "30rem",
          backdropFilter: "blur(10px) sepia(20%) brightness(90%) ",
        }}
      >
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip01}
        >
          <Image
            src={logo}
            style={{ display: "block", margin: "0 auto", cursor: "help" }}
          />
        </OverlayTrigger>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontSize: "2rem", fontWeight: "700" }}>
            Name :
          </Form.Label>
          <Form.Control type="email" placeholder="Abolfazl-drx" disabled />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontSize: "2rem", fontWeight: "700" }}>
            Password :
          </Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button className="mt-3 mb-1" variant="dark" type="submit">
          I participate in the game
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
