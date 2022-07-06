import React from 'react'
import cookie from '../home/cookie.jpg'
import glass from '../home/glass.jpg'
import headPhone from '../home/headPhone.jpg'
import perfume from '../home/perfume.jpg'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StaticProductsTable = ({ modalOpen }) => {
    const functio = () => {
        modalOpen()
    }
    return (
        <table>
            <thead>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td>ID</td>
                    <td>PHOTO</td>
                    <td>NAME</td>
                    <td>UNIT OF MEASUREMENT</td>
                    <td>DATE</td>
                    <td>LOCATION</td>
                    <td>PRICE AT</td>
                    <td>EDIT</td>
                    <td>REMOVE</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#1</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>Cookie</td>
                    <td>kg</td>
                    <td>30/06/2022</td>
                    <td>Random Location</td>
                    <td>$1000</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#2</td>
                    <td>
                        <img src={headPhone} alt="headphone" />
                    </td>
                    <td>HeadPhone</td>
                    <td>number</td>
                    <td>30/06/2022</td>
                    <td>Random Location</td>
                    <td>$1340</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#3</td>
                    <td>
                        <img src={glass} alt="glass" />
                    </td>
                    <td>Glass</td>
                    <td>Number</td>
                    <td>30/06/2022</td>
                    <td>Random Location</td>
                    <td>$1420</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#4</td>
                    <td>
                        <img src={perfume} alt="perfume" />
                    </td>
                    <td>Perfume</td>
                    <td>Number</td>
                    <td>30/06/2022</td>
                    <td>Random Location</td>
                    <td>$3039</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#5</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>Cookie</td>
                    <td>kg</td>
                    <td>30/06/2022</td>
                    <td>Random Location</td>
                    <td>$1000</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#6</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>Cookie</td>
                    <td>kg</td>
                    <td>30/06/2022</td>
                    <td>Random Location</td>
                    <td>$1000</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#7</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>Cookie</td>
                    <td>kg</td>
                    <td>30/06/2022</td>
                    <td>Random Location</td>
                    <td>$1000</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#8</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>Cookie</td>
                    <td>kg</td>
                    <td>30/06/2022</td>
                    <td>Random Location</td>
                    <td>$1000</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#9</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>Cookie</td>
                    <td>kg</td>
                    <td>30/06/2022</td>
                    <td>Random Location</td>
                    <td>$1000</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#10</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>Cookie</td>
                    <td>kg</td>
                    <td>30/06/2022</td>
                    <td>Random Location</td>
                    <td>$1000</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default StaticProductsTable