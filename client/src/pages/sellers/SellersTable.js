import React from 'react'
import { Link } from 'react-router-dom'
import api from "../../http";


const SellersTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>EMAIL</td>
                    <td>NUMBER</td>
                    {/* <td>GENDER</td>
                    <td>AGE</td>
                    <td>REGION</td>
                    <td>ZONE</td> */}
                    <td>SELLER TYPE</td>
                    <td>SELLER LEVEL</td>
                    <td>STATUS</td>
                    <td>VIEW</td>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    )
}

export default SellersTable