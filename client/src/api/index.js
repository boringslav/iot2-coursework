import axios from "axios";

const BASE_URL = "http://localhost:9000";

export const signUpRequest = async ({
  username,
  password,
  repeatedPassword,
}) => {
  return await axios.post(`${BASE_URL}/auth/sign-up`, {
    username,
    password,
    repeatedPassword,
  });
};
