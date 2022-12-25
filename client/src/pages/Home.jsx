import React, { useContext } from "react";
import { Box } from "@mui/system";
import { Container, Typography, Button, Stack } from "@mui/material";
import NavbarLoggedIn from "../components/Navbar/NavbarLoggedIn";
import StyledLink from "../components/Navbar/StyledLink";
import { getReportRequest } from "../api";

const Home = () => {
  const downloadReport = async () => {
    try {
      const reportResponse = await getReportRequest();
      const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(reportResponse.data)
      )}`;

      const link = document.createElement("a");
      link.href = jsonString;
      link.download = "data.json";

      link.click();
    } catch (e) {
      console.error(e);
    }
  };
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
            <Button onClick={downloadReport} variant="outlined">
              download devices data
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
