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
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";

import VendorsList from "../AdminUser/VendorsList/VendorsList";
import VendorDetails from "../AdminUser/VendorDetails/VendorDetails";

import "./App.css";

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

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          {/* <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute> */}

          <ProtectedRoute
            // logged in shows VendorsList else shows LoginPage
            exact
            path="/vendors-list"
          >
            <VendorsList />
          </ProtectedRoute>

          {/* <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute> */}

          <Route exact path="/login">
            {user.id ? (
              // // If the user is already logged in,
              // // redirect to the /user page
              //   // <Redirect to="/user" />

              // If the admin is already logged in,
              // redirect to the /vendors-list page
              //   <Redirect to="/vendors-list" />
              <Redirect to="/vendors-list" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              //   // If the user is already logged in,
              //   // redirect them to the /user page
              //  // <Redirect to="/user" />

              // If the admin is already logged in,
              // redirect them to the /vendors-list page
              <Redirect to="/vendors-list" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/home">
            {user.id ? (
              //   // If the user is already logged in,
              //   // redirect them to the /user page
              //   <Redirect to="/vendors-list" />
              // If the admin is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
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

// ** KINDA OG TESTING LOGIN CRUD ADMIN VIEW TUE AUG 29 **
// return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           {/*
//           // Visiting localhost:3000 will redirect to localhost:3000/home
//           <Redirect exact from="/" to="/home" />

//           // Visiting localhost:3000/about will show the about page.
//           <Route
//             // shows AboutPage at all times (logged in or not)
//             exact
//             path="/about"
//           >
//             <AboutPage />
//           </Route>
//         */}

//           {/*
//           TODO: **** AMY: FRI AUG 25 ****
//           Visiting localhost:3000 will redirect to localhost:3000/home

//           */}
//           <Redirect exact from="/" to="/home" />

//           {/* Visiting localhost:3000/about will show the about page. */}
//           {/* TODO: TODO: TEST MON AUG 18  */}
//           <Route
//             // shows AboutPage at all times (logged in or not)
//             exact
//             path="/vendors-list"
//           >
//             <VendorsList />
//           </Route>

//           {/* <Route
//             // shows AboutPage at all times (logged in or not)
//             exact
//             path="/vendor-details"
//           >
//             <VendorDetails />
//           </Route> */}

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

//           <Route exact path="/login">
//             {user.id ? (
//               // If the user is already logged in,
//               // redirect to the /user page
//               <Redirect to="/user" />
//             ) : (
//               // Otherwise, show the login page
//               <LoginPage />
//             )}
//           </Route>

//           <Route exact path="/registration">
//             {user.id ? (
//               // If the user is already logged in,
//               // redirect them to the /user page
//               <Redirect to="/user" />
//             ) : (
//               // Otherwise, show the registration page
//               <RegisterPage />
//             )}
//           </Route>

//           <Route exact path="/home">
//             {user.id ? (
//               // If the user is already logged in,
//               // redirect them to the /user page
//               <Redirect to="/user" />
//             ) : (
//               // Otherwise, show the Landing page
//               <LandingPage />
//             )}
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
