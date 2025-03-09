export type UserListType = {
  id: number;
  key: number;
  name: string;
  emp_id: string;
  email: string;
  department: {
    id: number;
    name: string;
  };
  business: {
    id: number;
    name: string;
  };
  status: number;
  roles: {
    id: number;
  }[];
};

export type PaginateType = {
  page: number;
  per_page: number;
  search?: string;
};

export type UserUpdateType = {
  roles: number[];
  id: number;
  name?: string;
};
