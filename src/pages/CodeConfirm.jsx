import React from 'react'
import styles from "../styles/PhoneConfirmation.module.css"
import { Link } from 'react-router-dom'
import {IoIosArrowBack} from "react-icons/io"
import {IoIosArrowForward} from "react-icons/io"
const CodeConfirm = () => {
  return (
    <div className={styles.phoneConfirmContainer}>
    <Link exact to ="/get_username" className={styles.backBtn}><IoIosArrowBack/></Link>
    <div className="text-center">
        <h1 style={{width:"100%", maxWidth:"200px", marginBottom:"1em"}}>Enter the code we just texted you</h1>
        <input type="text" style={{width:"100%", maxWidth:"200px", marginBottom:"1em"}}/>
        <p className='mt-2'>Didn't recieve it?<span> Tap to resend</span></p>
    </div>
    <Link exact to="/allow_notifications" className='primary-btn d-flex align-items-center text-decoration-none'>Next<IoIosArrowForward className='ml-1'/></Link>
    </div>
  )
}

export default CodeConfirm