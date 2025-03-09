import { PermissionApi } from "../apis/Permission";

export const PermissionRepository = {
  getAll: async (page: number, per_page: number) => {
    const result = await PermissionApi.getAll({ page, per_page });
    const { data, current_page, last_page, total } = result;

    return { data, current_page, last_page, page, per_page, total };
  },
  create: async (name: string) => {
    const result = await PermissionApi.create({ name });
    // const { data } = result;
    console.log(result, "result");
    return result;
  },
  update: async (name: string, id: number) => {
    const result = await PermissionApi.update({ name, id });
    return result;
  },
};
