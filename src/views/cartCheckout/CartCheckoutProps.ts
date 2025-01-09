import { Product } from "../../models/product/Product";

export interface CartCheckoutProps {
  totalAmount?: number;
  amountReturn?: number;
  paidAmount?: number;
  data?: Product[];
}
