import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import StyledLink from "./StyledLink";
import UserContext from "../../context/UserContext";
const NavbarLoggedIn = () => {
  const { user, setUser } = useContext(UserContext);

  const logout = (e) => {
    e.preventDefault();
    setUser(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IoT Coursework
          </Typography>
          <StyledLink to="/#">
            <Button color="inherit">Monitor</Button>
          </StyledLink>
          <Button color="warning" variant="text" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavbarLoggedIn;
