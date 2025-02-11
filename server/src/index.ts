// hello#00@db
import { Hono } from "hono";
import { databaseConnection } from "./database";
import { cors } from "hono/cors";
const app = new Hono().basePath("api/v1");

app.use(
  "/*",
  cors({
    origin: "http://localhost:5173",
    allowMethods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

databaseConnection()
  .then(() => {
    console.log(`⚙️ Server is running at port : 3000`);
  })
  .catch((err) => {
    console.log("Supabase connection failed !!! ", err);
  });

export { app };
