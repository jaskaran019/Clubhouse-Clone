import React, { useState } from 'react'
import styles from "../../styles/RoomDetail.module.css"
import {AiOutlineFile, AiOutlinePlus} from "react-icons/ai"
import {BsMicMuteFill, BsMicFill} from "react-icons/bs"
const NewRoom = (props) => {
    const[micMuteVisible, setMicMuteVisible] = useState(true);
    const[itemsVisible, setItemsVisible] = useState(false);
    const card = props.cardDetail;
    return(
        <>
            <div className={styles.roomDetailContainer}>
                <div className={styles.head}>
                    <div className="d-flex align-items-center">
                        <a href=""onClick={()=>{props.setSheetVisible(false);}}>
                            <img src="images/arrow.png" alt="" className={styles.arrow_icon}/>
                        </a>
                        <span>Hallway</span>
                    </div>
                    <div>
                        <AiOutlineFile/>
                        <img src="images/user-img.jpg" alt="" className={styles.profile_img}/>
                    </div>
                </div>
                <div className={styles.roomDetailCard}>
                    <div className="d-flex justify-content-between align-items-center" style={{padding:"0.5em 1em"}}>
                        {card.members.map((item)=>(
                            <div className={styles.memberContainer}>
                                {micMuteVisible ? 
                                <div className={styles.audioIcon}><BsMicMuteFill /></div>:""}
                            <img src="images/user-img.jpg" alt="" />
                            <p>
                                <span>*</span>
                                {item.first_name}
                            </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.footer}>
                    <button onClick={()=>{
                        props.setSheetVisible(false);
                    }}>
                        <img src="images/hand-peace.png" alt="" />Leave Quietly
                    </button>
                    <div>
                        <button>
                            <AiOutlinePlus/>
                        </button>
                        <button>
                            <img src="images/stopHandIcon.png" alt="" />
                        </button>
                        <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
                                {micMuteVisible ? <BsMicMuteFill/>:<BsMicFill/>}
                            </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewRoom