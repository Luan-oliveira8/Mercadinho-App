import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import cx from "classnames";
import { GenericModalProps } from "./GenericModalProps";
import Button from "../button/Button";

const GenericModal: React.FC<GenericModalProps> = ({
  children,
  isOpen,
  closeModal,
  subimitModal,
  size,
  titleModal,
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
      <div className="my-2">
        <Button label="Cancel" onClick={closeModal} className="btn-sm mx-2" />
        <Button
          label="Submit"
          onClick={subimitModal}
          className={cx("btn-sm", {
            "d-none": !subimitModal,
          })}
        />
      </div>
    </Modal>
  );
};

export default GenericModal;
