import axios from "axios";
export const authApi = axios.create({
  baseURL: "http://localhost:3000/api/v1/auth",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

console.log("API URL:", import.meta.env.VITE_API_URL);

export const adminApi = axios.create({
  baseURL: "http://localhost:3000/api/v1/admin",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
export const memberApi = axios.create({
  baseURL: "http://localhost:3000/api/v1/member",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
export const userApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1" + "/user",
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
