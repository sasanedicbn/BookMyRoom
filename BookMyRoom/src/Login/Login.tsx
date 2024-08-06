import Logo from "../Home/Logo";

const Login = () => {
    return (
      <div className="login-container">
        <div className="login-form">
          <Logo/>
          <h2>Login to your account</h2>
          <div className="login-inputs">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" className="login-input" />
          </div>
          <div className="login-inputs">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className="login-input" />
          </div>
          <button className="btn-login">Log in</button>
        </div>
      </div>
    );
  };
  
  export default Login;
  