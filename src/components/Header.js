import { authContext } from "../context";
import SignInUpForm from "./SignInUp";
import { useNavigate, Link } from "react-router-dom";

let LoggedIn = () => {
  const { authUser, signOut } = authContext();
  let navigate = useNavigate();
  return (
    <div className="logged-in-state">
      <p>Welcome {authUser.email}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate("/share");
        }}
      >
        Share a video
      </button>
      <button onClick={signOut}>Logout</button>
    </div>
  );
};

const Header = () => {
  const { authUser } = authContext();
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none", color: "#2385d2" }}>
        <h2>Shared Videos</h2>
      </Link>
      {authUser ? <LoggedIn /> : <SignInUpForm />}
    </div>
  );
};

export default Header;
