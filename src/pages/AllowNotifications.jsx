import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/PhoneConfirmation.module.css"
const AllowNotifications = () => {
  return (
    <div className={styles.phoneConfirmContainer}>
      <div className="text-center">
        <h1 className='mb-4'>Last, Important Step!</h1>
        <h1 className='mb-3'>
          Enable Notifications to know when people are talking
        </h1>
        <div className={styles.notificationContainer}>
          <div className="p-3">
            <h3>"Clubhouse" Would Like To Send You Notifications</h3>
            <p>Notifications may include alerts, sounds, and icon badges</p>
          </div>
          <div className={styles.action_btn}>
              <Link exact to="/home">Don't Allow</Link>
              <Link exact to="/home">Allow</Link>
              <img src="images/handicon.png" alt="" className={styles.hand_icon}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AllowNotifications