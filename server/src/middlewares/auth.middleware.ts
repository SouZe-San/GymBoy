import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";
import { getSignedCookie } from "hono/cookie";
import { ApiError } from "../utils/ApiError";
import { resStatus } from "../utils/responseStatus";
import { ContentfulStatusCode } from "hono/utils/http-status";

const authMiddleware = createMiddleware(async (c, next) => {
  const token =
    c.req.header("Authorization")?.split(" ")[1] || (await getSignedCookie(c, "auth_token"));

  try {
    if (!token) {
      throw new ApiError(resStatus.Unauthorized, "Login Required to Access this Resource");
    }
    const secret = process.env.ACCESS_TOKEN_SECRET ?? "SekiAsbe00Na?";
    const decodedPayload = await verify(token as string, secret);

    console.log("\n\nDecoded Payload : ", decodedPayload);
    if (!decodedPayload) {
      throw new ApiError(resStatus.Unauthorized, "Token Not Valid");
    }
    c.set("user", {
      email: decodedPayload.email,
      role: decodedPayload.role,
    });
    return next();
  } catch (error) {
    // if any error occurs send the error response
    console.error("error from Middleware : ", error);
    if (error instanceof ApiError) {
      const { message, statusCode } = error;
      return c.body(message, statusCode as ContentfulStatusCode);
    }
    return c.body("Something went Wrong in Server", 500);
  }
});

export default authMiddleware;
