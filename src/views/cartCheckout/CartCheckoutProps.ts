import { Product } from "../../models/product/Product";

export interface CartCheckoutProps {
  totalAmount?: number;
  amountReturn?: number;
  paidAmount?: number;
  purchaseReference?: string;
  data?: Product[];
  onClickCancel?: () => void;
}
