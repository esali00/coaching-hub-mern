import ActiveLink from "./ActiveLink"
import { Link } from "react-router-dom"
import "../styles/navbar.css"

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="coaching-tittle">
                Coaching Hub
            </Link>
        <ul>
            <ActiveLink to="/coaching">Coaching</ActiveLink>
            <ActiveLink to="/feedback">Feedback</ActiveLink>
            <ActiveLink to="/login">Login</ActiveLink>
            <ActiveLink to="/subscription">Subscription</ActiveLink>
        </ul>
    </nav>
    )
}

export default Navbar