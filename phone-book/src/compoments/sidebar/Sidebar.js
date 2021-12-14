import { ListGroup } from "react-bootstrap";
import { Image } from "react-bootstrap";
import drx from "../../img/drx.png";
const Sidebar = () => {
  return (
    <>
      <aside>
        <Image style={{ width: "100%" }} src={drx} />
        <ListGroup>
          <ListGroup.Item>Home</ListGroup.Item>
        </ListGroup>
      </aside>
    </>
  );
};
export default Sidebar;
