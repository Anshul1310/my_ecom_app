import React from 'react'
import cookie from '../home/cookie.jpg'
import glass from '../home/glass.jpg'
import headPhone from '../home/headPhone.jpg'
import perfume from '../home/perfume.jpg'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const EarningsTable = ({ modalOpen }) => {
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
                    <td>STOCK</td>
                    <td>PRICE</td>
                    <td>COMMISSION</td>
                    <td>CREATED AT</td>
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
                    <td className="StockIn">In Stock</td>
                    <td>$4990</td>
                    <td>$1000</td>
                    <td>02/03/2021</td>
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
                    <td>Headphone</td>
                    <td className="StockOut">Out of Stock</td>
                    <td>$8700</td>
                    <td>$1000</td>
                    <td>24/04/2022</td>
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
                    <td>glass</td>
                    <td className="StockIn">In Stock</td>
                    <td>$7020</td>
                    <td>$1000</td>
                    <td>12/08/2022</td>
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
                    <td>perfume</td>
                    <td className="StockIn">In Stock</td>
                    <td>$9302</td>
                    <td>$1000</td>
                    <td>9/12/2022</td>
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
                    <td>cookie</td>
                    <td className="StockIn">In Stock</td>
                    <td>$4990</td>
                    <td>$1000</td>
                    <td>02/03/2021</td>
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
                    <td>cookie</td>
                    <td className="StockIn">In Stock</td>
                    <td>$4990</td>
                    <td>$1000</td>
                    <td>02/03/2021</td>
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
                    <td>cookie</td>
                    <td className="StockIn">In Stock</td>
                    <td>$4990</td>
                    <td>$1000</td>
                    <td>02/03/2021</td>
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
                    <td>cookie</td>
                    <td className="StockIn">In Stock</td>
                    <td>$4990</td>
                    <td>$1000</td>
                    <td>02/03/2021</td>
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
                    <td>cookie</td>
                    <td className="StockIn">In Stock</td>
                    <td>$4990</td>
                    <td>$1000</td>
                    <td>02/03/2021</td>
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
                    <td>cookie</td>
                    <td className="StockIn">In Stock</td>
                    <td>$4990</td>
                    <td>$1000</td>
                    <td>02/03/2021</td>
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

export default EarningsTable