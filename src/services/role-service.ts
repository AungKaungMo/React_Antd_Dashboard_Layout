import { RoleRepository } from "../repositories/role-repository";

export class RoleService {
  static async getAll(page: number, per_page: number) {
    try {
      const role = await RoleRepository.getAll(page, per_page);
      return role;
    } catch (error) {
      throw error;
    }
  }
  static async create(name: string, permissionIds: number[]) {
    try {
      const role = await RoleRepository.create(name, permissionIds);
      return role;
    } catch (error) {
      throw error;
    }
  }
  static async update(name: string, permissionIds: number[], id: number) {
    try {
      const role = await RoleRepository.update(name, permissionIds, id);
      return role;
    } catch (error) {
      throw error;
    }
  }
}
