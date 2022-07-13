import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import api from "../../http";
import './admins.css';


const AddAdmin = () => {
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    let access={"sellers":false, "admin":false,"buyers":false,"news":false,"notifications":false,"products":false, "orders":false};
    const navigate=useNavigate();


    const handleClick=(e)=>{
         api.post("/api/admin/add",{
                    name, email, password, access
                }).then((data)=>{
                    localStorage.setItem("token", data.data);
                    navigate("/admins");
                    console.log(data.data);
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }

    const handleAccessChange=(e)=>{
        console.log(access);
        let key=e.target.name;
        let value=e.target.checked;
       access[key]=value
        console.log(access);
    }

    return (
        <div className="main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="container">
                <Navbar />
                <div className="addAdminContainer">
                    <div className="borderContainer">
                        <div className="addAdminHead">
                            <Link to='/admins'><ArrowBackIcon className="arrowBack" /></Link>
                            <h2>Add Admin</h2>
                        </div>
                        <div className="information">
                            <div className="fields1">
                                <div className="admin">
                                    <label >Name</label>
                                    <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Ex-Steve Smith" />
                                </div>
                                <div className="admin">
                                    <label>Email</label>
                                    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Ex-steve_Smith" />
                                </div>
                                <div className="admin">
                                    <label>Password</label>
                                    <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="Ex-#strongpPassword" />
                                </div>
                                <div className="admin">
                                    <label>Access</label>
                                    <div className="checkBoxes">

                                        <div className="check1">
                                            <h3>Add Product</h3>
                                            <input onChange={(e)=>handleAccessChange(e)} type="checkbox" name="products" id="" />
                                        </div>
                                        <div className="check2">
                                            <h3>Add Seller</h3>
                                            <input onChange={(e)=>handleAccessChange(e)} type="checkbox" name="sellers" id="" />
                                        </div>
                                        <div className="check3">
                                            <h3>Add Buyer</h3>
                                            <input onChange={(e)=>handleAccessChange(e)} type="checkbox" name="buyers" id="" />
                                        </div>
                                        <div className="check3">
                                            <h3>Add Admin</h3>
                                            <input onChange={(e)=>handleAccessChange(e)} type="checkbox" name="admin" id="" />
                                        </div>
                                        <div className="check3">
                                            <h3>Push Notification</h3>
                                            <input onChange={(e)=>handleAccessChange(e)} type="checkbox" name="notification" id="" />
                                        </div>
                                        <div className="check3">
                                            <h3>Add News</h3>
                                            <input onChange={(e)=>handleAccessChange(e)} type="checkbox" name="news" id="" />
                                        </div>
                                          <div className="check3">
                                            <h3>Orders</h3>
                                            <input onChange={(e)=>handleAccessChange(e)} type="checkbox" name="orders" id="" />
                                        </div>
                                          <div className="check3">
                                            <h3>Static Products</h3>
                                            <input onChange={(e)=>handleAccessChange(e)} type="checkbox" name="static_products" id="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="addAdminButton" onClick={(e)=>handleClick(e)}>ADD ADMIN</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAdmin