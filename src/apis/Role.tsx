import { RoleCreateType, RoleUpdateType } from "../types/role";
import { PaginateType } from "../types/user";
import { axios } from "./AxiosInstance";

export const RoleApi = {
    getAll: async (payload: PaginateType) => {
        const response = await axios.get("/api/admin/v1/roles?" + `page=${payload.page}` + `&per_page=${payload.per_page}`);
        // console.log(response?.data?.data?.data, 'response')
        return response?.data?.data;
    },
    create: async (payload: RoleCreateType) => {
        const response = await axios.post("/api/admin/v1/roles", payload);
        return response?.data?.data;
    },
    update: async (payload: RoleUpdateType) => {
        const response = await axios.put("/api/admin/v1/roles/" + payload.id , {name: payload.name, permissionIds: payload.permissionIds});
        return response?.data?.data;
    },
}
