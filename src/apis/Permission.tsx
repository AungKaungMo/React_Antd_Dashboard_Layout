import { axios } from "./AxiosInstance";

export const PermissionApi = {
    getAll: async (payload: { page: number; per_page: number}) => {
        const response = await axios.get("/api/admin/v1/permissions?" + `page=${payload.page}` + `&per_page=${payload.per_page}`);
        return response?.data?.data;
    },
    create: async (payload: { name: string }) => {
        const response = await axios.post("/api/admin/v1/permissions", payload);
        return response?.data?.data;
    },
    update: async (payload: { name: string, id: number }) => {
        const response = await axios.put("/api/admin/v1/permissions/" + payload.id , {name: payload.name});
        return response?.data?.data;
    },
}
