import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { UserRegisterProps } from "./UserManageProps";
import InputGroup from "../../components/inputGroup/InputGroup";
import FormGroup from "../../components/formGroup/FormGroup";
import { USER_REGISTER } from "../../utils/enums/userUrlTypeEnum/UserUrlTypeEnum";
import { CREATED } from "../../utils/enums/httpStatusCodeTypeEnum/HttpStatusCodeTypeEnum";
import { useNotification } from "../../context/notificationContext/NotificationContext";
import { ROUTE_LIST_PRODUCT } from "../../utils/enums/routeTypeEnum/RouteTypeEnum";
import { useDispatch } from "react-redux";
import { login } from "../../redux/user/slice";

const UserManageView: React.FC = () => {
  const formProps = useForm<UserRegisterProps>();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isEdit } = location.state || {};
  const { showSuccess, showError } = useNotification();

  useEffect(
    () => {
      if (isEdit) {
        formProps.setValue("email", "Teste");
        formProps.setValue("name", "Teste");
      }
    }, // eslint-disable-next-line
    [isEdit]
  );

  const handleSubmitForm = async (formData: UserRegisterProps) => {
    try {
      const response = await axios.post(USER_REGISTER.value, formData);

      if (response.status === CREATED.value) {
        showSuccess(`Bem-vindo, ${response.data.name}!`);

        dispatch(
          login({
            name: response.data.name,
            email: response.data.email,
            isLogged: true,
          })
        );
        navigate(ROUTE_LIST_PRODUCT.value); // TODO: Implement the view Home futurally to redirect it
      } else {
        showError("User not registered.");
      }
    } catch (error: any) {
      showError(error.response.data);
    }
  };

  return (
    <FormGroup
      onSubmit={handleSubmitForm}
      formProps={formProps}
      labelButtonSubmit={isEdit ? "Confirm" : "Sign Up"}
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
        name="email"
        label="E-mail"
        type="email"
        control={formProps.control}
        validation={{
          required: "The email field is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email address",
          },
        }}
        style={{ marginBottom: "10px" }}
        disabled={isEdit}
      />
      <InputGroup
        name="password"
        label={isEdit ? "New Password" : "Password"}
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

export default UserManageView;
