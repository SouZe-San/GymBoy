import { Hono } from "hono";
import { Context, HonoRequest } from "hono";
import { ApiError } from "../utils/ApiError";
import { resStatus } from "../utils/responseStatus";
import { supabase } from "../database";
import { hash } from "bcrypt";
import { generateAccessToken, isPasswordValid } from "../utils/login.utils";

const app = new Hono();

//! registration
app.post("/registration", async (c: Context) => {
  try {
    // collect the data from the request body
    const { name, email, password, phone } = await c.req.json();
    if ([name, email, password, phone].some((field) => field?.trim() === "")) {
      throw new ApiError(
        resStatus.InvalidInput,
        "All fields are required , Some of them are empty"
      );
    }

    // Log
    console.log("Data from registration: ", name, email, password, phone);

    if (!supabase) {
      throw new ApiError(400, "Database connection failed");
    }

    // check if any of the required fields are empty
    const { data: users, error } = await supabase.from("users").select("*").eq("email", email);

    // check if the user already exists
    if (users && users?.length > 0) {
      return c.body("User, You already exist !! Why again ?", 409);
    }
    if (error) {
      throw new ApiError(500, "Error Throwing from registration at Data fetching");
    }

    const hasPassword = await hash(password, 10);

    // create a new user
    let { data, error: insert_error } = await supabase
      .from("users")
      .insert([
        {
          name,
          email,
          password: hasPassword,
          phone,
          join_date: new Date(),
          role: "visitor",
        },
      ])
      .select();

    // if not created throw an error
    if (insert_error) {
      console.error("Error from registration: ", insert_error);
      throw new ApiError(500, "Error Throwing from registration at Data insertion");
    }

    if (c.error) {
      throw new ApiError(resStatus.Conflict, "Some this, ome of them are empty");
    }
    // Ultimately send the response as success
    return c.body("Tomar nam Joma poregache", 201);
  } catch (error) {
    // if any error occurs send the error response
    console.error("error from register: ", error);

    if (error instanceof Error) {
      const { message } = error;
      return c.body(message, 500);
    }
    return c.body("Something went Wrong in Server", 500);
  }
});

//! Login
app.post("/login", async (c: Context) => {
  // get the data from the request body

  const { email, password } = await c.req.json();

  // check if any of the required fields are empty
  if ([email, password].some((field) => field?.trim() === "")) {
    return c.body("All fields are required , Some of them are empty", 400);
  }

  if (!supabase) {
    throw new ApiError(400, "Database connection failed");
  }

  // check if the user exists
  const { data: users, error } = await supabase.from("users").select("*").eq("email", email);

  // if not found throw an error
  if (error) {
    console.error("Error from login: ", error);
    throw new ApiError(resStatus.Forbidden, "Error Throwing from login at Data fetching");
  }

  if (!users || users.length === 0) {
    return c.body("User not found", resStatus.NotFound);
  }

  // check if the password is valid
  const user = users[0];
  if (await isPasswordValid(password, user.password)) {
    return c.body("Invalid Password", 400);
  }

  const accessToken = await generateAccessToken(user);

  // send the response as success
  c.status(200);
  return c.json({ massage: "Login Successful", accessToken });
});

//! get user details
app.get("/", async (c: Context) => {
  // get the user id from the request params
  const { id } = await c.req.json();

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

  // check if the user exists
  const { data: users, error } = await supabase.from("users").select("*").eq("email", email);

  // if not found throw an error
  if (error) {
    console.error("Error from login: ", error);
    throw new ApiError(resStatus.Forbidden, "Error Throwing from login at Data fetching");
  }

  if (!users || users.length === 0) {
    return c.body("User not found", resStatus.NotFound);
  }

  // send the response as success
  c.status(200);
  return c.json({ massage: "Logout Successful" });
});

// View details

// Search Records
export default app;
