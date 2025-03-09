import { create } from "zustand";
import { AuthStateType } from "../types/auth";

export const useAuthStore = create<AuthStateType>((set) => ({
  user: localStorage.getItem("pm_user")
    ? JSON.parse(localStorage.getItem("pm_user") || "")
    : null,
  setUser: (user) => {
    set({ user });
    localStorage.setItem("pm_user", JSON.stringify(user));
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem("pm_user");
  },
}));
