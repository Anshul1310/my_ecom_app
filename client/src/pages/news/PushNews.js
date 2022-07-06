import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PushNews = () => {
    return (
        <div className="news_main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="box">
                <Navbar />
                <div className="mainNotifiContainer">
                    <div className="borderContainer">
                        <div className="viewNewsHead">
                            <Link to='/news'><ArrowBackIcon className="arrowBack" /></Link>
                            <h2>Push News</h2>
                        </div>
                        <div className="information">
                            <div className="fields">
                                <div className="newsInput">
                                    <label>Title</label>
                                    <input type="text" placeholder="Ex-Most purchased item" />
                                </div>
                                <div className="newsInput">
                                    <label >Description</label>
                                    <textarea rows='7' placeholder="Ex-John doe products are the most purchased items"></textarea>
                                </div>
                                <div className="newsInput">
                                    <label >Upload Image</label>
                                    <input type="file" />
                                </div>
                            </div>
                        </div>
                        <div className="pushBtn">
                            <a href="/#"> Push News</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PushNews