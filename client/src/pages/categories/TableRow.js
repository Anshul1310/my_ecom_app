import cookie from '../home/cookie.jpg'
import glass from '../home/glass.jpg'
import headPhone from '../home/headPhone.jpg'
import React from 'react'
import perfume from '../home/perfume.jpg'
import api from "../../http";

import DeleteIcon from '@mui/icons-material/Delete';
const TableRow=(props)=>{

    const handleDelete=(e)=>{
        api.post("/api/categories/delete",{
                id:props.id
                }).then((data)=>{
                     window.location.reload();
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }
	return (
		<tr>
                    <td>
                        <img src={props.image} alt="cookie" />
                    </td>
                    <td>{props.name}</td>

                    <td>
                        <div onClick={(e)=>handleDelete(e)} className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
	)
}

export default TableRow;