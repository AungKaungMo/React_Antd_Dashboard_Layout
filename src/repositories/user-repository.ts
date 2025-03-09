import { UserApi } from "../apis/User";

export const UserRepository = {
  getAll: async (page: number, per_page: number) => {
    const result = await UserApi.getAll({ page, per_page });
    const { data, current_page, last_page, total } = result;

    return { data, current_page, last_page, page, per_page, total };
  },
  update: async (roles: number[], id: number) => {
    const result = await UserApi.update({ roles, id });
    return result;
  },
};
