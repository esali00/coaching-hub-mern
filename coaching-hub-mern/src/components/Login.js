import "../styles/login.css"
import ActiveLink from "./ActiveLink"

const Login = () => {
    return <div id="login-container"> 
    <div id='login-box'>
      <span id="login-title">Have an account?</span>
        <form id="login-form" onSubmit={() => to_login()}>
          <div className="input-wrapper">
            <input className="login-input" type="text" name="email" placeholder="E-Mail" required/>
          </div>
          
          <div className="input-wrapper">
            <input className="login-input" type="text" name="password" placeholder="Password" required/>
          </div>
          <button id='login-btn'>SIGN IN</button>
        </form>
        <div id="options">
          <span><input type="checkbox"/>Remember me</span>
          <span>
              <ActiveLink className="forgotPassword" to="/forgot-password">Forgot Password</ActiveLink>
          </span>
        </div>
        <p className='register'>If you dont have an account, you can register <ActiveLink className="pink" to="/sign-up">here</ActiveLink></p>
      </div>
 </div>
}

const to_login = () => {

}

export default Login