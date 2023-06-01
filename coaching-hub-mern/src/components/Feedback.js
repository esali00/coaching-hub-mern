import '../styles/feedback.css'

const Feedback = () => {
    return <div className="feedback-container">
    <form className="form" onSubmit={() => sendMail()} >
      <span id="feedback-title">Feedback</span>
      <input name="name" id="name" type="text" placeholder="Your Name" required/>
      <input name="email" id="email" type="text" placeholder="Your Email" required/>
      <textarea rows={10} name="message" id="message" placeholder="Leave a comment"></textarea>
      <button id="feedback-btn">SUBMIT</button>
    </form>
  </div>
}

async function sendMail() {
    let loading = true
    let fd = new FormData()
    console.log("send mail")

    fd.append("name", document.getElementById("name").value)
    fd.append("email", document.getElementById("email").value)
    fd.append("message", document.getElementById("message").value)

    await fetch("https://emir-salihovic.de/send_mail/send_mail_coaching_hub.php", {
      method: "POST",
      body: fd
    }).then(() => {
    loading = false
    }
    ) 
}

export default Feedback