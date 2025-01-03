import React, { useEffect } from "react";
import { CartCheckoutProps } from "./CartCheckoutProps";
import InputGroup from "../../components/inputGroup/InputGroup";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
import FormGroup from "../../components/formGroup/FormGroup";
import { Product } from "../../models/product/Product";

interface ExtraFields {
  data: Product[];
}

const CartCheckout: React.FC<CartCheckoutProps & ExtraFields> = ({ data }) => {
  const formProps = useForm<CartCheckoutProps>();

  useEffect(
    () => {
      if (!formProps.getValues().totalAmount) {
        const totalAmount = data.reduce(
          (sum, it) => sum + Number(it.selPrice),
          0
        );
        formProps.setValue("totalAmount", totalAmount);
      }
    }, // eslint-disable-next-line
    []
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
              disabled={true}
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
        </Row>
      </FormGroup>
    </>
  );
};

export default CartCheckout;
