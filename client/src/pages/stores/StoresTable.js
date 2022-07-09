import React from 'react'
import TableRow from "./TableRow";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StoresTable = ({ modalOpen }) => {
    const functio = () => {
        modalOpen()
    }
    return (
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>STORE NAME</td>
                    <td>STORE LOCATION</td>
                    <td>STORE CAPACITY</td>
                    <td>EDIT</td>
                    <td>DELETE</td>
                </tr>
            </thead>
            <tbody>
               <TableRow modalOpen={modalOpen} />
            </tbody>
        </table>
    )
}

export default StoresTable