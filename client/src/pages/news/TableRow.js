import cookie from '../home/cookie.jpg'
import glass from '../home/glass.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import headPhone from '../home/headPhone.jpg'
const TableRow=(props)=>{
	return(
		<tr>
                    <td className='id'>{props.index}</td>
                    <td>
                        <img src={props.image} alt="cookie" />
                    </td>
                    <td>{props.title}</td>
                    <td>{props.description}</td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
	);
}

export default TableRow;