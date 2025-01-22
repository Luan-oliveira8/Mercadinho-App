import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/user/slice";
import { useNotification } from "../../context/notificationContext/NotificationContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import InputGroup from "../../components/inputGroup/InputGroup";
import FormGroup from "../../components/formGroup/FormGroup";
import { USER_LOGIN } from "../../utils/enums/userUrlTypeEnum/UserUrlTypeEnum";
import { OK } from "../../utils/enums/httpStatusCodeTypeEnum/HttpStatusCodeTypeEnum";
import { UserLoginProps } from "./UserLoginProps";
import { User } from "../../models/user/User";
import { HOME } from "../../utils/enums/routeTypeEnum/RouteTypeEnum";
import { useNavigate } from "react-router-dom";

const UserLoginView: React.FC = () => {
  const formProps = useForm<UserLoginProps>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showSuccess, showError } = useNotification();

  const handleSubmitForm = async (formData: UserLoginProps) => {
    try {
      const response = await axios.post<User>(USER_LOGIN.value, formData);

      if (response.status === OK.value) {
        showSuccess(`Bem-vindo, ${response.data.name}!`);

        dispatch(
          login({
            name: response.data.name,
            email: response.data.email,
            isLogged: true,
          })
        );
        navigate(HOME.value); // TODO: Implement the view Home futurally to redirect it
      } else {
        showError(
          "Login failed. Please check your email and password and try again."
        );
      }
    } catch (error: any) {
      showError(error.response.data);
    }
  };

  return (
    <FormGroup
      onSubmit={handleSubmitForm}
      formProps={formProps}
      labelButtonSubmit="Sign In"
    >
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

export default UserLoginView;
