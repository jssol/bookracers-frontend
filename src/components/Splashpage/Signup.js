import './Signup.css';

function Signup() {
  return (
    <div className="signup">
      <h3>Sign Up</h3>
      <form>
        <input type="name" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="confirm-Password" />
        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Signup;
