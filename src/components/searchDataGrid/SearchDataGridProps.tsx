export interface SearchDataGridProps<T> {
  data: T[];
  columns: {
    key: keyof T;
    label: string;
    width?: string;
  }[];
  editUrl: string;
  deleteUrl?: string;
}
