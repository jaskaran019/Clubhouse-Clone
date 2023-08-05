import React, { useState } from 'react'
import {FcGlobe} from "react-icons/fc"
import styles from "../../styles/BottomSheet.module.css"
const StartRoom = (props) => {
    const[room,setRoom] = useState("open");
  return (
    <>
        <div className={styles.switch_line}></div>
        <div className="text-right">
            <button className={styles.addTopicBtn}>+Add a topic</button>
        </div>
        <div className={styles.selectRoom}>
            <button className={room == "open" ? styles.active : ""} onClick={()=>setRoom("open")}>
                <div>
                    <FcGlobe />
                </div>
                Open
            </button>
            <button className={room == "social" ? styles.active : ""} onClick={()=>setRoom("social")}>
            <div>
                <FcGlobe />
            </div>
            Social
            </button>
            <button className={room == "closed" ? styles.active : ""} onClick={()=>setRoom("closed")}>
            <div>
                <FcGlobe />
            </div>
            Closed
            </button>
        </div>
        <p>Start a room <span>{room == "closed"?"with people I choose": room == "social" ? "with people I follow": "open to everyone"}</span></p>
        <div className="text-center">
            <button className={styles.letGoBtn} onClick={()=>{
                props.setSheetCreateRoom(true);
                props.setSheetVisible(true);
            }}>
                🎉Let's go
            </button>
        </div>
    </>
  )
}

export default StartRoom