import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const signOutClick = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <>
      <div className="word">
        <h2>Welcome:{user?.email}</h2>
        <button onClick={() => signOutClick()}>Signout </button>
      </div>
    </>
  );
}

export default Home;
