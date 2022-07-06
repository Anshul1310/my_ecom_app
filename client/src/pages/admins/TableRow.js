import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const TableRow=(props)=>{
	const {functio, name, email,_id, password, access}=props;
	return (
		<tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>{_id}</td>
                    <td>{name}</td>
                    <td>{password}</td>
                    <td>{access.toString()}</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>);
}

export default TableRow;