import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <form className="login" action="">
        <h1>Login</h1>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
