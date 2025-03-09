import { PermissionRepository } from "../repositories/permission-repository";

export class PermissionService {
  static async getAll(page: number, per_page: number) {
    try {
      const permission = await PermissionRepository.getAll(page, per_page);
      return permission;
    } catch (error) {
      throw error;
    }
  }
  static async create(name: string) {
    try {
      const permission = await PermissionRepository.create(name);
      return permission;
    } catch (error) {
      throw error;
    }
  }
  static async update(name: string, id: number) {
    try {
      const permission = await PermissionRepository.update(name, id);
      return permission;
    } catch (error) {
      throw error;
    }
  }
}
