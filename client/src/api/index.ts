import axios from "axios";

const authUrl = import.meta.env.VITE_API_URL + "/auth" || "http://localhost:3000/api/v1/auth";
const adminUrl = import.meta.env.VITE_API_URL + "/admin" || "http://localhost:3000/api/v1/auth";
const memberUrl = import.meta.env.VITE_API_URL + "/member" || "http://localhost:3000/api/v1/auth";

export const authApi = axios.create({
  baseURL: authUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const adminApi = axios.create({
  baseURL: adminUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
export const memberApi = axios.create({
  baseURL: memberUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
export const userApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/user" || "http://localhost:3000/api/v1/user",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const axiosErrorHandler = (error: unknown, from: string) => {
  console.log(`\n${from}\n`);
  if (axios.isAxiosError(error)) {
    if (error.message) {
      console.error("Error Message:", error.message);
    }
  } else {
    console.error("Unexpected Error  :", error);
  }
};
