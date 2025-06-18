import { Hono } from "hono";
import { Context, HonoRequest } from "hono";
import { ApiError } from "../utils/ApiError";
import { resStatus } from "../utils/responseStatus";
import { supabase } from "../database";
import { generateAccessToken, isPasswordValid } from "../utils/login.utils";
import { setSignedCookie } from "hono/cookie";

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

//! registration
app.post("admin/registration", async (c: Context) => {
  try {
    // collect the data from the request body
    const { name, email, password, phone } = await c.req.json();

    // check if any of the required fields are empty
    if ([name, email, password, phone].some((field) => field?.trim() === "")) {
      throw new ApiError(
        resStatus.InvalidInput,
        "All fields are required , Some of them are empty"
      );
    }

    if (!supabase) {
      throw new ApiError(400, "Database connection failed");
    }

    // check if the user already exists
    const { data: users, error } = await supabase.from("admins").select("*").eq("email", email);

    if (users && users?.length > 0) {
      return c.body("User, You already exist !! Why again ?", 409);
    }
    if (error) {
      throw new ApiError(500, "Error Throwing from registration at Data fetching");
    }

    const hasPassword = await Bun.password.hash(password, {
      algorithm: "bcrypt",
    });

    // create a new user
    let { data, error: insert_error } = await supabase
      .from("admins")
      .insert([
        {
          name,
          email,
          password: hasPassword,
          phone,
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
app.post("/admin/login", async (c: Context) => {
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
  const { data: users, error } = await supabase.from("admins").select("*").eq("email", email);

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
  if (!(await isPasswordValid(password, user.password))) {
    return c.body("Invalid Password", 400);
  }

  const accessToken = await generateAccessToken(user, "admin");

  setSignedCookie(
    c,
    "auth_token",
    accessToken,
    process.env.COOKIE_SECRET ?? "this is what",
    cookieOptions
  );

  // send the response as success
  c.status(200);
  return c.json({
    massage: "Login Successful",
    accessToken,
    userName: user.name,
    userRole: "admin",
  });
});

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

    const hasPassword = await Bun.password.hash(password, {
      algorithm: "bcrypt",
    });

    // create a new user
    let { error: insert_error } = await supabase
      .from("users")
      .insert([
        {
          name,
          email,
          password: hasPassword,
          phone,
          join_date: new Date(),
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
  if (!(await isPasswordValid(password, user.password))) {
    return c.body("Invalid Password", 400);
  }

  const accessToken = await generateAccessToken(user, user.role);

  setSignedCookie(
    c,
    "auth_token",
    accessToken,
    process.env.COOKIE_SECRET ?? "this is what",
    cookieOptions
  );

  // send the response as success
  c.status(200);
  return c.json({ massage: "Login Successful", userName: user.name, userRole: user.role });
});
// Search Records
export default app;
