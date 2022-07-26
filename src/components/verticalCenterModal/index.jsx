import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.children}
      </Modal.Body>
      <Modal.Footer>
        {props.additionalCustonButton}
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;