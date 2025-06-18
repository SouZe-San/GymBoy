import { adminApi } from "@/api";

export const memberCreate = async (membership_type: string, email: string) =>
  adminApi.post("/create", { membership_type, email });
export const memberUpdate = async (
  email: string,
  phone: string,
  name: string,
  package_name: string
) => adminApi.post("/create", { email, phone, name, package_name });

export const announcementCreate = async (title: string, message: string, type: string) =>
  adminApi.post("/create", { title, message, type });

export const sendNotification = async (amount: string) => adminApi.post("/create", { amount });

export const getMembers = async () => adminApi.get("/members");
export const getAnnouncements = async () => adminApi.get("/announcements");
