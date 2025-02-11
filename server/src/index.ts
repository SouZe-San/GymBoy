// hello#00@db
import { Hono } from "hono";
import { cors } from "hono/cors";
import { supabaseConnection } from "./database";

const app = new Hono().basePath("api/v1");

app.use(
  "/*",
  cors({
    origin: "http://localhost:5173",
    allowMethods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

// supabase connection fire
supabaseConnection().then(() => {
  console.log(`⚙️ Server is running on 3000`);
});

export { app };
