import axios from "axios";

const BASE_URL = "http://localhost:9000";

export const signUpRequest = async ({
  username,
  password,
  repeatedPassword,
}) => {
  return await axios.post(
    `${BASE_URL}/auth/sign-up`,
    {
      username,
      password,
      repeatedPassword,
    },
    {
      headers: { "content-type": "application/json" },
    }
  );
};

export const signInRequest = async ({ username, password }) => {
  return await axios.post(
    `${BASE_URL}/auth/sign-in`,
    {
      username,
      password,
    },
    {
      headers: { "content-type": "application/json" },
    }
  );
};
