import { UserRepository } from "../repositories/user-repository";

export class UserService {
  static async getAll(page: number, per_page: number) {
    try {
      const user = await UserRepository.getAll(page, per_page);
      return user;
    } catch (error) {
      throw error;
    }
  }
  static async update(roles: number[], id: number) {
    try {
      const user = await UserRepository.update(roles, id);
      return user;
    } catch (error) {
      throw error;
    }
  }
}
