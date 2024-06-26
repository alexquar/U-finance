import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"
export default function Navbar() {
  const {logout} = useLogout()
  const {user} = useAuthContext()
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}><Link to="/">U Finance</Link></li>
        {!user && (
          <>
               <li><Link to="/login">Login</Link></li>
               <li><Link to="/signup">Signup</Link></li>
          </>
        )}
        {user && (
          <>
          <li>
            Hey, {user.displayName}...
          </li>
        <li> <button onClick={logout} className="btn"> Logout </button></li>
          </>
        )}  
      </ul>
    </nav>
  )
}