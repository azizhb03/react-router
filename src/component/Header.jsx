import { useCallback } from "react";
import { useNavigate,Link } from "react-router-dom";


function Header() {
    const push = useNavigate();
    const GetAuth = useCallback(() => {
      localStorage.setItem("auth", "true");
      push("/Private");
    }, []);
  
    const RevokeAuth = useCallback(() => {
      localStorage.removeItem("auth");
      push("/public")
    }, []);
  
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/public">Public</Link>
            </li>
            <li>
              <Link to="/private">Private</Link>
            </li>
          </ul>
        </nav>
        <div id="Button">
          <button onClick={GetAuth}>Get Auth</button>
          <button onClick={RevokeAuth}>revoke Auth</button>
        </div>
        </> )
}

export default Header;