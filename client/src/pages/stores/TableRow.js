import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TableRow=(props)=>{
	return(
		<tr>
                    <td className='id'>#8</td>
                    <td>Monty General Store</td>
                    <td>Kala bazar</td>
                    <td>10000 items</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={props.modalOpen} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
	);
}

export default TableRow;