import { PaginateType, UserUpdateType } from "../types/user";
import { axios } from "./AxiosInstance";

export const UserApi = {
    getAll: async (payload: PaginateType) => {
        const response = await axios.get("/api/admin/v1/users?" + `page=${payload.page}` + `&per_page=${payload.per_page}`);
        // console.log(response?.data?.data?.data, 'response')
        return response?.data?.data;
    },
    update: async (payload: UserUpdateType) => {
        const response = await axios.put("/api/admin/v1/users/" + payload.id , {roles: payload.roles});
        return response?.data?.data;
    },
}
