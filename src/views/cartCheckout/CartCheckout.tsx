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
import { useNotification } from "../../context/notificationContext/NotificationContext";
import { parseDateToRef } from "../../utils/dateUtils/dateUtils";

interface ExtraFields {
  parentData: Product[];
  onClickCancel?: () => void;
}

const CartCheckout: React.FC<CartCheckoutProps & ExtraFields> = ({
  parentData,
  onClickCancel,
}) => {
  const formProps = useForm<CartCheckoutProps>();
  const navigate = useNavigate();
  const { showSuccess, showError } = useNotification();
  const watchPaidAmount = formProps.watch("paidAmount");

  useEffect(
    () => {
      if (!formProps.getValues().totalAmount) {
        formProps.register("data", { value: parentData });
        const totalAmount = parentData.reduce(
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
      showError(error.response.data);
    }
  };

  const beforesubmit = async (formData: CartCheckoutProps) => {
    formData.purchaseReference = parseDateToRef(new Date());
  };

  return (
    <>
      <FormGroup
        formProps={formProps}
        onSubmit={handleSubmitForm}
        beforesubmit={beforesubmit}
        onClickCancel={onClickCancel}
      >
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
