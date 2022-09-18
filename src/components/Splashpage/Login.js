import './Login.css';

function Login() {
  return (
    <div className="login">
      <h3>Login</h3>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
