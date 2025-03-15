import { Hono } from "hono";
import { supabase } from "../database";
import { ApiError } from "../utils/ApiError";
import { resStatus } from "../utils/responseStatus";

const app = new Hono();

// !View bill notification
app.get("/notifications", async (c) => {
  const { userId } = await c.req.json();
  try {
    if (!userId) {
      return c.body("User not found", resStatus.NotFound);
    }
    if (!supabase) {
      throw new ApiError(400, "Database connection failed");
    }

    const { data: notifications, error } = await supabase
      .from("notifications")
      .select("*")
      .eq("member_id", userId);

    if (error) {
      console.error("Notifications collection error: ", error);
      throw new ApiError(resStatus.Forbidden, "Error Throwing from user details at Data fetching");
    }

    c.status(200);
    return c.json({ data: notifications });
  } catch (error) {
    console.error("Error From User Notifications: ", error);
    return c.body("Server Error", resStatus.InternalServerError);
  }
});

//! View Bill Receipts
app.get("/bill", async (c) => {
  const { userId } = await c.req.json();
  try {
    if (!userId) {
      return c.body("User not found", resStatus.NotFound);
    }
    if (!supabase) {
      throw new ApiError(400, "Database connection failed");
    }

    const { data: bills, error } = await supabase.from("bill").select("*").eq("member_id", userId);

    if (error) {
      console.error("Bills collection error: ", error);
      throw new ApiError(resStatus.Forbidden, "Error Throwing from user details at Data fetching");
    }

    c.status(200);
    return c.json({ data: bills });
  } catch (error) {
    console.error("Error From User Bills: ", error);
    return c.body("Server Error", resStatus.InternalServerError);
  }
});

export default app;
