export interface SearchDataGridProps {
  columns: ColumnProps[];
  titleGrid: string;
  editUrl: string;
  deleteUrl?: string;
  getDataUrl: string;
}

export interface ColumnProps {
  key: string;
  label: string;
  width?: string;
}
