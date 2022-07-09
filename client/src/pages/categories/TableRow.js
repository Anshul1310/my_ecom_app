import cookie from '../home/cookie.jpg'
import glass from '../home/glass.jpg'
import headPhone from '../home/headPhone.jpg'
import perfume from '../home/perfume.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
const TableRow=(props)=>{
	return (
		<tr>
                    <td>
                        <img src={props.image} alt="cookie" />
                    </td>
                    <td>{props.name}</td>

                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
	)
}

export default TableRow;