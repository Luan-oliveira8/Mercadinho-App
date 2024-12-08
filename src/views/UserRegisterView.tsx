import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form } from "reactstrap";
import { UserRegisterProps } from "./UserRegisterProps";
import Button from "../components/button/Button";
import InputGroup from "../components/inputGroup/InputGroup";

const UserRegisterView: React.FC = () => {
  const { control, handleSubmit, watch, ...formProps } =
    useForm<UserRegisterProps>();

  const whatchName = watch("name");

  useEffect(
    () => {
      console.log("Valores atualizados do formulário:", formProps.getValues());
    }, // eslint-disable-next-line
    [whatchName]
  );

  const handleSubmitForm = (data: UserRegisterProps) => {
    console.log("Form submitted with data:", formProps.getValues());
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <InputGroup
        name="name"
        label="password"
        type="text"
        control={control}
        validation={{
          required: true,
        }}
        style={{ marginBottom: "10px" }}
      />
      <InputGroup
        name="password"
        label="Password"
        control={control}
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
      <Button label="Submit" />
    </Form>
  );
};

export default UserRegisterView;
