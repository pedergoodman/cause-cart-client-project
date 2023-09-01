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
import { Box, Button, InputLabel, OutlinedInput } from "@mui/material";

// * - LoginForm COMPONENT -
function LoginForm() {
  // * - STATE -
  const user = useSelector((store) => store.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // * - DECLARATIONS -
  const errors = useSelector((store) => store.errors);

  const dispatch = useDispatch();
  const history = useHistory();

  const login = (event) => {
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
  }; // end login

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
    //  Form Box Container
    <Box className="register-form-input-field-container">
      <header>
        <h2 className="register-form-h2">
          Grow your business while being sustainable
        </h2>
        {/* Cause-Cart Link and Login Route */}
        <div className="register-form-link-and-routing-container">
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
          {/* Route to Vendor-Login Page */}
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              history.push("/login");
            }}
          >
            Already a vendor? Login here
          </button>
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

      {/* Input Field Box Container */}
      <Box className="register-and-login-form-input-field-container">
        <form className="formPanel" onSubmit={login}>
          <h2>Login</h2>
          {errors.loginMessage && (
            <h3 className="alert" role="alert">
              {errors.loginMessage}
            </h3>
          )}
          <div>
            <label htmlFor="email">
              Username:
              <input
                type="text"
                name="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </div>
          <div>
            <input className="btn" type="submit" name="submit" value="Log In" />
          </div>
        </form>
      </Box>
    </Box>
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
