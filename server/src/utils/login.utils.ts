import { compare } from "bcrypt";
import { sign } from "hono/jwt";

const isPasswordValid = async (password: string, hashedPassword: string) => {
  try {
    return await compare(password, hashedPassword);
  } catch (error) {
    console.error("Error from isPasswordValid: ", error);
    return false;
  }
};

const generateAccessToken = async (user: any) => {
  const payload = {
    _id: user._id,
    email: user.email,
    username: user.username,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 5,
  };
  const secret = process.env.ACCESS_TOKEN_SECRET ?? "SekiAsbe00Na?";
  return await sign(payload, secret);
};

export { isPasswordValid, generateAccessToken };
