import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/user/slice";
import { useForm } from "react-hook-form";
import axios from "axios";
import InputGroup from "../../components/inputGroup/InputGroup";
import FormGroup from "../../components/formGroup/FormGroup";
import { USER_LOGIN } from "../../utils/enums/userUrlTypeEnum/UserUrlTypeEnum";
import { OK } from "../../utils/enums/httpStatusCodeTypeEnum/HttpStatusCodeTypeEnum";
import { UserLoginProps } from "./UserLoginProps";
import { User } from "../../models/user/User";

const UserLoginView: React.FC = () => {
  const formProps = useForm<UserLoginProps>();
  const { currentUser } = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(
    () => {
      console.log("User logged in successfully:", currentUser);
    }, // eslint-disable-next-line
    [currentUser]
  );

  const handleSubmitForm = async (formData: UserLoginProps) => {
    try {
      const response = await axios.post<User>(USER_LOGIN.value, formData);

      if (response.status === OK.value) {
        console.log(response.data);

        dispatch(
          login({
            name: response.data.name,
            email: response.data.email,
            isLogged: true,
          })
        );
      } else {
        console.log(
          "Login failed. Please check your email and password and try again."
        );
      }
    } catch (error: any) {
      console.log(`Something went wrong status: ${error.status}.`);
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
