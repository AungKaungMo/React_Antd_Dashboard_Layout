import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PermissionService } from "../services/permission-service";

export const usePermission = (page: number, per_page: number) => {
  return useQuery({
    queryKey: ["permissions", page, per_page],
    queryFn: () => PermissionService.getAll(page, per_page),
    staleTime: 0,
  });
};

export const useCreatePermission = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["permissions"],
    mutationFn: ({ name }: { name: string }) => PermissionService.create(name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["permissions"] });
    },
  });
};

export const useUpdatePermission = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["permissions"],
    mutationFn: ({ name, id }: { name: string; id: number }) =>
      PermissionService.update(name, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["permissions"] });
    },
  });
};
