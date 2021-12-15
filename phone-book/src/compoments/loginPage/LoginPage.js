import { Form, Button, Image } from "react-bootstrap";
import logo from "../../img/squid-game.png";
import image1 from "../../img/sq-1.jpg";
import image2 from "../../img/sq-2.webp";
import "../loginPage/loginPage.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const LoginPage = () => {
  //   let images = [image1, image2, image3, image4, image5, image6, image7];
  //   const [state, useState] = [];
  //   useEffect(() => {
  //     setInterval(() => {
  //     }, 1000);
  //   }, []);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div style={{ fontSize: "0.75rem", fontWeight: "700" }}>
        <div>19990201</div>
      </div>
    </Tooltip>
  );
  const renderTooltip01 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div style={{ fontSize: "0.75rem", fontWeight: "700" }}>
        <span>Find invitaion card !!!</span>
      </div>
    </Tooltip>
  );
  return (
    <div
      style={{
        display: "flex",
        backgroundImage: "url(" + image1 + ")",
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
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Image
            className="invitationCard"
            style={{ width: "5rem", cursor: "pointer" }}
            src={image2}
          />
        </OverlayTrigger>
      </diV>
      <Form
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
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="mt-3 mb-1" variant="dark" type="submit">
          I participate in the game
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
