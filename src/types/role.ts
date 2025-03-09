export type RoleListType = {
  id: number;
  key: number;
  name: string;
  permissions: {
    id: number;
  }[];
};

export type RoleCreateType = {
  name: string;
  permissionIds: number[];
};

export type RoleUpdateType = {
  id: number;
  name: string;
  permissionIds: number[];
};
