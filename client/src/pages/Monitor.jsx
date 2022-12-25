import React, { useState, useEffect } from "react";
import { WS_URL } from "../api";
import NavbarLoggedIn from "../components/Navbar/NavbarLoggedIn";

const Monitor = () => {
  const [devicesData, setDevicesData] = useState("");

  return (
    <>
      <NavbarLoggedIn />
      <div>Monitor</div>
    </>
  );
};

export default Monitor;
