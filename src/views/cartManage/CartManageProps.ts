import { Product } from "../../models/product/Product";

export interface CartManageProps {
  cartProducts?: Product[];
  searchType: string;
  search: string;
}
