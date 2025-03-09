import { AuthApi } from "../apis/Auth";

export const AuthRepository = {
  login: async (emp_id: string, password: string) => {
    const data = await AuthApi.login({ emp_id, password });

    return {
      id: data?.id,
      name: data?.name,
      emp_id: data?.emp_id,
      token: data?.token,
      role: data?.role,
      permissions: data?.permissions,
    };
  },
};
