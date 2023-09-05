import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

// CSS
import "../../RegisterAndLoginForm.css";

function AdminRegisterPage() {
  const user = useSelector((store) => store.user);
  const [userGroup, setUserGroup] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: "REGISTER",
      payload: {
        userGroup: userGroup,
        email: email,
        password: password,
      },
    });
  }; // end registerUser

  useEffect(() => {
    if (user.registrationStatus === "success") {
      if (user.authorization_level === 1) {
        history.push("/vendors-list");
      } else {
        // redirect to the home page for other user groups
        history.push("/home");
      }
    }
  }, [user, history]);

  return (
    <Container
      className="register-page-container"
      maxWidth="xl" // Standard desktop width
    >
      {/* Image */}
      <img
        className="register-page-image"
        src="/images/shane-rounce-DNkoNXQti3c-unsplash.jpg"
        alt="Image of multiple hands touching the bark of a tree."
      />
      <div className="register-page-register-form-container">
        <form className="formPanel" onSubmit={registerUser}>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Register Admin User
          </Typography>
          {errors.registrationMessage && (
            <Typography
              className="alert"
              role="alert"
              variant="h3"
              color="error"
            >
              {errors.registrationMessage}
            </Typography>
          )}
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="userGroup"
              name="userGroup"
              value={userGroup}
              onChange={(e) => setUserGroup(e.target.value)}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <FormControlLabel
                value="Admin"
                control={<Radio />}
                label="Admin"
              />
            </RadioGroup>
            {userGroup === "Admin" && (
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
            )}
            <Button
              className="btn"
              type="submit"
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          </FormControl>
        </form>
      </div>
    </Container>
  );
}

export default AdminRegisterPage;
