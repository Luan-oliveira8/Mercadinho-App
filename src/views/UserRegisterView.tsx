import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form } from "reactstrap";
import { UserRegisterProps } from "./UserRegisterProps";
import Button from "../components/button/Button";
import InputGroup from "../components/inputGroup/InputGroup";
import FormGroup from "../components/formGroup/FormGroup";

const UserRegisterView: React.FC = () => {
  const formProps = useForm<UserRegisterProps>();

  const whatchName = formProps.watch("name");

  useEffect(
    () => {
      console.log("Valores atualizados do formulário:", formProps.getValues());
    }, // eslint-disable-next-line
    [whatchName]
  );

  const handleSubmitForm = (formData: UserRegisterProps) => {
    console.log("Form submitted with data:", formData);
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
        }}
        style={{ marginBottom: "10px" }}
      />
      <InputGroup
        name="password"
        label="Password"
        control={formProps.control}
        type="password"
        validation={{
          required: true,
          minLength: {
            value: 4,
            message: "Password must be at least 6 characters",
          },
        }}
        style={{ marginBottom: "10px" }}
      />
    </FormGroup>
  );
};

export default UserRegisterView;
