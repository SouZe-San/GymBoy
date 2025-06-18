import { Hono } from "hono";
import { cors } from "hono/cors";
import { supabaseConnection } from "./database";
import { logger } from "hono/logger";

// import other apps
import userRoutes from "./routes/user.routes";
import memberRoutes from "./routes/member.routes";
import adminRoutes from "./routes/admin.routes";
import authRoutes from "./routes/auth.routes";

//middleware
import authMiddleware from "./middlewares/auth.middleware";
import { announcementFire, systemFire } from "./utils/tempData";

// main app
const app = new Hono().basePath("/api/v1");

app.use(logger());

app.use(
  "/*",
  cors({
    origin: "http://localhost:5173",
    allowMethods: ["POST", "GET", "PATCH", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// supabase connection fire
supabaseConnection().then(() => {
  console.log(`⚙️ Server is running on 3000`);
});

// Base route
app.get("/", async (c) => {
  return c.text("System Urrra denge !!! 🚀");
});

// Fake routes for testing purposes
app.get("/fake/members", async (c) => {
  systemFire();
  return c.text("System Urrra denge !!! 🚀");
});
app.get("/fake/ann", async (c) => {
  announcementFire();
  return c.text("System Urrra denge !!! 🚀");
});

// 404 Not Found route
app.get("/notfound", (c) => {
  return c.notFound();
});

// Connect other apps
app.route("/user", userRoutes);
app.route("/auth", authRoutes);
app.route("/admin", adminRoutes);
app.route("/member", memberRoutes);

export default app;
