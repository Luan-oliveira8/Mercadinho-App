import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Form, Input } from "reactstrap";
import { UserRegisterProps } from "./UserRegisterProps"; // Importação do tipo

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
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => <Input placeholder="teste" {...field} />}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => <Input placeholder="testeeee" {...field} />}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default UserRegisterView;
