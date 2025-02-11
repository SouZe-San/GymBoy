import { Context, HonoRequest } from "hono";

const userRegister = async (c: Context) => {
  try {
    // collect the data from the request body
    const reqBody = c.req.formData;

    // check if any of the required fields are empty
    // check if the user already exists
    // create a new user
    // check if the user is created successfully
    // if not created throw an error
    if (c.error) {
      throw new Error("VAlo");
    }
    // Ultimately send the response as success
    return c.body("Tomar nam Joma poregache", 201);
  } catch (error) {
    // if any error occurs send the error response
    console.log("error from register: ", error);
  }
};

export { userRegister };
