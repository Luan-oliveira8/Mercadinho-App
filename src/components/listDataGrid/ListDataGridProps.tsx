import { ColumnProps } from "../searchDataGrid/SearchDataGridProps";

export interface ListDataGridProps {
  columns: ColumnProps[];
  data: any[];
  className?: string;
  onIncreaseQuantity: (item: any) => unknown;
  onDecreaseQuantity: (item: any) => unknown;
  onDeleteProduct: (item: any) => unknown;
}
