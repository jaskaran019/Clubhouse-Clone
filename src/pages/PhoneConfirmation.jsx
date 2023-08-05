import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/PhoneConfirmation.module.css"
import PhoneInput from "react-phone-number-input"
import {IoIosArrowBack} from "react-icons/io"
import {IoIosArrowForward} from "react-icons/io"
const PhoneConfirmation = () => {
const[value, setValue] = useState();
  return (
    <div className={styles.phoneConfirmContainer}>
    <Link exact to="/" className={styles.backBtn}>
        <IoIosArrowBack/>
    </Link>
        <h1>Enter Your Phone</h1>
        <PhoneInput international defaultCountry='US' value={value} onChange={setValue}/>
        <p>By entering your number you agree to our <br /> 
        <span> Terms & Service and Privacy Policy </span>Thanks!</p>
        <Link exact to="/code_confirm" className='primary-btn d-flex align-items-center justify-items-center text-decoration-none'>Next<IoIosArrowForward className='ml-1'/></Link>
    </div>
    )
}

export default PhoneConfirmation