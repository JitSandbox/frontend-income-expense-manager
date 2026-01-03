import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../auth/authService";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await authService.login(email, password);
      navigate("/");
    } catch (err: any) {
      setError(err);
    }
  };

  return (
    <div className="login">
      <div className="login__card">
        <h2>Login</h2>

        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}
