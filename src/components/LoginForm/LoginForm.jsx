import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const user = useSelector((store) => store.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const loginUser = (event) => {
    event.preventDefault();

    dispatch({
      type: "LOGIN",
      payload: {
        email: email,
        password: password,
      },
    });
  };

  useEffect(() => {
    if (user.id) {
      if (user.authorization_level === 1) {
        history.push('/vendors-list');
      } else {
        history.push('/vendorstepper');
      }
    }
  }, [user, history]);

  return (
    <div>
      <form onSubmit={loginUser}>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
