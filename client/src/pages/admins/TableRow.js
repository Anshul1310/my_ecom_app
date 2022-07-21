import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'
import api from "../../http";


const TableRow=(props)=>{

    const handleDelete=()=>{
         api.post("/api/admin/delete",{
                id:props.id
                }).then((data)=>{
                     window.location.reload();
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }
	const {functio, name,id, password}=props;
	return (
		<tr>
                   
                    <td className='id'>{props.id}</td>
                    <td>{name}</td>
                    <td>{password}</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div onClick={(e)=>handleDelete(e)}  className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>);
}

export default TableRow;