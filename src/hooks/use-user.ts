import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserService } from "../services/user-service";
import { UserUpdateType } from "../types/user";

export const useUser = (page: number, per_page: number) => {
  return useQuery({
    queryKey: ["users", { page, per_page }],
    queryFn: () => UserService.getAll(page, per_page),
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["users"],
    mutationFn: ({ roles, id }: UserUpdateType) =>
      UserService.update(roles, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
