import "../styles/signup.css"

const Signup = () => {
    return <div id="signup-container"> 
    <div id='signup-box'>
      <span id="signup-title">Signup</span>
        <form id="signup-form" method="post">
          <div className="input-wrapper">
            <input className="signup-input" type="text" id="email" name="email" placeholder="E-Mail" required/>
          </div>
          
          <div className="input-wrapper">
            <input className="signup-input" type="text" id='first_password' name="password" placeholder="Password" required/>
          </div>

          <div className="input-wrapper">
            <input className="signup-input" type="text" id='confirm_password' name="password" placeholder="Confirm Password" required/>
          </div>
          <button id='signup-btn'>SIGN UP</button>
        </form>
      </div>
    </div>
}

export default Signup