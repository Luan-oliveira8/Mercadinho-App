import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import InputGroup from "../../components/inputGroup/InputGroup";
import FormGroup from "../../components/formGroup/FormGroup";
import { ProductRegisterProps } from "./ProductRegisterProps";
import { REGISTER_PRODUCT } from "../../utils/enums/productUrlTypeEnum/ProductUrlTypeEnum";
import { CREATED } from "../../utils/enums/httpStatusCodeTypeEnum/HttpStatusCodeTypeEnum";

const ProductRegisterView: React.FC = () => {
  const formProps = useForm<ProductRegisterProps>();

  const handleSubmitForm = async (formData: ProductRegisterProps) => {
    try {
      const response = await axios.post(REGISTER_PRODUCT.value, formData);
      if (response.status === CREATED.value) {
        console.log(response.statusText);
      } else {
        console.log("Product not registered.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(`Something went wrong status: ${error.status}.`);
      }
    }
  };

  return (
    <FormGroup
      onSubmit={handleSubmitForm}
      formProps={formProps}
      labelButtonSubmit="Sign Up"
    >
      <InputGroup
        name="name"
        label="Name"
        type="text"
        control={formProps.control}
        validation={{
          required: true,
          minLength: {
            value: 4,
            message: "Product name must be at least 4 character",
          },
        }}
        style={{ marginBottom: "10px" }}
      />
      <InputGroup
        name="barcode"
        label="Barcode"
        type="text"
        control={formProps.control}
        validation={{
          required: true,
          minLength: {
            value: 4,
            message: "Barcode must be at least 4 character",
          },
        }}
        style={{ marginBottom: "10px" }}
      />
      <InputGroup
        name="selPrice"
        label="SelPrice"
        control={formProps.control}
        type="number"
        validation={{
          required: "This field is required",
          min: {
            value: 1,
            message: "Value must be greater than zero",
          },
        }}
        style={{ marginBottom: "10px" }}
      />
    </FormGroup>
  );
};

export default ProductRegisterView;
