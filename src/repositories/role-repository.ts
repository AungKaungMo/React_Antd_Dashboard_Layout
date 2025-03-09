import { RoleApi } from "../apis/Role";

export const RoleRepository = {
  getAll: async (page: number, per_page: number) => {
    const result = await RoleApi.getAll({ page, per_page });
    const { data, current_page, last_page, total } = result;

    return { data, current_page, last_page, page, per_page, total };
  },
  create: async (name: string, permissionIds: number[]) => {
    const result = await RoleApi.create({ name, permissionIds });
    return result;
  },
  update: async (name: string, permissionIds: number[], id: number) => {
    const result = await RoleApi.update({ name, permissionIds, id });
    return result;
  },
};
