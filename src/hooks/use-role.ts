import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { RoleService } from "../services/role-service";
import { RoleCreateType, RoleUpdateType } from "../types/role";

export const useRole = (page: number, per_page: number) => {
  return useQuery({
    queryKey: ["roles", { page, per_page }],
    queryFn: () => RoleService.getAll(page, per_page),
  });
};

export const useCreateRole = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["roles"],
    mutationFn: ({ name, permissionIds }: RoleCreateType) =>
      RoleService.create(name, permissionIds),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });
};

export const useUpdateRole = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["roles"],
    mutationFn: ({ name, permissionIds, id }: RoleUpdateType) =>
      RoleService.update(name, permissionIds, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });
};
