import React from "react";
import { Col, FormGroup as Form, Row } from "reactstrap";
import { FormGroupProps } from "./FormGroupProps";
import Button from "../button/Button";
import cx from "classnames";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { stringIsNotEmpty } from "../../utils/validationUtils/validationUtils";

const FormGroup: React.FC<FormGroupProps> = ({
  className,
  color,
  style,
  labelButtonSubmit = "Submit",
  labelButtonCancel = "Cancel",
  labelButtonInclude = "Include",
  onSubmit,
  onClickCancel,
  routeInclude = "",
  beforesubmit,
  afterSubmit,
  children,
  formProps,
}) => {
  const navigate = useNavigate();

  const onClickInclude = (routeInclude: string) => {
    navigate(routeInclude);
  };

  const handleFormSubmit = async (formData?: any) => {
    if (beforesubmit && onSubmit) {
      await beforesubmit();
      onSubmit(formData);
    }
    if (afterSubmit && onSubmit) {
      await onSubmit(formData);
      afterSubmit();
    }
    if (onSubmit) {
      onSubmit(formData);
    }
    if (onClickCancel) {
      onClickCancel();
    }
  };

  return (
    <Form>
      <Row
        className={cx("justify-content-end", {
          "d-none": !stringIsNotEmpty(routeInclude),
        })}
      >
        <Col xs="auto" className="me-4">
          <Button
            label={labelButtonInclude}
            onClick={() => onClickInclude(routeInclude)}
            className="ms-auto"
          >
            <FaPlus className="me-2" />
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>{children}</Col>
      </Row>
      <Row>
        <Col xs="auto">
          <Button
            className={cx("me-2", { "d-none": !onClickCancel })}
            label={labelButtonCancel}
            onClick={onClickCancel}
          />
          <Button
            label={labelButtonSubmit}
            onClick={formProps.handleSubmit(handleFormSubmit)}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default FormGroup;
