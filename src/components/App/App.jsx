import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import EmailForm from "../EmailComponent/EmailComponent";

// ** ADMIN
import AdminRegisterPage from "../AdminUser/Registration/AdminRegisterPage";
import VendorsList from "../AdminUser/VendorsList/VendorsList";
import TemplateLists from "../AdminUser/Templates/TemplateLists";
import AdminLoginPage from "../AdminUser/Login/AdminLoginPage";

// ** VENDOR

import VendorStepper from "../VendorStepper/VendorStepper";

import "./App.css";
import ValidationComponent from "../ValidationComponent/ValidationComponent";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          // TODO add protected route back
          <Route
            // shows AdminRegisterPage at all times (logged in or not)
            exact
            path="/admin-register"
          >
            <AdminRegisterPage />
          </Route>

          {/* <Route
            // shows AdminLoginPage at all times (logged in or not)
            exact
            path="/admin-login"
          >
            <AdminLoginPage />
          </Route> */}


          <Route
            // shows LoginPage at all times (logged in or not)
            exact
            path="/login"
          >
            <LoginPage />
          </Route>

          <Route
            // shows LoginPage at all times (logged in or not)
            exact
            path="/validate"
          >
            <ValidationComponent />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // ADMIN Logged-In: Shows VendorsList
            exact
            path="/vendors-list"
          >
            <VendorsList />
          </ProtectedRoute>
          <Route
            // logged in shows VendorsList else shows LoginPage
            exact
            path="/email"
          >
           <EmailForm />
          </Route>

          <ProtectedRoute
            // VENDOR Logged-In: Shows VendorsStepper
            exact
            path="/vendorstepper"
          >
            <VendorStepper />
          </ProtectedRoute>

          <ProtectedRoute
            // ADMIN Logged-In: Has access to Templates
            exact
            path="/templates"
          >
            <TemplateLists />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/home">
            {user.id ? (
              // If the ADMIN user is already logged in,
              // redirect them to the /vendors-list page,
              user.authorization_level === 1 ? (
                <Redirect to="/vendors-list" />
              ) : (
                // If the VENDOR user is already logged in,
                // redirect them to the /vendorstepper page,
                <Redirect to="/vendorstepper" />
              )
            ) : (
              // Otherwise, show the Register page
              <RegisterPage />
            )}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// ** DEFAULT OG FROM GITHUB **
// return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
//           <Redirect exact from="/" to="/home" />

//           {/* Visiting localhost:3000/about will show the about page. */}
//           <Route
//             // shows AboutPage at all times (logged in or not)
//             exact
//             path="/about"
//           >
//             <AboutPage />
//           </Route>

//           {/* For protected routes, the view could show one of several things on the same route.
//             Visiting localhost:3000/user will show the UserPage if the user is logged in.
//             If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
//             Even though it seems like they are different pages, the user is always on localhost:3000/user */}
//           <ProtectedRoute
//             // logged in shows UserPage else shows LoginPage
//             exact
//             path="/user"
//           >
//             <UserPage />
//           </ProtectedRoute>

//           <ProtectedRoute
//             // logged in shows InfoPage else shows LoginPage
//             exact
//             path="/info"
//           >
//             <InfoPage />
//           </ProtectedRoute>

//           <Route
//             exact
//             path="/login"
//           >
//             {user.id ?
//               // If the user is already logged in,
//               // redirect to the /user page
//               <Redirect to="/user" />
//               :
//               // Otherwise, show the login page
//               <LoginPage />
//             }
//           </Route>

//           <Route
//             exact
//             path="/registration"
//           >
//             {user.id ?
//               // If the user is already logged in,
//               // redirect them to the /user page
//               <Redirect to="/user" />
//               :
//               // Otherwise, show the registration page
//               <RegisterPage />
//             }
//           </Route>

//           <Route
//             exact
//             path="/home"
//           >
//             {user.id ?
//               // If the user is already logged in,
//               // redirect them to the /user page
//               <Redirect to="/user" />
//               :
//               // Otherwise, show the Landing page
//               <LandingPage />
//             }
//           </Route>

//           {/* If none of the other routes matched, we will show a 404. */}
//           <Route>
//             <h1>404</h1>
//           </Route>
//         </Switch>
//         <Footer />
//       </div>
//     </Router>
//   );
