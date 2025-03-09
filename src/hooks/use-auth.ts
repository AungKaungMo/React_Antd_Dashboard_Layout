import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../services/auth-service";

export const useLogin = () => {
  return useMutation({
    mutationFn: ({ emp_id, password }: { emp_id: string; password: string }) =>
      AuthService.login(emp_id, password),
  });
};
