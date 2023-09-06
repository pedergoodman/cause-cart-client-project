// * - IMPORTING -
// React
import React, { useState, useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Router
import { useHistory } from "react-router-dom";
// CSS
import "../RegisterAndLoginForm.css";
// MUI
import { Box, Button, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// * - LoginForm COMPONENT -
function LoginForm() {
  // * - STATE -
  const user = useSelector((store) => store.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility

  // * - HELPER FUNCTIONS -
  // Logging in user
  const loginUser = (event) => {
    event.preventDefault();

    if (email && password) {
      dispatch({
        type: "LOGIN",
        payload: {
          email: email,
          password: password,
        },
      });
    } else {
      dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end loginUser

  // Function to toggle showPassword on/off (true/false)
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }; // end handleTogglePasswordVisibility

  // Showing view depending on user logged in or not
  useEffect(() => {
    if (user.id) {
      if (user.authorization_level === 1) {
        history.push("/vendors-list");
      } else {
        history.push("/vendorstepper");
      }
    }
  }, [user, history]);

  // * - RENDERING -
  return (
    <form className="formPanel" onSubmit={loginUser}>
      <header>
        <h2 className="register-and-login-form-h2">
          Welcome back <br /> eco-friendly seller!
        </h2>

        {/* Error Prompts */}
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}

        {/* Cause-Cart Link and Login Route */}
        <div className="register-and-login-form-link-and-routing-container">
          {/* Link to Cause-Cart site */}
          <p>
            <a
              style={{ textDecoration: "none" }} // Gets rid of second underline of anchor tag
              href="https://cause-cart.com/"
              target="_blank"
              className="btn_asLink"
            >
              Click here to visit the Cause-Cart site
            </a>
          </p>
          <br />
          {/* Route to Register Page */}
          <button
            type="button"
            className="btn btn_asLink"
            style={{ lineHeight: "1.2rem" }}
            onClick={() => {
              history.push("/registration");
            }}
          >
            Want to become a vendor? <br />
            Register here
          </button>
        </div>
      </header>

      <Box className="register-and-login-form-input-field-container">
        {/* Email */}
        <div>
          <InputLabel label="email" id="email-label">
            Email
          </InputLabel>
          <OutlinedInput
            aria-labelledby="email-label"
            className="register-and-login-form-input-field"
            fullWidth
            id="email-input"
            required
            label="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        {/* Password */}
        <div>
          <InputLabel label="password" id="password-label">
            Password
          </InputLabel>
          <OutlinedInput
            aria-labelledby="password-label"
            className="register-and-login-form-input-field"
            fullWidth
            id="password-input"
            required
            type={showPassword ? "text" : "password"}
            label="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            endAdornment={
              // Password visibility icon and functionality to toggle show password on/off
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>

        <Button
          style={{ fontSize: "1rem", backgroundColor: "teal" }}
          className="register-or-login-button btn"
          variant="contained"
          type="submit"
          onClick={loginUser}
        >
          Login
        </Button>
      </Box>
    </form>
  );
}

export default LoginForm;

// ** OG FRI SEP 1st ** - not showing for all users **
// * - IMPORTING -
// // React
// import React, { useState, useEffect } from "react";
// // Redux
// import { useDispatch, useSelector } from "react-redux";
// // Router
// import { useHistory } from "react-router-dom";
// // CSS
// import "../RegisterAndLoginForm.css";
// // MUI
// import { Box, Button, InputLabel, OutlinedInput } from "@mui/material";

// // * - LoginForm COMPONENT -
// function LoginForm() {
//   // * - STATE -
//   const user = useSelector((store) => store.user);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // * - DECLARATIONS -
//   const errors = useSelector((store) => store.errors);

//   const dispatch = useDispatch();
//   const history = useHistory();

//   const loginUser = (event) => {
//     event.preventDefault();

//     // Dispatch to login
//     if (email && password) {
//       dispatch({
//         type: "LOGIN",
//         payload: {
//           email: email,
//           password: password,
//         },
//       });
//   };

//   useEffect(() => {
//     if (user.id) {
//       if (user.authorization_level === 1) {
//         history.push('/vendors-list');
//       } else if (user.authorization_level === 0) {
//         history.push('/vendorstepper');
//       } else {
//       dispatch({ type: "LOGIN_INPUT_ERROR" });
//     }}

//   }, [user, history]);

//   // * - RENDERING -
//   return (
//     <form
//     className="formPanel" onSubmit={loginUser}>
//       <header>
//         <h2 className="register-and-login-form-h2">
//           Welcome back <br /> eco-friendly seller!
//         </h2>

//         {/* Error Prompts */}
//         {errors.loginMessage && (
//           <h3 className="alert" role="alert">
//             {errors.loginMessage}
//           </h3>
//         )}

//         {/* Cause-Cart Link and Login Route */}
//         <div className="register-and-login-form-link-and-routing-container">
//           {/* Link to Cause-Cart site */}
//           <p>
//             <a
//               style={{ textDecoration: "none" }} // Gets rid of second underline of anchor tag
//               href="https://cause-cart.com/"
//               target="_blank"
//               className="btn_asLink"
//             >
//               Click here to visit the Cause-Cart site
//             </a>
//           </p>
//           <br />
//           {/* Route to Register Page */}
//           <button
//             type="button"
//             className="btn btn_asLink"
//             style={{ lineHeight: "1.2rem" }}
//             onClick={() => {
//               history.push("/registration");
//             }}
//           >
//             Want to become a vendor? <br />
//             Register here
//           </button>
//         </div>
//       </header>

//   <Box className="register-and-login-form-input-field-container">

//         {/* Email */}
//         <div>
//           <InputLabel label="email" id="email-label">
//             Email
//           </InputLabel>
//           <OutlinedInput
//             aria-labelledby="email-label"
//             className="register-and-login-form-input-field"
//             fullWidth
//             id="email-input"
//             required
//             label="email"
//             placeholder="Email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//         </div>

//         {/* Password */}
//         <div>
//           <InputLabel label="password" id="password-label">
//             Password
//           </InputLabel>
//           <OutlinedInput
//             aria-labelledby="password-label"
//             className="register-and-login-form-input-field"
//             fullWidth
//             id="password-input"
//             required
//             label="password"
//             placeholder="Password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </div>

//         <Button
//           style={{ fontSize: "1rem", backgroundColor: "teal" }}
//           className="register-or-login-button btn"
//           variant="contained"
//           type="submit"
//           onClick={loginUser}
//         >
//           Login
//         </Button>
//       </Box>
//     </form>
//   );
// }}

// export default LoginForm;
