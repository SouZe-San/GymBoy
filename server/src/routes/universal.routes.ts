import { app } from "..";
import { userRegister } from "../controllers/user.controller";

// Base route
app.get("/", async (c) => {
  return c.text("System Urrra denge !!! 🚀");
});

// 404 Not Found route
app.get("/notfound", (c) => {
  return c.notFound();
});

// registration
app.post("/user/registration", userRegister);

// login

// logout
