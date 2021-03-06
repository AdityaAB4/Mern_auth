import { React, useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();



  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };
      await axios.post("http://localhost:8080/auth/login", loginData);
      await getLoggedIn();
      history.push("/")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Login to your account</h1>
      <form onSubmit={login}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
       
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
