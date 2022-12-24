import React, { useContext } from "react";
import { parseJWT } from "../utils/tokenUtils";
import UserContext from "../context/UserContext";
import NavbarLoggedIn from "../components/Navbar/NavbarLoggedIn";
const Home = () => {
  const { user } = useContext(UserContext);
  const parsedToken = parseJWT(user);
  console.log("Parsed Token", parsedToken);
  return (
    <>
      <NavbarLoggedIn />
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
