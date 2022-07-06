import React from 'react'
import TableRow from "./TableRow";
import {useEffect, useState} from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import api from "../../http";
 
const AdminsTable = ({ modalOpen }) => {
    const functio = () => {
        modalOpen()
    }
    const [admins, setAdmin]=useState([]);

    useEffect(()=>{
        api.get("/api/admin/all").then((data)=>{
                    console.log(data.data);
                    setAdmin(data.data);
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    },[]);

    return (
        <table>
            <thead>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>PASSWORD</td>
                    <td>ACCESS</td>
                    <td>EDIT</td>
                    <td>DELETE</td>
                </tr>
            </thead>
            <tbody>
            {admins.map((data,id)=>{
                return <TableRow access={data.access} key={id} password={data.password} _id={data._id} name={data.name} email={data.email} functio={functio}/>;
            })}
            </tbody>
        </table>
    )
}

export default AdminsTable