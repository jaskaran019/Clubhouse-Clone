import React from 'react'
import styles from '../styles/RoomCard.module.css'
import data from "../data/roomCard.json"
import {BsChatDots, BsChatDotsFill, BsFillPersonFill} from "react-icons/bs"
const RoomInfoCard = (props) => {
    return(
        <>
            {data.map((item)=>(
                <div>
                    <div>
                        <div className={styles.roomCardContainer}>
                            <h6>{item.title}</h6>
                            <h2>{item.sub_title}</h2>
                            <div className={styles.roomMembers}>
                                <div><img src="images/user-img.jpg" alt="" />
                                <img src="images/user-img2.jpg" alt="" />
                                </div>
                                <div>
                                {item.members.map((person)=>(
                                    <p>{person.first_name} {person.last_name} <BsChatDots/></p>
                                ))}
                                <p className='d-flex align-items-center'>
                                    <span className='mr-2'>1.8</span>
                                    <BsFillPersonFill style={{marginLeft:".2em"}}/>
                                    <span className='mx-2s'style={{marginRight:".5em"}}></span>{" "}
                                    <span className="mr-2">5</span><BsChatDotsFill style={{marginLeft:".2em"}}/>
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default RoomInfoCard