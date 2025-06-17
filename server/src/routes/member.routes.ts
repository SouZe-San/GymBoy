import { Hono } from "hono";
import { supabase } from "../database";
import { ApiError } from "../utils/ApiError";
import { resStatus } from "../utils/responseStatus";
import { Context } from "hono";
import { adminId } from "./admin.routes";

const app = new Hono();

export const userId = async (mail: string) => {
  // check if the user exists
  const { data: users, error } = await supabase!
    .from("users")
    .select("id")
    .eq("email", "some@gmail.com");
  return users && users.length > 0 ? users[0].id : null;
};

// !View bill notification
app.get("/notifications", async (c: Context) => {
  try {
    // const { email } = await c.req.json();
    // if (!email) {
    //   return c.body("User not found", resStatus.NotFound);
    // }
    if (!supabase) {
      throw new ApiError(400, "Database connection failed");
    }

    const user_id = await userId("");
    const admin_id = await adminId();
    const { data: notifications, error } = await supabase
      .from("notifications")
      .select("*")
      .or("member_id.eq." + user_id + ",admin_id.eq." + admin_id);

    if (error) {
      console.error("Notifications collection error: ", error);
      throw new ApiError(resStatus.Forbidden, "Error Throwing from user details at Data fetching");
    }

    c.status(200);
    return c.json({ notifications });
  } catch (error) {
    console.error("Error From User Notifications: ", error);
    return c.body("Server Error", resStatus.InternalServerError);
  }
});

//! View Bill Receipts
app.get("/bills", async (c) => {
  try {
    if (!supabase) {
      throw new ApiError(400, "Database connection failed");
    }

    const user_id = await userId("");

    const { data: bills, error } = await supabase
      .from("bills")
      .select("*")
      .eq("member_id", user_id);

    if (error) {
      console.error("Bills collection error: ", error);
      throw new ApiError(resStatus.Forbidden, "Error Throwing from user details at Data fetching");
    }

    c.status(200);
    return c.json({ bills });
  } catch (error) {
    console.error("Error From User Bills: ", error);
    return c.body("Server Error", resStatus.InternalServerError);
  }
});

export default app;
