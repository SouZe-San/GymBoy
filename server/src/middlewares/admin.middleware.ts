import { createMiddleware } from "hono/factory";

import { resStatus } from "../utils/responseStatus";

const adminMiddleware = createMiddleware(async (c, next) => {
  const user = c.get("user");
  if (user && user.role === "admin") {
    return next();
  }
  return c.body("You are not authorized to access this resource", resStatus.Forbidden);
});

export default adminMiddleware;
