import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PushNotification = () => {
    return (
        <div className="notification_main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="box">
                <Navbar />
                <div className="mainNotifiContainer">
                    <div className="borderContainer">
                        <div className="pushNotificationHead">
                            <Link to='/notification'><ArrowBackIcon className="arrowBack" /></Link>
                            <h2>Push Notification</h2>
                        </div>
                        <div className="information">
                            <div className="fields">
                                <div className="notificationTitle">
                                    <label htmlFor="notifiTitle">Title</label>
                                    <input type="text" name="notifiTitle" id="notifiTitle" placeholder="Ex-Out Of Stock" />
                                </div>
                                <div className="notificationDes">
                                    <label htmlFor="notifiDesc">Message</label>
                                    <textarea name="notifiDesc" id="notifiDesc" rows='7' placeholder="Ex-Your listed items are out of stock"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="pushBtn">
                            <a href="/#"> Push Notification</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PushNotification