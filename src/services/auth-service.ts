import { AuthRepository } from "../repositories/auth-repository";
import { useAuthStore } from "../store/auth-store";

export class AuthService {
  static async login(emp_id: string, password: string) {
    try {
      const user = await AuthRepository.login(emp_id, password);

      const { setUser } = useAuthStore.getState();
      setUser(user);

      return user;
    } catch (error) {
      throw error;
    }
  }

  static logout() {
    const { logout } = useAuthStore.getState();
    logout();
  }
}
