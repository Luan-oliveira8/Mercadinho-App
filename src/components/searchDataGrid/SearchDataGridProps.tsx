export interface SearchDataGridProps<T> {
  columns: {
    key: keyof T;
    label: string;
    width?: string;
  }[];
  editUrl: string;
  deleteUrl?: string;
  getDataUrl: string;
}
