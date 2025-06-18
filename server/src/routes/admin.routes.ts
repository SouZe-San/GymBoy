import { Hono } from "hono";
import { Context, HonoRequest } from "hono";
import { ApiError } from "../utils/ApiError";
import { resStatus } from "../utils/responseStatus";
import { supabase } from "../database";
const app = new Hono();
import authMiddleware from "../middlewares/auth.middleware";
app.get("/", authMiddleware, async (c: Context) => {
  const user = c.get("user");
  return c.body("Hello from Admin - " + user.email);
});

export const adminId = async () => {
  // check if the user exists
  const { data: users, error } = await supabase!
    .from("admins")
    .select("id")
    .eq("email", "admin.gym@gym.com");
  return users && users.length > 0 ? users[0].id : null;
};

//! update_memberShip (Add Member)
app.patch("/create", async (c: Context) => {
  // get the data from the request body
  const { membership_type, email } = await c.req.json();

  if (!supabase) {
    throw new ApiError(400, "Database connection failed");
  }

  // check if the user exists
  const { data: users, error } = await supabase.from("users").select("id").eq("email", email);

  // if not found throw an error
  if (error) {
    console.error("Error from user details: ", error);
    throw new ApiError(resStatus.Forbidden, "Error Throwing from user details at Data fetching");
  }

  if (!users || users.length === 0) {
    return c.body("User not found", resStatus.NotFound);
  }

  const admin_id = await adminId();
  // update the user details
  const { data, error: update_error } = await supabase
    .from("users")
    .update({ membership_type, role: "member", join_date: new Date(), admin_id })
    .eq("email", email);

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

//! Read all members of an admin
app.get("/members", async (c: Context) => {
  if (!supabase) {
    throw new ApiError(400, "Database connection failed");
  }

  const admin_id = await adminId();
  // update the user details
  const { data, error: update_error } = await supabase
    .from("users")
    .select("name, email, phone,join_date,membership_type,due_amount")
    .eq("admin_id", admin_id);

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
  return c.json({ message: "User details updated successfully", members: data });
});

//! Delete Members
app.delete("/:id", async (c: Context) => {
  // get the user id from the request params
  const id = c.req.param("id");
  try {
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

    // delete the user
    const { data, error: delete_error } = await supabase.from("users").delete().eq("id", id);

    // if not deleted throw an error
    if (delete_error) {
      console.error("Error from user delete: ", delete_error);
      throw new ApiError(
        resStatus.InternalServerError,
        "Error Throwing from user delete at Data deletion"
      );
    }

    // send the response as success
    c.status(200);
    return c.body("User deleted successfully");
  } catch (error) {
    console.error("error from register: ", error);

    if (error instanceof Error) {
      const { message } = error;
      return c.body(message, 500);
    }
    return c.body("Something went Wrong in Server", 500);
  }
});

//! Update Members
app.patch("/update:id", async (c: Context) => {
  const id = c.req.param("id");
  try {
    if (id === undefined) {
      throw new ApiError(400, "User ID is required");
    }
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

    // get the data from the request body
    const { email, phone, name, package_name } = await c.req.json();

    // update the user details
    const { data, error: update_error } = await supabase
      .from("users")
      .update({ email, phone, name, membership_type: package_name })
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
  } catch (error) {
    console.error("error from register: ", error);

    if (error instanceof Error) {
      const { message } = error;
      return c.body(message, 500);
    }
    return c.body("Something went Wrong in Server", 500);
  }
});

//! Create Bills
app.post("/createBill", async (c: Context) => {
  // get the data from the request body
  const { userEmail, amount } = await c.req.json();
  try {
    if (!supabase) {
      throw new ApiError(400, "Database connection failed");
    }

    // check if the user exists
    const { data: users, error } = await supabase.from("users").select("id").eq("email", userEmail);

    // if not found throw an error
    if (error) {
      console.error("Error from user details: ", error);
      throw new ApiError(resStatus.Forbidden, "Error Throwing from user details at Data fetching");
    }

    if (!users || users.length === 0) {
      return c.body("User not found", resStatus.NotFound);
    }

    const admin_id = await adminId();
    // create the bill
    const { data, error: create_error } = await supabase
      .from("bills")
      .insert([{ member_id: users[0].id, amount, issue_date: new Date(), admin_id }]);

    // if not created throw an error
    if (create_error) {
      console.error("Error from bill creation: ", create_error);
      throw new ApiError(
        resStatus.InternalServerError,
        "Error Throwing from bill creation at Data creation"
      );
    }

    // send the response as success
    c.status(200);
    return c.body("Bill created successfully");
  } catch (error) {
    console.error("error from register: ", error);

    if (error instanceof Error) {
      const { message } = error;
      return c.body(message, 500);
    }
    return c.body("Something went Wrong in Server", 500);
  }
});

//! Assign Fee Package
app.patch("/assignFeePackage", async (c: Context) => {
  // get the data from the request body
  const { user_id, package_name } = await c.req.json();
  try {
    if (!supabase) {
      throw new ApiError(400, "Database connection failed");
    }

    // check if the user exists
    const { data: users, error } = await supabase.from("users").select("id").eq("id", user_id);

    // if not found throw an error
    if (error) {
      console.error("Error from user details: ", error);
      throw new ApiError(resStatus.Forbidden, "Error Throwing from user details at Data fetching");
    }

    if (!users || users.length === 0) {
      return c.body("User not found", resStatus.NotFound);
    }

    // check if the package exists
    const { data: packages, error: package_error } = await supabase
      .from("fee_packages")
      .select("id")
      .eq("name", package_name);

    // if not found throw an error
    if (package_error) {
      console.error("Error from package details: ", package_error);
      throw new ApiError(
        resStatus.Forbidden,
        "Error Throwing from package details at Data fetching"
      );
    }

    if (!packages || packages.length === 0) {
      return c.body("Package not found", resStatus.NotFound);
    }

    // assign the package
    const { data, error: assign_error } = await supabase
      .from("users")
      .update({ membership_type: package_name })
      .eq("id", user_id);

    // if not assigned throw an error
    if (assign_error) {
      console.error("Error from package assign: ", assign_error);
      throw new ApiError(
        resStatus.InternalServerError,
        "Error Throwing from package assign at Data update"
      );
    }

    // send the response as success
    c.status(200);
    return c.body("Package assigned successfully");
  } catch (error) {
    console.error("error from register: ", error);

    if (error instanceof Error) {
      const { message } = error;
      return c.body(message, 500);
    }
    return c.body("Something went Wrong in Server", 500);
  }
});

//! Assign Notification for monthly (alert to Member)
app.post("/sendNotification:id", async (c: Context) => {
  const id = c.req.param("id");
  try {
    if (id === undefined) {
      throw new ApiError(400, "User ID is required");
    }
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

    // get the data from the request body
    const { amount } = await c.req.json();

    const admin_id = await adminId();
    // update the user details
    const { error: update_error } = await supabase
      .from("notifications")
      .insert([
        {
          title: "Your membership fee is due",
          member_id: id,
          message: `Your monthly membership fee of $${amount} is due on ${new Date().getMonth()} 15, 2025.`,
          type: "payment",
          notification_date: new Date(),
          admin_id,
        },
      ])
      .select();

    // if not updated throw an error
    if (update_error) {
      console.error("Error from user update: ", update_error);
      throw new ApiError(
        resStatus.InternalServerError,
        "Error Throwing from user update at Data update"
      );
    }

    // send the response as success
    c.status(201);
    return c.json({ message: "Notification Send successfully" });
  } catch (error) {
    console.error("error from register: ", error);

    if (error instanceof Error) {
      const { message } = error;
      return c.body(message, 500);
    }
    return c.body("Something went Wrong in Server", 500);
  }
});

//! Create Announcement
app.post("/announcement/create", async (c: Context) => {
  try {
    // get the data from the request body
    const { title, message, type } = await c.req.json();

    if (!supabase) {
      throw new ApiError(400, "Database connection failed");
    }
    const admin_id = await adminId();
    // update the user details
    const { data, error: update_error } = await supabase
      .from("notifications")
      .insert([{ title, message, type, notification_date: new Date(), admin_id }])
      .select();

    // if not updated throw an error
    if (update_error) {
      console.error("Error from user update: ", update_error);
      throw new ApiError(
        resStatus.InternalServerError,
        "Error Throwing from user update at Data update"
      );
    }

    // send the response as success
    c.status(201);
    return c.json({ message: "Announcement Created" });
  } catch (error) {
    console.error("error from register: ", error);

    if (error instanceof Error) {
      const { message } = error;
      return c.body(message, 500);
    }
    return c.body("Something went Wrong in Server", 500);
  }
});

//! Get/Read Announcements
app.get("/announcements", async (c: Context) => {
  try {
    if (!supabase) {
      throw new ApiError(400, "Database connection failed");
    }

    const admin_id = await adminId();
    // update the user details
    const { data, error: update_error } = await supabase
      .from("notifications")
      .select("*")
      .eq("admin_id", admin_id);

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
    return c.json({ message: "Announcement Created", announcements: data });
  } catch (error) {
    console.error("error from register: ", error);

    if (error instanceof Error) {
      const { message } = error;
      return c.body(message, 500);
    }
    return c.body("Something went Wrong in Server", 500);
  }
});

// Report export
// Supplement store
// Diet Details

export default app;
