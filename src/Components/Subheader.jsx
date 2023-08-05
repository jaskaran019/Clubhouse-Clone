import React from 'react'
import styles from "../styles/Explore.module.css"
import {Link} from "react-router-dom"
const Subheader = (props) => {
  return (
    <div className={styles.head}>
        <Link exact to = "/home">
            <img src="images/arrow.png" alt="" style={{position:"absolute", top:"1", left:"1"}}/>
        </Link>
        <h3 style={{textAlign:"center", fontWeight:"600"}}>{props.pageTitle}</h3>
    </div>
  )
}

export default Subheader