import React from "react";
import headPhone from '../home/headPhone.jpg'
import perfume from '../home/perfume.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
const TableRow=(props)=>{
    return (
        <tr>
        <td>
            <input type="checkbox" name="check" />
            <label htmlFor="check"></label>
        </td>
        <td className='id'>#1</td>
        <td>
            <img src="" />
        </td>
        <td>Cookie</td>
        <td className="StockIn">In Stock</td>
        <td>$4990</td>
        <td>02/03/2021</td>
        <td>
            <div className="editIcon">
            <Link to='/Products/addProduct' state={{ from: props }}><EditIcon/></Link>
           
            </div>
        </td>
        <td>
            <div className="deleteIcon"><DeleteIcon /></div>
        </td>
    </tr>
    )
}

export default TableRow;