import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [username, setUsername] = useState(null);

  const fetchProfile = async () => {
    const response = await fetch("http://localhost:3000/profile", {
      credentials: "include",
    });
    const userInfo = await response.json();
    setUsername(userInfo.username);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const logout = () => {
    fetch("http://localhost:3000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUsername(null);
  };

  return (
    <header>
      <Link to={"/"} className="logo">
        MyBlog
      </Link>
      <nav>
        {username ? (
          <>
            <Link to={"/create"}>Create New Post</Link>
            <a onClick={logout}>Logout</a>
          </>
        ) : (
          <>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
