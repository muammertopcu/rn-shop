export interface ProductFilterProps {
  onSortChange: (sort: SortParams) => void;
}

export interface SortParams {
  sortBy: string;
  order: string;
}
