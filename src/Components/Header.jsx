import React from 'react'
import styles from "../styles/Header.module.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
        <div className={styles.header} style={{width : "100%", maxWidth:"500px", margin:"auto"}}>
            <Link exact to ="/explore">
                <img src="images/search.png" alt="" />
            </Link>
            <div className={styles.nav_items}>
                <Link exact to="/friends_invite">
                    <img src="images/invite.png" alt="" />
                </Link>
                <Link exact to="/upcoming">
                    <img src="images/calendar.png" alt="" />
                </Link>
                <Link exact to="/activity">
                    <img src="images/noti.png" alt="" />
                </Link>
                <Link exact to="/profile">
                    <img src="images/b1.png" alt="" />
                </Link>
            </div>
        </div>
    </>
  )
}

export default Header