import { useState } from "react";
import { Typography, TextField, Container, Grid } from "@mui/material";


function AdminRegisterForm({
  email,
  password,
  setEmail,
  setPassword,
}) {
  return (
    <>
      <Container style={{ textAlign: "center" }}>
        <br></br>
        <Typography variant="h5">Admin Registration:</Typography>
        <br></br>
        <Grid container spacing={2}>
          <br></br>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="text"
              name="email"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
            />
          </Grid>
          <br></br>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              name="password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
        <br></br>
      </Container>
    </>
  );
}

export default AdminRegisterForm;

