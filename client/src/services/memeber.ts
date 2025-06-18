import { memberApi } from "@/api";

export const getAnnouncements = async () => memberApi.get("/notifications");
export const getBills = async () => memberApi.get("/bills");
