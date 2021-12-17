import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { HiUserRemove } from "react-icons/hi";
const ModalDelete = ({ data, setData, idDelete }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const removeList = (id) => {
    setData(
      data.filter((user) => {
        return user.id !== id;
      })
    );
  };

  return (
    <>
      <HiUserRemove
        onClick={handleShow}
        style={{
          float: "right",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
      />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{ fontWeight: "700" }} closeButton></Modal.Header>
        <Modal.Body style={{ fontSize: "1.5rem", fontWeight: "700" }}>
          Are your sure about this ?
        </Modal.Body>
        <Modal.Footer style={{ fontWeight: "700" }}>
          <Button
            style={{
              fontWeight: "700",
              color: "#000",
              backgroundColor: "#fff",
              border: "1px solid #000",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            style={{
              fontWeight: "700",
              color: "#fff",
              backgroundColor: "#000",
              border: "1px solid #fff",
            }}
            onClick={() => removeList(idDelete)}
          >
            Yes, remove this contact
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDelete;
