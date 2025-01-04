import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { GenericModalProps } from "./GenericModalProps";
import Button from "../button/Button";

const GenericModal: React.FC<GenericModalProps> = ({
  children,
  isOpen,
  closeModal,
  subimitModal,
  size,
  titleModal,
  hidenButtonCancel = false,
  hidenButtonSubmit = false,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      fade={false}
      toggle={closeModal}
      className={size ? `modal-${size}` : "modal-xl"}
    >
      <ModalHeader toggle={closeModal}>{titleModal}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button
          label="Cancel"
          onClick={closeModal}
          className="btn-sm mx-2"
          hidden={hidenButtonCancel}
        />
        <Button
          label="Submit"
          onClick={subimitModal}
          className="btn-sm"
          hidden={hidenButtonSubmit}
        />
      </ModalFooter>
    </Modal>
  );
};

export default GenericModal;
