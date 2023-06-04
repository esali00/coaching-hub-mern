import "../styles/signup.css"
import axios from "axios"

const Signup = () => {
    return <div id="signup-container"> 
    <div id='signup-box'>
      <span id="signup-title">Signup</span>
        <form id="signup-form" onSubmit={() => to_signup()}>
          <div className="input-wrapper">
            <input className="signup-input" type="text" id="email" name="email" placeholder="E-Mail" required/>
          </div>
          
          <div className="input-wrapper">
            <input className="signup-input" type="text" id='first_password' name="first_password" placeholder="Password" required/>
          </div>

          <div className="input-wrapper">
            <input className="signup-input" type="text" id='confirm_password' name="confirm_password" placeholder="Confirm Password" required/>
          </div>
          <button type="submit" id='signup-btn'>SIGN UP</button>
        </form>
      </div>
    </div>
}

const to_signup = async () => {
    let email = document.getElementById("email").value 
    let first_password = document.getElementById("first_password").value 
    let confirm_password = document.getElementById("confirm_password").value 

    if (first_password === confirm_password) {
      let data = {
        email: email,
        password: confirm_password
      }
      axios.post("http://localhost:5000/users/sign-up", data)
       .then(res => res.data)

      // await fetch("http://localhost:5000/users/", {
      //   method: "POST",
      //   body: JSON.stringify({email: email, password: confirm_password})
      // }).then(() => {
      //   console.log(email, confirm_password)
      //   console.log("Registration confirmed")
      // })
    }
}

export default Signup