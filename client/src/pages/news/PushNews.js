import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link } from 'react-router-dom'
import api from "../../http";
import { useState} from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PushNews = () => {

    const [title, setTitle]=useState();
    const [image, setImage]=useState();
    const [description, setDescription]=useState();
 

 const handleChange=(e)=>{
        const file=e.target.files[0];
        //to convert file to base64 string
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend=function(){
            setImage(reader.result);
        }
    }

    const handleClick=(e)=>{
            api.post("/api/news/add",{title, image, description
                }).then((data)=>{
                    console.log(data.data)
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }

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
                                    <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Ex-Most purchased item" />
                                </div>
                                <div className="newsInput">
                                    <label >Description</label>
                                    <textarea rows='7' onChange={(e)=>setDescription(e.target.value)} placeholder="Ex-John doe products are the most purchased items"></textarea>
                                </div>
                                <div className="newsInput">
                                    <label >Upload Image</label>
                                    <input type="file" onChange={(e)=>handleChange(e)}/>
                                </div>
                            </div>
                        </div>
                        <div className="pushBtn" onClick={(e)=>handleClick(e)}>
                            <button>SEND</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PushNews