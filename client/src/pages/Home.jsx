import React, { useContext } from "react";
import { Box } from "@mui/system";
import { Container, Typography, Button, Stack } from "@mui/material";
import { parseJWT } from "../utils/tokenUtils";
import UserContext from "../context/UserContext";
import NavbarLoggedIn from "../components/Navbar/NavbarLoggedIn";
import StyledLink from "../components/Navbar/StyledLink";
const Home = () => {
  const { user } = useContext(UserContext);
  const parsedToken = parseJWT(user);
  console.log("Parsed Token", parsedToken);
  return (
    <>
      <NavbarLoggedIn />
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            IoT Coursework
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">
              <StyledLink to="/monitor">Realtime Monitoring</StyledLink>
            </Button>
            <Button variant="outlined">download devices data</Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
