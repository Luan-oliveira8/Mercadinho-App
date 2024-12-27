import { ColumnProps } from "../searchDataGrid/SearchDataGridProps";

export interface ProductSearchModalProps {
  columns: ColumnProps[];
  closeModal?: () => void;
  subimitModal?: () => void;
  size?: string;
  titleModal?: string;
  data: any[];
}
