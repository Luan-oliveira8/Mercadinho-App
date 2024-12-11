export interface SearchDataGridProps<
  T extends Record<string | number, unknown>
> {
  data: T[];
  columns: {
    key: keyof T;
    label: string;
    width?: string;
  }[];
}
