import React, { useEffect } from "react";
import { CartCheckoutProps } from "./CartCheckoutProps";
import InputGroup from "../../components/inputGroup/InputGroup";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
import FormGroup from "../../components/formGroup/FormGroup";
import { Product } from "../../models/product/Product";
import axios from "axios";
import { REGISTER_PURCHASE_AND_UPDATE_STOCK } from "../../utils/enums/productUrlTypeEnum/ProductUrlTypeEnum";
import { CREATED } from "../../utils/enums/httpStatusCodeTypeEnum/HttpStatusCodeTypeEnum";
import { useNavigate } from "react-router-dom";
import { CART_MANAGE } from "../../utils/enums/routeTypeEnum/RouteTypeEnum";

interface ExtraFields {
  data: Product[];
}

const CartCheckout: React.FC<CartCheckoutProps & ExtraFields> = ({ data }) => {
  const formProps = useForm<CartCheckoutProps>();
  const navigate = useNavigate();
  const watchPaidAmount = formProps.watch("paidAmount");

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

  useEffect(
    () => {
      const totalAmount = formProps.getValues().totalAmount;
      const amountReturn = Number(watchPaidAmount) - Number(totalAmount);
      formProps.setValue("amountReturn", amountReturn);
    }, // eslint-disable-next-line
    [watchPaidAmount]
  );

  const handleSubmitForm = async (formData: CartCheckoutProps) => {
    try {
      const response = await axios.post(
        REGISTER_PURCHASE_AND_UPDATE_STOCK.value,
        formData
      );
      if (response.status === CREATED.value) {
        showSuccess("Purchase register successfully.");
        navigate(CART_MANAGE.value);
      } else {
        showError("Purchase not registered.");
      }
    } catch (error: any) {
      showError(`Something went wrong status: ${error.status}.`);
    }
    console.log(formData);
  };

  return (
    <>
      <FormGroup formProps={formProps} onSubmit={handleSubmitForm}>
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
function showSuccess(arg0: string) {
  throw new Error("Function not implemented.");
}
function showError(arg0: string) {
  throw new Error("Function not implemented.");
}
