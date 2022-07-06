import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";
const TableRow=(props)=>{
	return (
		     <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#9</td>
                    <td>orgXYZ</td>
                    <td>Arlan Pond</td>
                    {/* <td>Bole Subcity Kebele 14 H.No179/B Addis Ababa 7512</td> */}
                    <td>+251 398198287</td>
                    <td>Other Groups</td>
                    <td>Level1</td>
                    {/* <td>NNN-NN-NNNN</td> */}
                    <td className="activeUser">
                        <span>Active</span>
                    </td>
                    <td className="view">
                        <Link to='/viewUser'>View</Link>
                    </td>
                    {/* <td >
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td> */}
                </tr>
);
}

export default TableRow;