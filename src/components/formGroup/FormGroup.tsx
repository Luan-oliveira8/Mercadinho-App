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
  routeInclude = "",
  routeCancel = "back",
  hidenButtonCancel = false,
  hidenButtonSubmit = false,
  beforesubmit,
  afterSubmit,
  children,
  formProps,
}) => {
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    if (route === "back" && window.history.length > 1) {
      navigate(-1);
    }
    navigate(route);
  };

  const handleFormSubmit = async (formData?: any) => {
    if (beforesubmit) {
      await beforesubmit(formData);
    }
    if (afterSubmit) {
      await afterSubmit();
    }
    if (onSubmit) {
      onSubmit(formData);
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
            className="ms-auto"
            onClick={() => handleNavigation(routeInclude)}
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
            label={labelButtonCancel}
            className="me-2"
            hidden={hidenButtonCancel}
            onClick={() => handleNavigation(routeCancel)}
          />
          <Button
            label={labelButtonSubmit}
            onClick={formProps.handleSubmit(handleFormSubmit)}
            hidden={hidenButtonSubmit}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default FormGroup;
