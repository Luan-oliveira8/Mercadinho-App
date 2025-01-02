import React, { useEffect } from "react";
import { CartCheckoutProps } from "./CartCheckoutProps";
import InputGroup from "../../components/inputGroup/InputGroup";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
import FormGroup from "../../components/formGroup/FormGroup";
import { useLocation } from "react-router-dom";

const CartCheckout: React.FC<CartCheckoutProps> = () => {
  const formProps = useForm<CartCheckoutProps>();
  const location = useLocation();
  const { cartProducts } = location.state || {};

  useEffect(
    () => {
      setTimeout(() => {
        cartProducts.forEach((element: any) => {
          console.log(element);
        });
      }, 200);
    }, // eslint-disable-next-line
    [cartProducts]
  );

  return (
    <>
      <FormGroup formProps={formProps}>
        <Row>
          <Col xs="4">
            <InputGroup
              type="number"
              name="totalAmount"
              label="Total amount"
              control={formProps.control}
            />
            <InputGroup
              type="number"
              name="paidAmount"
              label="Paid amount"
              control={formProps.control}
            />
            <InputGroup
              type="number"
              name="amountReturn"
              label="Amount to return"
              control={formProps.control}
              disabled={true}
            />
          </Col>
          <Col xs="8">
            <p>AAAAAA</p>
          </Col>
        </Row>
      </FormGroup>
    </>
  );
};

export default CartCheckout;
