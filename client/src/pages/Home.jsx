import React, { useContext } from "react";
import { parseJWT } from "../utils/tokenUtils";
import UserContext from "../context/UserContext";
const Home = () => {
  const { user } = useContext(UserContext);
  const parsedToken = parseJWT(user);
  console.log("Parsed Token", parsedToken);
  return <div>Home</div>;
};

export default Home;
