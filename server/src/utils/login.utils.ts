import { sign } from "hono/jwt";

const isPasswordValid = async (password: string, hashedPassword: string) => {
  try {
    if (!password || !hashedPassword) {
      return false;
    }
    const isValid = await Bun.password.verify(password, hashedPassword);
    return isValid;
  } catch (error) {
    console.error("Error from isPasswordValid: ", error);
    return false;
  }
};

const generateAccessToken = async (user: any) => {
  const payload = {
    email: user.email,
    username: user.name,
    role: user.role,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 5,
  };
  const secret = process.env.ACCESS_TOKEN_SECRET ?? "SekiAsbe00Na?";
  return await sign(payload, secret);
};

export { isPasswordValid, generateAccessToken };
