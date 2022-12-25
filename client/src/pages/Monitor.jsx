import { List, ListItem, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import { WS_URL } from "../api";
import NavbarLoggedIn from "../components/Navbar/NavbarLoggedIn";

const Monitor = () => {
  const [devicesData, setDevicesData] = useState([{}]);

  useEffect(() => {
    const ws = new WebSocket(WS_URL);
    ws.onmessage = (event) => {
      const json = JSON.parse(event.data);
      setDevicesData((current) => [...current, json]);
    };
  }, []);

  return (
    <>
      <NavbarLoggedIn />
      <Typography
        color="primary"
        component="h2"
        textAlign="center"
        variant="h4"
        sx={{ marginTop: "3rem" }}
      >
        Realtime Monitoring
      </Typography>
      <Container
        maxWidth="sm"
        sx={{
          height: "65vh",
          border: "3px solid rgb(24,118,209)",
          overflow: "auto",
          marginTop: "2rem",
        }}
      >
        {devicesData.map((device, i) => {
          return (
            i !== 0 && (
              <div
                key={i}
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "space-around",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                <Typography>
                  Temperature: {device.temperatureDeviceData}{" "}
                </Typography>
                <Typography>
                  Pollution: {device.waterPollutionDeviceData}
                </Typography>
                <Typography>Oxygen: {device.oxygenDeviceData}</Typography>
              </div>
            )
          );
        })}
      </Container>
    </>
  );
};

export default Monitor;
