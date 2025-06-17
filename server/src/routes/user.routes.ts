import { Hono } from "hono";
import { Context, HonoRequest } from "hono";
import { ApiError } from "../utils/ApiError";
import { resStatus } from "../utils/responseStatus";
import { supabase } from "../database";

import { deleteCookie } from "hono/cookie";
import { adminId } from "./admin.routes";
import { userId } from "./member.routes";

const app = new Hono();

const cookieOptions: {
  path: string;
  secure: boolean;
  maxAge: number;
  httpOnly: boolean;
  domain?: string;
  sameSite?: "Strict" | "Lax" | "None" | "strict" | "lax" | "none" | undefined;
} = {
  path: "/",
  secure: false, // Set to true if using HTTPS
  maxAge: 60 * 60 * 24 * 5, // 5 days
  httpOnly: true,
  // domain: "localhost",
  sameSite: "Strict",
};

//! get user details
app.get("/", async (c: Context) => {
  // get the user id from the request params
  const id = await userId("");

  if (id === undefined) {
    return c.body("id Is not found", resStatus.InvalidInput);
  }

  if (!supabase) {
    throw new ApiError(400, "Database connection failed");
  }

  // check if the user exists
  const { data: users, error } = await supabase
    .from("users")
    .select("name, email, phone,join_date,role,join_date,membership_type")
    .eq("id", id);

  // if not found throw an error
  if (error) {
    console.error("Error from user details: ", error);
    throw new ApiError(resStatus.Forbidden, "Error Throwing from user details at Data fetching");
  }

  if (!users || users.length === 0) {
    return c.body("User not found", resStatus.NotFound);
  }

  // send the response as success
  c.status(200);
  return c.json({ data: users[0] });
});

//! get user details
app.get("/admin", async (c: Context) => {
  // get the user id from the request params
  const id = await adminId();
  if (id === undefined) {
    return c.body("id Is not found", resStatus.InvalidInput);
  }

  if (!supabase) {
    throw new ApiError(400, "Database connection failed");
  }

  // check if the user exists
  const { data: users, error } = await supabase.from("admins").select("name, email").eq("id", id);

  // if not found throw an error
  if (error) {
    console.error("Error from user details: ", error);
    throw new ApiError(resStatus.Forbidden, "Error Throwing from user details at Data fetching");
  }

  if (!users || users.length === 0) {
    return c.body("User not found", resStatus.NotFound);
  }

  // send the response as success
  c.status(200);
  return c.json({ data: users[0] });
});

//! update user full details
// @SouZe-San
// @ Not Gonna use this
app.patch("/:id", async (c: Context) => {
  // get the user id from the request params
  const id = c.req.param("id");

  // get the data from the request body
  const { name, email, phone, role, membership_type } = await c.req.json();

  if (!supabase) {
    throw new ApiError(400, "Database connection failed");
  }

  // check if the user exists
  const { data: users, error } = await supabase.from("users").select("id").eq("id", id);

  // if not found throw an error
  if (error) {
    console.error("Error from user details: ", error);
    throw new ApiError(resStatus.Forbidden, "Error Throwing from user details at Data fetching");
  }

  if (!users || users.length === 0) {
    return c.body("User not found", resStatus.NotFound);
  }

  // update the user details
  const { data, error: update_error } = await supabase
    .from("users")
    .update({ name, email, phone, role, membership_type })
    .eq("id", id);

  // if not updated throw an error
  if (update_error) {
    console.error("Error from user update: ", update_error);
    throw new ApiError(
      resStatus.InternalServerError,
      "Error Throwing from user update at Data update"
    );
  }

  // send the response as success
  c.status(200);
  return c.body("User details updated successfully");
});

//!logout
app.post("/logout", async (c: Context) => {
  // get the data from the request body
  const { email } = await c.req.json();

  // check if any of the required fields are empty
  if ([email].some((field) => field?.trim() === "")) {
    return c.body("All fields are required , Some of them are empty", 400);
  }

  if (!supabase) {
    throw new ApiError(400, "Database connection failed");
  }

  // // check if the user exists
  // const { data: users, error } = await supabase.from("users").select("*").eq("email", email);

  // if not found throw an error
  // if (error) {
  //   console.error("Error from login: ", error);
  //   throw new ApiError(resStatus.Forbidden, "Error Throwing from login at Data fetching");
  // }

  // if (!users || users.length === 0) {
  //   return c.body("User not found", resStatus.NotFound);
  // }
  deleteCookie(c, "auth_token", {
    path: "/",
    secure: false,
    domain: "localhost",
  });
  // send the response as success
  c.status(200);
  return c.json({ massage: "Logout Successful" });
});

// View details

// Search Records
export default app;
