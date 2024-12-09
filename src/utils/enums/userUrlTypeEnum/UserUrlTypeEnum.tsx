import MERCADINHO_BASE_URL from "../../../config/apiConfig/ApiConfig";

export const USER_REGISTER = {
  value: `${MERCADINHO_BASE_URL}/users/register`,
};
export const USER_LOGIN = {
  value: `${MERCADINHO_BASE_URL}/users/login`,
};

export const USER_URL_TYPE_ENUM = [USER_REGISTER, USER_LOGIN];
