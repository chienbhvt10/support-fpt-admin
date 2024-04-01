export interface CommonResponse<DataType = any> {
  data: DataType | null;
  httpStatusCode: string;
  message: string | null;
  success: boolean;
  total: number;
  messageCode: string;
}

export interface Sort {
  sortBy: string;
  sortDirection: string;
}

export interface Paging {
  pageNumber: number;
  pageSize: number;
}

export interface DataRespond<D = any> {
  content: D;
  totalElements: number;
  size: number;
}
