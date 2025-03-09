import { axios } from "./AxiosInstance";

export const AuthApi = {
  login: async (credentials: { emp_id: string; password: string }) => {
    const response = await axios.post("/api/admin/v1/login", credentials);
    return response?.data?.data;
  },
};
