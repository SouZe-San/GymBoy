import { authApi } from "@/api";
import type { RegisterBody } from "@/types/auth.type";
export const adminLogin = async (email: string, password: string) =>
  authApi.post("/admin/login", { email, password });
export const userLogin = async (email: string, password: string) =>
  authApi.post("/login", { email, password });

export const adminRegistration = async (body: RegisterBody) => authApi.post("/admin/login", body);
export const userRegistration = async (body: RegisterBody) => authApi.post("/login", body);
