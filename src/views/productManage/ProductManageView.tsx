import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import axios from "axios";
import InputGroup from "../../components/inputGroup/InputGroup";
import FormGroup from "../../components/formGroup/FormGroup";
import { ProductManageViewProps } from "./ProductManageViewProps";
import {
  EDIT_PRODUCT,
  REGISTER_PRODUCT,
} from "../../utils/enums/productUrlTypeEnum/ProductUrlTypeEnum";
import {
  CREATED,
  OK,
} from "../../utils/enums/httpStatusCodeTypeEnum/HttpStatusCodeTypeEnum";

const ProductManageView: React.FC = () => {
  const formProps = useForm<ProductManageViewProps>();
  const location = useLocation();
  const { selectedItem } = location.state || {};

  useEffect(
    () => {
      if (selectedItem) {
        formProps.setValue("barcode", selectedItem.barcode);
        formProps.setValue("name", selectedItem.name);
        formProps.setValue("selPrice", selectedItem.selPrice);
      } else {
        formProps.setValue("barcode", undefined);
        formProps.setValue("name", undefined);
        formProps.setValue("selPrice", undefined);
      }
    }, // eslint-disable-next-line
    [selectedItem]
  );

  const handleSubmitForm = async (formData: any) => {
    if (selectedItem) {
      await handleFormEdit(formData);
    } else {
      await handleFormRegister(formData);
    }
  };

  const handleFormRegister = async (formData: any) => {
    try {
      const response = await axios.post(REGISTER_PRODUCT.value, formData);
      if (response.status === CREATED.value) {
        console.log(`Product register successfully: ${response.statusText}`);
      } else {
        console.log("Product not registered.");
      }
    } catch (error: any) {
      console.log(`Something went wrong status: ${error.status}.`);
    }
  };

  const handleFormEdit = async (formData: any) => {
    try {
      const response = await axios.patch(
        `${EDIT_PRODUCT.value}${selectedItem.id}`,
        formData
      );
      if (response.status === OK.value) {
        console.log(`Product edited successfully: ${response.statusText}`);
      } else {
        console.log("Product not edited.");
      }
    } catch (error: any) {
      console.log(`Something went wrong status: ${error.status}.`);
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

export default ProductManageView;
