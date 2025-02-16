import MERCADINHO_BASE_URL from "../../../config/apiConfig/ApiConfig";

export const REGISTER_PRODUCT = {
  value: `${MERCADINHO_BASE_URL}/products/register`,
};

export const GET_PRODUCTS = {
  value: `${MERCADINHO_BASE_URL}/products`,
};

export const DELETE_PRODUCTS = {
  value: `${MERCADINHO_BASE_URL}/products/delete/`,
};

export const EDIT_PRODUCT = {
  value: `${MERCADINHO_BASE_URL}/products/edit/`,
};

export const REGISTER_PURCHASE_AND_UPDATE_STOCK = {
  value: `${MERCADINHO_BASE_URL}/purchases/register-and-update-stock`,
};

export const PRODUCT_URL_TYPE_ENUM = [REGISTER_PRODUCT, GET_PRODUCTS];
