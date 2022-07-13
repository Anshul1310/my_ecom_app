import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'
const TableRow=(props)=>{
	const {functio, name,_id, password}=props;
	return (
		<tr>
                   
                    <td className='id'>{_id}</td>
                    <td>{name}</td>
                    <td>{password}</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>);
}

export default TableRow;