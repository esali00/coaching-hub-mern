import "../styles/login.css"
import ActiveLink from "./ActiveLink"
import axios from "axios"

const Login = () => {
    return <div id="login-container"> 
    <div id='login-box'>
      <span id="login-title">Have an account?</span>
        <form id="login-form" onSubmit={(e) => to_login(e)}>
          <div className="input-wrapper">
            <input className="login-input" type="text" id="login-email" name="login-email" placeholder="E-Mail" required/>
          </div>
          
          <div className="input-wrapper">
            <input className="login-input" type="text" id="login-password"name="login-password" placeholder="Password" required/>
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

const to_login = (e) => {
  e.preventDefault()
  const login_email = document.getElementById("login-email").value 
  const login_password = document.getElementById("login-password").value 

  const data = {
    login_email: login_email,
    login_password : login_password
  }
  axios.post("http://localhost:5000/users/login", data)
   .then(res => {
    if (res.data.length == 0) {
      console.log("not in db")
    } else {
      console.log(res.data)
      console.log(res.data[0]._id)
    }
  })
    .catch(err => console.log(err))
}

export default Login