import { useNavigate } from "react-router-dom";
import { authService } from "../../auth/authService";
import "./Home.scss";

export default function Home() {
  const navigate = useNavigate();

  const logout = () => {
    authService.logout();
    navigate("/login");
  };

  return (
    <div className="home">
      <h1>Home</h1>
      <p>You are logged in ✅</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
