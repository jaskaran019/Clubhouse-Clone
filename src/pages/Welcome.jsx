import React from 'react'
import styles from "../styles/Welcome.module.css";
import {Link} from "react-router-dom";
function Welcome(){
  return (
    <div className={styles.WelcomeContainer}>
        <h1>Welcome!</h1>
        <div className={styles.WelcomeInfo}>
            <p>We are working really hard to make clubhouse accessible to everyone! While we wrap up the finishing touches, we're adding people gradually to make sure nothing breaks</p>
            <p>Anyone can join with an invite from an existing user- or reserve your username and we'll text you if you have a friend on the app who can let you in. We are so grateful you're here and can't wait to have you join in!</p>
            <p>Paul, Rohan & the Clubhouse Team</p>
        </div>
        <div className={styles.actionBtn}>
            <Link to='/get_username' className='primaryBtn d-flex align-items-center mb-3' style={{textDecoration:
            "none", fontWeight:"500"}}>
                Get your username
            </Link>
            <Link to = "/invite" style={{textDecoration: "none", color: "var(--btnBgColor)",fontSize: "1em",fontWeight: "400", fontStyle: "normal"}}>
                Have an invite? Sign in!
            </Link>
        </div>
    </div>
  )
}

export default Welcome