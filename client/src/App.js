import React, { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import UserContext from "./context/UserContext";
function App() {
  const theme = createTheme();
  const [user, setUser] = useState(null);

  const userProviderValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={userProviderValue}>
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={user ? <Home /> : <Navigate to="sign-up" />}
            />
            <Route path="sign-in" element={user ? <Home /> : <SignIn />} />
            <Route path="sign-up" element={user ? <Home /> : <SignUp />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
