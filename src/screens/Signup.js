import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import { signupUser } from "../config/firebasemethods";

function Signup() {
  const [model, setModel] = useState({});

  const signUp = () => {
    signupUser(model)
      .then((res) => {
        console.log("User signed up successfully:", res);
      })
      .catch((error) => {
        console.error("Signup error:", error);
      });
  };

  return (
    <Box>
      <Typography variant="h4">Sign Up</Typography>
      <Box className="p-2">
        <TextField
          onChange={(e) => setModel({ ...model, email: e.target.value })}
          variant="standard"
          label="Email"
          type="email"
        />
      </Box>
      <Box className="p-2">
        <TextField
          onChange={(e) => setModel({ ...model, password: e.target.value })}
          variant="standard"
          label="Password"
          type="password"
        />
      </Box>
      <Box className="p-4">
        <Button onClick={signUp} variant="contained">
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}

export default Signup;
